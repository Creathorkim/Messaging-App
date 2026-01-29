"use client";

import { createContext, useEffect, useState, useRef } from "react";
import { fetchUser } from "@/lib/api/auth";
import { getSocket } from "../socket/socket";
import { Socket } from "socket.io-client";

export type User = {
  status: "friends" | "pending" | "awaiting_response" | null;
  requestId: string;
  id: string;
  username: string;
  email: string;
  profileImage: string;
  bio: string;
  isOnline: boolean;
  createdAt: number;
};

export type Friend = {
  id: string;
  username: string;
  email: string;
  profileImage: string;
  bio: string;
  isOnline: boolean;
  createdAt: number;
  lastMessage: string;
  unreadCount: number;
  chatId: string;
};

type UserType = {
  user: User;
  friends: Friend[];
};

type UserContextType = {
  data: UserType | null;
  friends: Friend[];
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
};
export const UserContext = createContext<UserContextType | null>(null);

type UserDataProps = {
  children: React.ReactNode;
};

export const UserData = ({ children }: UserDataProps) => {
  const [data, setData] = useState<UserType | null>(null);
  const [friends, setFriends] = useState<Friend[]>([]);
  const userIdRef = useRef<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = getSocket();
    }

    const socket = socketRef.current;

    if (!socket) return;

    const init = async () => {
      try {
        const fetched = await fetchUser();
        setData(fetched);
        setFriends(fetched.friends);

        const token = localStorage.getItem("token");
        if (!token) return;

        socket.auth = { token };

        if (!socket.connected) {
          socket.connect();
        }
      } catch (err) {
        console.log(err);
      }
    };

    init();

    return () => {
      socket.off("lastMessage");
      socket.off("unreadCount");
    };
  }, []);

  useEffect(() => {
    if (data?.user?.id) {
      userIdRef.current = data.user.id;
    }
  }, [data]);

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket) return;

    socket.off("lastMessage");
    socket.off("unreadCount");

    socket.on("lastMessage", (dt) => {
      setFriends((prev) =>
        prev.map((fr) =>
          fr.chatId === dt.chatId
            ? {
                ...fr,
                lastMessage: dt.content,
              }
            : fr,
        ),
      );
    });

    socket.on("unreadCount", (dt) => {
      const isNotFromMe = dt.senderId !== userIdRef.current;

      if (!isNotFromMe) return;

      console.log("Unread handler called for chatId:", dt.chatId);

      setFriends((prev) =>
        prev.map((fr) =>
          fr.chatId === dt.chatId
            ? { ...fr, unreadCount: fr.unreadCount + 1 }
            : fr,
        ),
      );
    });
  }, []);

  return (
    <UserContext.Provider value={{ data, friends, setFriends }}>
      {children}
    </UserContext.Provider>
  );
};
