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
export default function ClientHomePage() {
  const [isGroup, setIsGroup] = useState(false);
  const [isInbox, setIsInbox] = useState(false);
  const [addFriends, setAddFriends] = useState(false);
  const [settings, setSettings] = useState(false);
  const [adminProfile, setAdminProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [chatArea, setChatArea] = useState(false);
  const [userProfilePanel, setUserProfilePanel] = useState(false);
  const [selectedFriend, setSelectedFriend] =
    useState<selectedFriendProp | null>(null);

  const [chatId, setChatId] = useState("");
  const [friendId, setFriendId] = useState("");

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
    friend: selectedFriendProp,
    id: string,
    fId: string,
  ) => {
    setChatArea(!chatArea);
    setSelectedFriend(friend);
    setChatId(id);
    setFriendId(fId);
  };

  const handleUserProfilePanel = () => {
    setUserProfilePanel(!userProfilePanel);
  };

  return (
    <div>
      <section className="bg-[#060010] h-screen overflow-hidden flex flex-row  w-full text-white pt-1 px-1 md:py-0 md:px-0">
        {/* CHATSIDEBAR  */}

        <ChatSideBar
          handleAdminProfileDialog={handleAdminProfileDialog}
          handleSettings={handleSettings}
          handleInboxDialog={handleInboxDialog}
          handleGroupDialog={handleGroupDialog}
          handleAddFriendsDialog={handleAddFriendsDialog}
          handleChatArea={handleChatArea}
        />

        {/* CHAT AREA */}
        {chatArea && selectedFriend && (
          <ChatArea
            handleUserProfilePanel={handleUserProfilePanel}
            friend={selectedFriend}
            chatId={chatId}
            friendId={friendId}
          />
        )}

        {/* USER PROFILE PANEL  */}
        {userProfilePanel && selectedFriend && (
          <UserProfilePanel friend={selectedFriend} />
        )}
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
