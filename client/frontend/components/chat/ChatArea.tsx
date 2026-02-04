"use client";

import {
  Check,
  CheckCheck,
  MoreVertical,
  Send,
  Mic,
  Hand,
  Loader,
  File as FileIcon,
  X,
  ImagePlus,
  CornerUpLeft,
  Edit,
  Trash2,
  Loader2,
  ArrowLeft
} from "lucide-react";
import {
  useEffect,
  useState,
  useContext,
  useRef,
  FormEvent,
  SetStateAction,
} from "react";
import { chatHistory, groupChatHistory } from "@/lib/api/auth";
import { selectedFriendProp } from "@/app/(client)/HomeScreen/page";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { getSocket } from "@/lib/socket/socket";
import { uploadFileApi } from "@/lib/api/auth";
import { UserContext } from "@/lib/context/UserProvider";
import Image from "next/image";
import type { Group } from "@/lib/context/UserProvider";
import { Socket } from "socket.io-client";
import { unFriendUser } from "@/lib/api/auth";
import { leaveGroup } from "@/lib/api/auth";
import { addMemberToGroup } from "@/lib/api/auth";
import type { MobileView } from "@/app/(client)/HomeScreen/page";
type chatAreaProps = {
  friend?: selectedFriendProp;
  chatId?: string;
  friendId?: string;
  group?: Group;
  groupId?: string;
  setMobileView: React.Dispatch<SetStateAction<MobileView>>;
};

type Sender = {
  bio?: string;
  createdAt?: string;
  email?: string;
  id?: string;
  isOnline?: boolean;
  password?: string;
  profileImage?: string;
  username?: string;
};

export type Message = {
  groupId?: string;
  id?: string;
  senderId?: string;
  recipientId?: string;
  read?: boolean;
  createdAt?: string;
  content?: string;
  fileUrl?: string;
  voiceMessage?: string;
  seen?: boolean;
  chatId?: string;
  senderImage?: string;
  sender?: Sender;
  messageId?: string;
  directChatId?: string;
};

