"use client";

import { useState } from "react";
import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatArea from "@/components/chat/ChatArea";
import UserProfilePanel from "@/components/chat/UserProfilePanel";
import GroupDialog from "@/components/chat/dialogs/GroupDialog";
import InboxDialog from "@/components/chat/dialogs/InboxDialog";
import AddFriendsDialog from "@/components/chat/dialogs/AddFriendsDialog";
import ProfileDialog from "@/components/chat/dialogs/ProfileDialog";
import EditProfileDialog from "@/components/chat/dialogs/handleEditProfileDialog";
import SettingsDialog from "@/components/chat/dialogs/SettingsDialog";
import type { Group } from "@/lib/context/UserProvider";
export type selectedFriendProp = {
  id: string;
  username: string;
  profileImage: string;
  isOnline: boolean;
  lastMessage?: string;
  unreadCount?: number;
  bio?: string;
  createdAt?: number;
  chatId?: string;
};

export type MobileView = "sidebar" | "chat" | "profile";

export default function ClientHomePage() {
  const [isGroup, setIsGroup] = useState(false);
  const [isInbox, setIsInbox] = useState(false);
  const [addFriends, setAddFriends] = useState(false);
  const [settings, setSettings] = useState(false);
  const [adminProfile, setAdminProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [chatArea, setChatArea] = useState(false);
  const [selectedFriend, setSelectedFriend] =
    useState<selectedFriendProp | null>(null);

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [groupId, setGroupId] = useState("");
  const [chatId, setChatId] = useState("");
  const [friendId, setFriendId] = useState("");
  const [mobileView, setMobileView] = useState<MobileView>("sidebar");

  const handleGroupDialog = () => {
    setIsGroup(!isGroup);
  };
  const handleInboxDialog = () => {
    setIsInbox(!isInbox);
  };
  const handleAddFriendsDialog = () => {
    setAddFriends(!addFriends);
  };

  const handleSettings = () => {
    setSettings(!settings);
  };

  const handleAdminProfileDialog = () => {
    setAdminProfile(!adminProfile);
  };

  const handleEditDialog = () => {
    setEditProfile(!editProfile);
  };

  const handleChatArea = (
    friend?: selectedFriendProp,
    group?: Group,
    groupId?: string,
    id?: string,
    fId?: string,
  ) => {
    setChatArea(true);
    setSelectedFriend(friend!);
    setSelectedGroup(group!);
    setGroupId(groupId!);
    setChatId(id!);
    setFriendId(fId!);
  };

  return (
    <div>
      <section className="bg-[#060010] h-screen overflow-hidden flex flex-row w-full text-white pt-1 px-1 md:py-0 md:px-0">
        {/* CHATSIDEBAR  */}

        <div
          className={`h-full ${mobileView !== "sidebar" ? "hidden lg:block" : "w-full lg:w-80"}`}
        >
          <ChatSideBar
            handleAdminProfileDialog={handleAdminProfileDialog}
            handleSettings={handleSettings}
            handleInboxDialog={handleInboxDialog}
            handleGroupDialog={handleGroupDialog}
            handleAddFriendsDialog={handleAddFriendsDialog}
            handleChatArea={handleChatArea}
            setMobileView={setMobileView}
          />
        </div>

        {/* CHAT AREA */}
        <div
          className={`${mobileView !== "chat" ? "hidden lg:block" : "flex"} w-full`}
        >
          {chatArea && (selectedFriend || selectedGroup) && (
            <ChatArea
              friend={selectedFriend!}
              chatId={chatId}
              friendId={friendId}
              group={selectedGroup!}
              groupId={groupId}
              setMobileView={setMobileView}
            />
          )}
        </div>

        {/* USER PROFILE PANEL  */}
        <div
          className={`${mobileView !== "profile" ? "hidden md:block" : "w-full md:w-[470px]"} `}
        >
          {mobileView === "profile" && selectedFriend && (
            <UserProfilePanel
              friend={selectedFriend}
              setMobileView={setMobileView}
            />
          )}
        </div>
      </section>

      {/* // CREATE GROUP DIALOG */}
      {isGroup && <GroupDialog handleGroupDialog={handleGroupDialog} />}

      {/* Notifications  */}
      {isInbox && <InboxDialog handleInboxDialog={handleInboxDialog} />}

      {/* ADD NEW FRIENDS DIALOG  */}
      {addFriends && (
        <AddFriendsDialog handleAddFriendsDialog={handleAddFriendsDialog} />
      )}

      {/* ADMIN PROFILE(USER ACCESS TO PROFILE) DIALOG */}
      {adminProfile && (
        <ProfileDialog
          handleAdminProfileDialog={handleAdminProfileDialog}
          handleEditDialog={handleEditDialog}
        />
      )}

      {/* CHANGE PROFILE CREDENTIALS DIALOG  */}
      {editProfile && <EditProfileDialog handleEditDialog={handleEditDialog} />}

      {/* CHAT SETTINGS DIALOG  */}
      {settings && <SettingsDialog handleSettings={handleSettings} />}
    </div>
  );
}
