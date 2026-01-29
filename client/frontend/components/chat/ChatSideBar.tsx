"use client";

import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/lib/context/UserProvider";
import { getSocket } from "@/lib/socket/socket";
import { MessageSquare } from "lucide-react";
import { selectedFriendProp } from "@/app/(client)/HomeScreen/page";
import type { Friend } from "@/lib/context/UserProvider";
import {
  Settings,
  Search,
  Bell,
  UsersRound,
  MessageSquarePlus,
} from "lucide-react";

type ChatSidebarType = {
  handleAdminProfileDialog: () => void;
  handleSettings: () => void;
  handleInboxDialog: () => void;
  handleGroupDialog: () => void;
  handleAddFriendsDialog: () => void;
  handleChatArea: (
    friend: selectedFriendProp,
    chatId: string,
    fId: string,
  ) => void;
};

type usersOnlineType = {
  id: string;
  isOnline: boolean;
  profileImage: string;
  username: string;
};

export default function ChatSideBar({
  handleAdminProfileDialog,
  handleSettings,
  handleInboxDialog,
  handleGroupDialog,
  handleAddFriendsDialog,
  handleChatArea,
}: ChatSidebarType) {
  const { data, friends } = useContext(UserContext)!;
  const [usersOnline, setUsersOnline] = useState<usersOnlineType[]>([]);
  const [amOnline, setAmOnline] = useState(false);
  const user = data?.user;
  const Socket = getSocket();

  useEffect(() => {
    Socket.on("onlineUsers", (data) => {
      setUsersOnline(data.usersOnline);
    });

    Socket.on("onlineUser", (data) => {
      setAmOnline(data.isOnline);
    });

    // Socket.on("message:receive", (data) => {
    //   setFriend((prev) =>
    //     prev?.map((friend) =>
    //       friend.chatId === data.chatId
    //         ? { ...friend, lastMessage: data.content }
    //         : friend,
    //     ),
    //   );
    // });

    return () => {
      Socket.off("onlineUsers");
      Socket.off("onlineUser");
      // Socket.off("message:receive");
    };
  }, [Socket]);

  return (
    <div className="flex flex-col bg-black w-full lg:w-80 space-y-4  p-2 pt-4  shrink-0 lg:border-r border-gray-600 overflow-y-auto">
      {/* FIRST HEADER  */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div
              className="rounded-full size-12 bg-cover bg-center"
              style={{
                backgroundImage: `url(${user?.profileImage})`,
              }}
            ></div>

            {amOnline ? (
              <span className="absolute bg-green-500 w-3 h-3 rounded-full bottom-1 left-9 shadow shadow-green-500"></span>
            ) : (
              <span className="absolute bg-gray-500 w-3 h-3 rounded-full bottom-1 left-9"></span>
            )}
          </div>
          <div className="flex flex-col">
            <button
              className="text-white font-medium text-base hover:underline cursor-pointer"
              onClick={handleAdminProfileDialog}
            >
              {user?.username}
            </button>

            {amOnline ? (
              <p className="text-green-500 text-sm font-medium">Online</p>
            ) : (
              <p className="text-gray-500 text-sm font-medium">Offline</p>
            )}
          </div>
        </div>
        <button className="cursor-pointer" onClick={handleSettings}>
          <Settings size={30} />
        </button>
      </div>

      {/* SECOND HEADER  */}
      <div className="flex flex-row items-center gap-3 md:gap-2 mt-2  ">
        <div className="flex bg-stone-900 rounded-lg items-center p-2 flex-1 md:w-6">
          <Search size={24} className="text-white" />

          <form action="">
            <input
              type="text"
              className="px-2 py-1  text-white rounded-lg outline-none"
              placeholder="Search friends"
            />
          </form>
        </div>
        <div className="relative">
          <button
            className="bg-[#7F56D9] p-3 rounded-lg cursor-pointer"
            onClick={handleInboxDialog}
          >
            <Bell size={23} />
          </button>
          <div className="absolute left-10 bottom-10 rounded-full w-3 h-3 bg-blue-600 shadow shadow-blue-600"></div>
        </div>
        <button
          className="bg-[#7F56D9] p-3 rounded-lg cursor-pointer outline-none"
          onClick={handleGroupDialog}
        >
          <UsersRound size={20} />
        </button>
      </div>

      {/* THIRD HEADER  */}
      <div className="mt-1 space-y-2 w-full">
        <h1 className="text-gray-500 font-medium">Online Users</h1>
        <div className="flex items-center gap-2">
          {usersOnline?.length > 0 ? (
            usersOnline.map((user, index) => (
              <div key={index} className="relative cursor-pointer">
                <div
                  className="rounded-full bg-cover size-10"
                  style={{
                    backgroundImage: `url(${user.profileImage})`,
                  }}
                ></div>
                {user.isOnline ? (
                  <span className="absolute rounded-full bg-green-500 shadow shadow-green-500 w-2 h-2 bottom-1 left-8"></span>
                ) : (
                  <span className="absolute rounded-full bg-gray-500 shadow shadow-gray-500 w-2 h-2 bottom-1 left-8"></span>
                )}
              </div>
            ))
          ) : (
            <p className="text-sm font-semibold">
              None of your friends are online.
            </p>
          )}
        </div>
      </div>

      {/* FOURTH SECTION  */}
      <div className="flex flex-col space-y-2 mt-2 h-full">
        <h1 className="text-gray-500 font-medium">Conversations</h1>
        {friends && friends.length > 0 ? (
          friends.map((fr, index) => (
            <div
              key={index}
              className="flex flex-row items-center p-2 gap-2 cursor-pointer rounded-lg hover:bg-stone-900"
              onClick={() => {
                handleChatArea(fr, fr.chatId, fr.id);
              }}
            >
              <div className="relative">
                <div
                  className="rounded-full bg-cover size-12 border shadow-[0_0_4px_2px_#7F56D9]"
                  style={{ backgroundImage: `url(${fr.profileImage})` }}
                ></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <h1 className="text-white text-sm font-semibold">
                    {fr.username}
                  </h1>
                  <p className="text-xs text-gray-400 truncate">
                    {fr.lastMessage ?? "📎 Attachment"}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  {fr.unreadCount > 0 && (
                    <div className="flex items-center justify-center bg-[#7F56D9] text-white size-5 rounded-full p-3 text-sm font-medium">
                      {fr.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center my-auto min-h-full space-y-5 px-4">
            <div className="flex items-center justify-center w-full rounded-lg bg-linear-to-tr from-purple-800 py-8 to-purple-400">
              <MessageSquare size={40} />
            </div>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Your inbox is waiting
            </h1>
            <p className="text-slate-400  ">
              It looks a bit quiet here. Connect with friends.{" "}
            </p>
            <button
              className="bg-[#7F56D9] mt-3 w-full py-3 gap-3 rounded-lg text-white cursor-pointer  hover:bg-purple-800 transition-all duration-200"
              onClick={handleAddFriendsDialog}
            >
              Start a New Chat
            </button>
          </div>
        )}

        {/* ADD FRIEND BUTTON  */}
        <div className="sticky h-full sm:bottom-40 md:bottom-0  flex items-end justify-end p-2">
          <button
            className="bg-[#7F56D9] p-2 rounded-lg text-white cursor-pointer w-12 flex items-center justify-center"
            onClick={handleAddFriendsDialog}
          >
            <MessageSquarePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