export default function ChatArea({
  friend,
  chatId,
  friendId,
  group,
  groupId,
  setMobileView,
}: chatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [groupMessages, setGroupMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceNote, setVoiceNote] = useState<Blob | null>(null);
  const [voiceNoteUrl, setVoiceNoteUrl] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const [sendLoading, sendSetLoading] = useState(false);
  const [openMessageId, setOpenMessageId] = useState<string | null>(null);
  const [replyMessage, setReplyMessage] = useState<Message | null>(null);
  const [editMessage, setEditMessage] = useState<Message | null>(null);
  const isTyping = useRef(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const [typingData, setTypingData] = useState("");
  const [friendOnline, setFriendOnline] = useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [membersToAddToGroup, setMembersToAddToGroup] = useState<string[]>([]);
  const [addMemberDialog, setAddMemberDialog] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  const { data, friends, setFriends } = useContext(UserContext)!;
  const router = useRouter();
  useEffect(() => {
    const Socket = getSocket();
    if (!socketRef.current) {
      socketRef.current = Socket;
    }
  }, []);

  useEffect(() => {
    if (friend) {
      const fetchChat = async () => {
        try {
          setLoading(true);
          const res = await chatHistory(chatId!);
          if (res?.error) {
            console.log(res.error);
            setLoading(false);
            return;
          }
          console.log(res?.data.chatMessage);
          setMessages(res?.data.chatMessage.messages);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      fetchChat();
    }

    if (group) {
      const fetchChat = async () => {
        try {
          setLoading(true);
          const res = await groupChatHistory(groupId!);
          if (res?.error) {
            console.log(res.error);
            setLoading(false);
            return;
          }
          console.log(res?.data);
          setGroupMessages(res?.data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      fetchChat();
    }
  }, [chatId, friend, groupId, group]);

  useEffect(() => {
    const Socket = socketRef.current;
    if (!Socket) return;
    if (!friend) return;
    if (!Socket.connected) return;
    if (!messages || !data?.user?.id) return;

    Socket.on("incomingRead", (data) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === data.readMessage.id ? { ...msg, seen: true } : msg,
        ),
      );
    });

    messages.forEach((msg) => {
      if (msg.senderId !== data?.user.id && !msg.seen) {
        Socket.emit("read", { messageId: msg.id, friendId: friendId });
      }
    });
    return () => {
      Socket.off("read");
      Socket.off("incomingRead");
    };
  }, [messages, data?.user?.id, friendId, setFriends, friend]);

  useEffect(() => {
    const Socket = socketRef.current;

    if (!Socket) return;
    if (!Socket.connected) return;

    if (friend) {
      Socket.emit("getFriendOnline", { friendId });
      Socket.on("friendOnline", (data) => {
        if (data.userId === friendId) {
          setFriendOnline(data.isOnline);
        }
      });

      Socket.off("message:receive");
      Socket.on("message:receive", (message) => {
        setMessages((prev) => [...prev, message]);
      });
    }

    if (group) {
      Socket.emit("group:join", { groupId });

      Socket.off("group_message:receive");
      Socket.on("group_message:receive", (data) => {
        setGroupMessages((prev) => [...prev, data]);
      });
      Socket.on("groupTyping:start", (data) => {
        setTypingData(data.message);
      });

      Socket.on("group:editedMessage", (data) => {
        setGroupMessages((prev) =>
          prev.map((msg) => (msg.id === data.id ? data : msg)),
        );
      });

      Socket.on("group:deletedMessage", (data) => {
        setGroupMessages((prev) => prev.filter((msg) => msg.id !== data.id));
      });
    }

    Socket.on("edit-message", (updatedMessage: Message) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === updatedMessage.id ? updatedMessage : msg,
        ),
      );
    });

    Socket.on("message:delete", (deletedMessage: Message) => {
      setMessages((prev) => prev.filter((msg) => msg.id !== deletedMessage.id));
    });

    Socket.on("listeningTyping", (data) => {
      setTypingData(data.message);
    });

    return () => {
      Socket.off("edit-message");
      Socket.off("message:delete");
      Socket.off("listeningTyping");
      Socket.off("friendOnline");
      Socket.off("group_message:receive");
      Socket.emit("group:leave", { groupId });
      Socket.off("message:receive");
      Socket.off("group:editedMessage");
      Socket.off("group:deletedMessage");
      Socket.off("groupTyping:start");
    };
  }, [friendId, friend, group, groupId]);

  useEffect(() => {
    setFriends((prev) =>
      prev.map((fr) => (fr.chatId === chatId ? { ...fr, unreadCount: 0 } : fr)),
    );
  }, [chatId, setFriends]);

  const handleSendButton = async (e?: FormEvent) => {
    e?.preventDefault();
    const Socket = socketRef.current;

    if (!Socket) return;
    sendSetLoading(true);
    if (!text?.trim() && !file && !voiceNote) return;

    const messageData: Message = {
      recipientId: friend?.id,
    };

    if (file) {
      const form = new FormData();
      form.append("file", file);
      const fileUrl = await uploadFileApi(form);
      if (fileUrl?.error) {
        console.log(fileUrl.error);
        return;
      }
      console.log(fileUrl?.data);
      messageData.fileUrl = fileUrl?.data;
    }
    if (voiceNote) {
      const blobFile = new File([voiceNote], "voiceMessage.webm", {
        type: "audio/webm",
      });
      const form = new FormData();
      form.append("file", blobFile);
      const voiceNoteUrl = await uploadFileApi(form);
      if (voiceNoteUrl?.error) {
        console.log(voiceNoteUrl.error);
        return;
      }
      console.log(voiceNoteUrl);
      messageData.voiceMessage = voiceNoteUrl?.data;
    }
    if (voiceNoteUrl) {
      setVoiceNoteUrl(null);
    }

    if (text?.trim()) {
      messageData.content = text;
    }

    sendSetLoading(false);
    if (replyMessage) {
      setReplyMessage(null);
      messageData.messageId = replyMessage.messageId;
      messageData.directChatId = chatId;
      Socket.emit("message:reply", messageData);
    } else if (editMessage) {
      messageData.messageId = editMessage.messageId;
      messageData.directChatId = chatId;
      Socket.emit("message:edit", messageData);
    } else {
      Socket.emit("message:send", messageData);
    }

    Socket.emit("typing:start", {
      isTyping: false,
      recipientId: friend?.id,
    });
    setTypingData("");
    setText("");
    setFile(null);
    setVoiceNote(null);
    setVoiceNoteUrl(null);
  };

  const handleGroupSend = async (e?: FormEvent) => {
    e?.preventDefault();
    const Socket = socketRef.current;

    if (!Socket) return;
    if (!text?.trim() && !file && !voiceNote) return;

    const messageData: Message = {
      groupId: groupId,
    };

    if (file) {
      const form = new FormData();
      form.append("file", file);
      const fileUrl = await uploadFileApi(form);
      if (fileUrl?.error) {
        console.log(fileUrl.error);
        return;
      }
      console.log(fileUrl?.data);
      messageData.fileUrl = fileUrl?.data;
    }

    if (voiceNote) {
      const blobFile = new File([voiceNote], "voiceMessage.webm", {
        type: "audio/webm",
      });
      const form = new FormData();
      form.append("file", blobFile);
      const voiceNoteUrl = await uploadFileApi(form);
      if (voiceNoteUrl?.error) {
        console.log(voiceNoteUrl.error);
        return;
      }
      console.log(voiceNoteUrl);
      messageData.voiceMessage = voiceNoteUrl?.data;
    }

    if (voiceNoteUrl) {
      setVoiceNoteUrl(null);
    }

    if (text?.trim()) {
      messageData.content = text;
    }

    if (replyMessage) {
      messageData.groupId = groupId;
      messageData.messageId = replyMessage.messageId;
      Socket.emit("group:reply-message", messageData);
    } else if (editMessage) {
      messageData.messageId = editMessage.messageId;
      messageData.groupId = groupId;
      Socket.emit("group:edit", messageData);
    } else {
      Socket.emit("group_message:send", messageData);
    }

    setText("");
    setFile(null);
    setVoiceNote(null);
    setVoiceNoteUrl(null);
    setReplyMessage(null);
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorder.current.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorder.current.onstop = () => {
      const blob = new Blob(audioChunks.current, { type: "audio/webm" });
      const voiceNoteUrl = URL.createObjectURL(blob);
      console.log("Blob", blob);
      setVoiceNoteUrl(voiceNoteUrl);
      setVoiceNote(blob);
    };

    setIsRecording(true);
    mediaRecorder.current.start();
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  };

  const handleReplyMessage = (data: {
    directChatId: string;
    content?: string;
    fileUrl?: string;
    voiceMessage?: string;
    senderId: string;
    messageId: string;
    recipientId: string;
  }) => {
    setReplyMessage(data);
    setOpenMessageId(null);
  };

  const groupReplyMessage = (data: {
    groupId: string;
    content?: string;
    fileUrl?: string;
    voiceMessage?: string;
    messageId: string;
  }) => {
    setReplyMessage(data);
    setOpenMessageId(null);
  };

  const handleEditMessage = (data: {
    directChatId: string;
    content?: string;
    senderId: string;
    messageId: string;
    recipientId: string;
  }) => {
    setEditMessage(data);
    setOpenMessageId(null);

    if (data.content) {
      setText(data.content);
    }
  };

  const handleGroupEditMessage = (data: {
    groupId: string;
    content: string;
    messageId: string;
  }) => {
    setEditMessage(data);
    setOpenMessageId(null);
    if (data.content) {
      setText(data.content);
    }
  };

  const handleDeleteMessage = (data: {
    messageId: string;
    recipientId: string;
  }) => {
    setOpenMessageId(null);
    const Socket = socketRef.current;

    if (!Socket) return;
    try {
      Socket.emit("message:delete", data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGroupDeleteMessage = (data: {
    messageId: string;
    groupId: string;
  }) => {
    setOpenMessageId(null);
    const Socket = socketRef.current;

    if (!Socket) return;
    try {
      Socket.emit("group:delete", data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleTyping = () => {
    const Socket = socketRef.current;

    if (!Socket) return;
    try {
      if (!isTyping.current) {
        Socket.emit("typing:start", {
          isTyping: true,
          recipientId: friend?.id,
        });
      }

      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }

      typingTimeout.current = setTimeout(() => {
        setTypingData("");
        Socket.emit("typing:start", {
          isTyping: false,
          recipientId: friend?.id,
        });
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfriend = async () => {
    try {
      const unfriendUser = await unFriendUser(friendId!);
      if (unfriendUser?.error) {
        return;
      }

      router.push("/HomeScreen");
    } catch (err) {
      console.log(err);
    }
  };

  const exitGroup = async () => {
    try {
      const exitGroup = await leaveGroup(groupId!);
      if (exitGroup?.error) {
        return;
      }

      router.push("/HomeScreen");
    } catch (err) {
      console.log(err);
    }
  };

  const addMembersToGroup = async () => {
    setLoading(true);
    try {
      if (membersToAddToGroup.length < 1) {
        setLoading(false);
        return;
      }

      const addMemberToGroupApi = await addMemberToGroup(
        groupId!,
        membersToAddToGroup,
      );
      if (addMemberToGroupApi?.error) {
        alert(addMemberToGroupApi.error);
        setLoading(false);
        return;
      }
      setLoading(false);
      alert("Member have been added successfully.");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleGroupTyping = () => {
    const Socket = socketRef.current;
    if (!Socket) return;

    try {
      if (!isTyping.current) {
        Socket.emit("groupTyping:start", { isTyping: true, groupId: groupId });
      }

      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }

      typingTimeout.current = setTimeout(() => {
        setTypingData("");
        Socket.emit("groupTyping:start", { isTyping: false, groupId: groupId });
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative flex flex-1 flex-col  bg-black w-full  ">
      <header className="sticky top-0 w-full border-b border-gray-400 p-2  ">
        <div className="flex justify-between items-center  bg-stone-900 rounded-lg p-2">
          <div className="flex gap-3 items-center">
            <div className="lg:hidden"  onClick={()=> setMobileView("sidebar")} >
              <ArrowLeft />
            </div>
            <div className="relative">
              <div
                className="rounded-full size-12 bg-cover"
                style={{
                  backgroundImage: `url(${friend ? friend?.profileImage : group?.imageUrl})`,
                }}
              ></div>
              {friend &&
                (friendOnline ? (
                  <span className="absolute bg-green-500 rounded-full w-3 h-3 shadow shadow-green-500 bottom-1 left-9"></span>
                ) : (
                  <span className="absolute bg-gray-500 rounded-full w-3 h-3 shadow shadow-gray-500 bottom-1 left-9"></span>
                ))}
            </div>
            <div>
              <h1
                className="text-white text-sm font-semibold hover:underline cursor-pointer"
                onClick={() => {
                  if (friend) {
                    setMobileView("profile");
                  }
                }}
              >
                {friend ? friend?.username : group?.name}
              </h1>

              {friend &&
                (typingData ? (
                  <p className="text-sm text-white animate-pulse">
                    {typingData}
                  </p>
                ) : friendOnline ? (
                  <p className="text-xs text-green-500">Online</p>
                ) : (
                  <p className="text-gray-500 text-xs">Offline</p>
                ))}

              {group && typingData && (
                <p className="text-sm text-white animate-pulse">{typingData}</p>
              )}
            </div>
          </div>
          <div className="relative">
            <div
              onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
              className="cursor-pointer"
            >
              {" "}
              <MoreVertical />
            </div>

            {isHeaderMenuOpen && (
              <div className="z-30 absolute top-5 right-0 flex flex-col items-start justify-start   py-2 space-y-2 bg-gray-800 text-sm rounded-lg mt-4 w-[110px]">
                <button className="flex  items-center cursor-pointer text-gray-400 px-3">
                  <div className="tracking-tighter text-start text-red-500 ">
                    {friend ? (
                      <p onClick={handleUnfriend}>Unfriend</p>
                    ) : (
                      <div className="space-y-1">
                        {group?.groupRole === "ADMIN" && (
                          <p
                            onClick={() => {
                              setAddMemberDialog(true);
                              setIsHeaderMenuOpen(false);
                            }}
                            className="text-gray-400"
                          >
                            Add member
                          </p>
                        )}
                        <p onClick={exitGroup}>Exit group</p>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="mt-4 space-y-4 mb-40  min-h-screen overflow-y-auto h-screen pb-50">
        {loading ? (
          <div className="flex items-center justify-center min-h-full">
            <p className="text-md font-bold">Loading Chat </p>
            <div className="ml-2">
              <Loader className="animate-spin" />
            </div>
          </div>
        ) : messages && messages?.length > 0 ? (
          messages.map((msg, index) => {
            const isMyMessage = msg.senderId === data?.user.id;
            const repliedMessage = messages.find((m) => m.id === msg.messageId);
            return (
              <div
                key={index}
                className={`flex  items-center ${
                  isMyMessage ? "justify-end " : "justify-start "
                } items-center gap-2`}
              >
                <div className="flex items-center pl-2 gap-2 max-w-[85%] sm:max-w-[75%] md:max-w-[60%]">
                  {!isMyMessage && (
                    <div
                      className="rounded-full bg-cover size-10"
                      style={{
                        backgroundImage: `url(${msg.senderImage || msg.sender?.profileImage})`,
                      }}
                    ></div>
                  )}

                  <div
                    className={`${
                      isMyMessage
                        ? "bg-linear-to-r from-[#7F56D9] to-[#14053b]"
                        : "bg-stone-900"
                    }   leading-relaxed p-2 md:w-md rounded-lg  overflow-hidden`}
                  >
                    {repliedMessage && (
                      <div
                        className={`pt-1 rounded-lg ${repliedMessage.senderId === data?.user.id ? "bg-purple-900/20" : "bg-purple-500"} mb-2 border-l-2 border-purple-500 pl-2 text-xs text-gray-800 h-10 items-start justify-center`}
                      >
                        <h4 className="text-md font-bold">
                          {repliedMessage.sender?.username ===
                          data?.user.username
                            ? "You"
                            : repliedMessage.sender?.username}
                        </h4>
                        {repliedMessage.content || "📎 Attachment"}
                      </div>
                    )}

                    <p className="px-2">{msg.content}</p>
                    {msg.voiceMessage && (
                      <div className="px-2">
                        <audio
                          src={msg.voiceMessage}
                          controls
                          className="w-full rounded"
                        ></audio>
                      </div>
                    )}
                    {msg.fileUrl && (
                      <a
                        href={`${msg.fileUrl}`}
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        <div className="px-2">
                          <Image
                            src={msg.fileUrl}
                            alt="Attached"
                            width={320}
                            height={320}
                            className="w-full rounded-lg shadow-md object-cover border border-gray-700"
                          />
                        </div>
                      </a>
                    )}

                    <div className="flex items-center justify-end gap-2 mt-2 ">
                      <p className=" text-end text-xs text-gray-500">
                        {new Date(msg?.createdAt ?? "").toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </p>
                      {msg.senderId === data?.user.id &&
                        (msg.seen ? (
                          <CheckCheck size={19} className="text-green-300" />
                        ) : (
                          <Check size={10} />
                        ))}
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg">
                  <button
                    className="p-2 rounded-full hover:bg-gray-800"
                    onClick={() =>
                      setOpenMessageId(
                        openMessageId === msg.id ? null : msg.id!,
                      )
                    }
                  >
                    <MoreVertical
                      size={24}
                      className="text-gray-400 cursor-pointer"
                    />
                  </button>
                  {openMessageId === msg.id && (
                    <div className="z-30 absolute top-5 right-0 flex flex-col  py-2 space-y-2 bg-gray-800 text-sm rounded-lg mt-4">
                      <button
                        className="flex gap-4 items-center cursor-pointer text-gray-400 px-3"
                        onClick={() =>
                          handleReplyMessage({
                            directChatId: chatId!,
                            content: msg.content,
                            fileUrl: msg.fileUrl,
                            voiceMessage: msg.voiceMessage,
                            senderId: msg.senderId!,
                            messageId: msg.id!,
                            recipientId: friend!.id,
                          })
                        }
                      >
                        <CornerUpLeft size={15} />
                        <p>Reply</p>
                      </button>
                      {msg.content && msg.senderId === data?.user.id && (
                        <button
                          className="flex gap-4 items-center cursor-pointer text-gray-400 px-3"
                          onClick={() =>
                            handleEditMessage({
                              directChatId: chatId!,
                              content: msg.content,
                              senderId: msg.senderId!,
                              messageId: msg.id!,
                              recipientId: friend!.id,
                            })
                          }
                        >
                          <Edit size={15} />
                          <p>Edit</p>
                        </button>
                      )}
                      {msg.senderId === data?.user.id}
                      <button
                        className="flex gap-4 items-center cursor-pointer text-red-600 border-t border-gray-300 w-full px-3 pt-1"
                        onClick={() =>
                          handleDeleteMessage({
                            messageId: msg.id!,
                            recipientId: friend!.id,
                          })
                        }
                      >
                        <Trash2 size={15} />
                        <p>Delete</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : group && groupMessages.length > 0 ? (
          groupMessages.map((msg, index) => {
            const isMyMessage = msg.senderId === data?.user.id;
            const repliedMessage = groupMessages.find(
              (m) => m.id === msg.messageId,
            );
            return (
              <div
                key={index}
                className={`flex  items-center ${
                  isMyMessage ? "justify-end " : "justify-start "
                } items-center gap-2`}
              >
                <div className="flex items-center pl-2 gap-2">
                  {!isMyMessage && (
                    <div
                      className="rounded-full bg-cover size-10"
                      style={{
                        backgroundImage: `url(${msg.sender?.profileImage})`,
                      }}
                    ></div>
                  )}

                  <div
                    className={`${
                      isMyMessage
                        ? "bg-linear-to-r from-[#7F56D9] to-[#14053b]"
                        : "bg-stone-900"
                    }  w-md leading-relaxed p-2 rounded-lg `}
                  >
                    {repliedMessage && (
                      <div
                        className={`pt-1 rounded-lg ${repliedMessage.senderId === data?.user.id ? "bg-purple-900/20" : "bg-purple-500"} mb-2 border-l-2 border-purple-500 pl-2 text-xs text-gray-800 h-10 items-start justify-center`}
                      >
                        <h4 className="text-md font-bold">
                          {repliedMessage.sender?.username ===
                          data?.user.username
                            ? "You"
                            : repliedMessage.sender?.username}
                        </h4>
                        {repliedMessage.content || "📎 Attachment"}
                      </div>
                    )}

                    <p className="px-2">{msg.content}</p>
                    {msg.voiceMessage && (
                      <div className="px-2">
                        <audio
                          src={msg.voiceMessage}
                          controls
                          className="w-full rounded"
                        ></audio>
                      </div>
                    )}
                    {msg.fileUrl && (
                      <a
                        href={`${msg.fileUrl}`}
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        <div className="px-2">
                          <Image
                            src={msg.fileUrl}
                            alt="Attached"
                            width={320}
                            height={320}
                            className="w-full rounded-lg shadow-md object-cover border border-gray-700"
                          />
                        </div>
                      </a>
                    )}

                    <div className="flex items-center justify-end gap-2 mt-2 ">
                      <p className=" text-end text-xs text-gray-500">
                        {new Date(msg?.createdAt ?? "").toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </p>

                      <Check size={10} />
                    </div>
                  </div>
                </div>

                <div className="relative rounded-lg">
                  <button
                    className="p-2 rounded-full hover:bg-gray-800"
                    onClick={() =>
                      setOpenMessageId(
                        openMessageId === msg.id ? null : msg.id!,
                      )
                    }
                  >
                    <MoreVertical
                      size={24}
                      className="text-gray-400 cursor-pointer"
                    />
                  </button>

                  {openMessageId === msg.id && (
                    <div className="z-30 absolute top-5 right-0 flex flex-col  py-2 space-y-2 bg-gray-800 text-sm rounded-lg mt-4">
                      <button
                        className="flex gap-4 items-center cursor-pointer text-gray-400 px-3"
                        onClick={() =>
                          groupReplyMessage({
                            groupId: groupId!,
                            content: msg.content,
                            fileUrl: msg.fileUrl,
                            voiceMessage: msg.voiceMessage,
                            messageId: msg.id!,
                          })
                        }
                      >
                        <CornerUpLeft size={15} />
                        <p>Reply</p>
                      </button>
                      {msg.content && msg.senderId === data?.user.id && (
                        <button
                          className="flex gap-4 items-center cursor-pointer text-gray-400 px-3"
                          onClick={() =>
                            handleGroupEditMessage({
                              groupId: groupId!,
                              content: msg.content!,
                              messageId: msg.id!,
                            })
                          }
                        >
                          <Edit size={15} />
                          <p>Edit</p>
                        </button>
                      )}
                      {msg.senderId === data?.user.id}
                      <button
                        className="flex gap-4 items-center cursor-pointer text-red-600 border-t border-gray-300 w-full px-3 pt-1"
                        onClick={() =>
                          handleGroupDeleteMessage({
                            messageId: msg.id!,
                            groupId: groupId!,
                          })
                        }
                      >
                        <Trash2 size={15} />
                        <p>Delete</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center mt-10 mx-auto">
            <div className="p-4 rounded-sm border-4 border-gray-600 blur-sm">
              <div className="bg-linear-to-br from-white to-gray-900 p-3 rounded-lg w-40 h-28 flex justify-center items-center">
                <MessageCircle size={40} className="text-purple-700" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-6 space-y-2 text-center">
              <h1 className="text-2xl font-bold  tracking-tight">
                No messages yet
              </h1>
              <p className="text-[#94a3b8] text-base font-normal leading-relaxed max-w-[360px]">
                Be the first to break the silence. Start the conversation with{" "}
                <span className="text-purple-800 font-medium">
                  {friend ? friend?.username : "the group."}
                </span>{" "}
                below. All messages are end-to-end encrypted.
              </p>
              <button
                className="flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#232f48] hover:bg-[#2d3b55] text-white text-sm font-semibold"
                onClick={() => setText("👋")}
              >
                <Hand className="rotate-25" />
                <span>Say Hello</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-2 w-full  px-1  rounded-2xl mt-2  ">
        {sendLoading ? <Loader size={100}></Loader> : ""}
        {voiceNoteUrl && (
          <div className="m-2 bg-stone-800 rounded-lg p-3 border border-gray-600">
            <p className="text-sm font-medium text-purple-500">
              Voice Message Ready
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1">
                <audio src={voiceNoteUrl} controls className="w-full mt-2" />
              </div>
              <button
                onClick={() => {
                  if (voiceNoteUrl) URL.revokeObjectURL(voiceNoteUrl);
                  setVoiceNoteUrl(null);
                  setVoiceNote(null);
                }}
                className="hover:bg-gray-700 p-1 rounded"
              >
                <X size={30} />
              </button>
            </div>
          </div>
        )}
        {file && (
          <div className="bg-stone-800 m-2 p-3 flex items-center justify-between rounded-lg border backdrop-blur-2xl border-gray-400  ">
            <div className=" flex items-center gap-3">
              <div className="rounded bg-purple-600 p-2">
                <FileIcon size={15} />
              </div>
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-400">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={() => setFile(null)}
              className="hover:bg-gray-700 p-1 rounded"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {isRecording && (
          <div className="m-2 bg-red-900/20 border backdrop-blur-2xl  border-red-500 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded-full animate-pulse">
                <Mic size={20} />
              </div>
              <p className="text-sm animate-pulse">Recording...</p>
            </div>
            <button
              onClick={stopRecording}
              className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm"
            >
              Stop
            </button>
          </div>
        )}

        {replyMessage && (
          <div className="m-2  bg-purple-900/30 border-l-4 backdrop-blur-2xl border-purple-500 p-3 rounded-lg flex justify-between items-center">
            <div className="flex-1">
              <p className="text-xs text-purple-400">Replying to message</p>
              <p className="text-sm text-gray-300 truncate">
                {replyMessage.content || "📎 Attachment"}
              </p>
            </div>
            <button onClick={() => setReplyMessage(null)}>
              <X size={18} className="text-gray-400" />
            </button>
          </div>
        )}
        <form
          onSubmit={friend ? handleSendButton : handleGroupSend}
          className="flex gap-2 sticky bottom-0 "
        >
          <div className="bg-stone-900 rounded-lg flex flex-1 items-center gap-6 p-2">
            <div className="flex gap-3 items-center flex-1">
              <input
                type="file"
                name="file"
                id="file"
                accept="images/*"
                hidden
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <div
                className={`hover:bg-gray-600 hover:rounded-lg  p-2 cursor-pointer ${
                  file && "bg-purple-600"
                }`}
                onClick={() => document.getElementById("file")?.click()}
              >
                <ImagePlus size={24} />
              </div>

              <textarea
                name=""
                id=""
                value={text!}
                rows={1}
                className="w-full outline-none border-0 p-2  overflow-hidden resize-none"
                placeholder="Type your message..."
                onChange={(e) => {
                  setText(e.target.value);
                  if (friend) {
                    handleTyping();
                  }

                  if (group) {
                    handleGroupTyping();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (friend) {
                      handleSendButton();
                    } else {
                      handleGroupSend();
                    }
                  }
                }}
              ></textarea>
            </div>

            <div className="flex ">
              <div
                className={`hover:bg-gray-600 p-2 rounded-lg cursor-pointer ${
                  isRecording && "bg-red-600"
                }`}
                onClick={() => {
                  if (!isRecording) startRecording();
                }}
              >
                <Mic
                  size={24}
                  className={`${isRecording && "animate-pulse"}`}
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-purple-600 hover:bg-purple-800 p-4 flex items-center justify-center">
            <button type="submit">
              <Send />
            </button>
          </div>
        </form>
      </div>
      {addMemberDialog && (
        <div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center ">
          <div className=" bg-[#231730] w-md rounded-xl border border-purple-500">
            <div className=" px-4 pt-6 flex items-center justify-between  pb-6 border-b border-gray-400">
              <div>
                <h1 className="text-[24px]  font-bold ">Add members</h1>
                <p className="text-sm text-gray-600">
                  Select friends to add to the group
                </p>
              </div>
              <X
                className="text-gray-500"
                onClick={() => setAddMemberDialog(false)}
              />
            </div>
            <div className="px-4 pt-4 pb-6">
              <h3 className="font-bold text-gray-400 text-sm">Friends</h3>
              {friends.map((fr, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-white/10 mt-2"
                >
                  <div
                    className="bg-cover size-10 rounded-full"
                    style={{
                      backgroundImage: `url(${fr.profileImage})`,
                    }}
                  ></div>

                  <p className="text-white text-base font-medium flex-1">
                    {fr.username}
                  </p>

                  <input
                    type="checkbox"
                    // value={groupData.members}
                    onClick={() => {
                      const existingId = membersToAddToGroup.find(
                        (id) => id === fr.id,
                      );

                      setMembersToAddToGroup((prev) =>
                        existingId
                          ? prev.filter((id) => id !== fr.id)
                          : [...prev, fr.id],
                      );
                    }}
                    className="h-5 w-5 rounded-lg bg-[#192233] border-[#324467] focus:ring-1 focus:ring-primary/50"
                  />
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center px-4 py-6 border-t border-gray-400">
              <button
                onClick={() => setAddMemberDialog(false)}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-500 bg-[#362348] hover:bg-[#4d3267]"
              >
                Cancel
              </button>
              <button
                onClick={addMembersToGroup}
                className="px-8 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#7f13ec] hover:bg-[#4d3267]"
              >
                {loading ? (
                  <div className="flex gap-3">
                    <Loader2 className="animate-spin text-white  text-center" />
                    <p>Add tp Group</p>
                  </div>
                ) : (
                  <>Add to Group</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
