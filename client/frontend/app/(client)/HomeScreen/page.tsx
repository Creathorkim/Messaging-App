"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatArea from "@/components/chat/ChatArea";
import UserProfilePanel from "@/components/chat/UserProfilePanel";
import GroupDialog from "@/components/chat/dialogs/GroupDialog";
import InboxDialog from "@/components/chat/dialogs/InboxDialog";
import AddFriendsDialog from "@/components/chat/dialogs/AddFriendsDialog";
import ProfileDialog from "@/components/chat/dialogs/ProfileDialog";
import EditProfileDialog from "@/components/chat/dialogs/handleEditProfileDialog";
import SettingsDialog from "@/components/chat/dialogs/SettingsDialog";
import ChangePasswordDialog from "@/components/chat/dialogs/ChangePasswordDialog";

export default function ClientHomePage() {
  const paramsData = useSearchParams();
  const [isGroup, setIsGroup] = useState(false);
  const [isInbox, setIsInbox] = useState(false);
  const [addFriends, setAddFriends] = useState(false);
  const [settings, setSettings] = useState(false);
  const [adminProfile, setAdminProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const token = paramsData.get("token");
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

  const handleChangePasswordDialog = () => {
    setChangePassword(!changePassword);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, "", "/HomeScreen");
    }
  }, [token]);

  return (
    <div>
      <section className="bg-[#060010] h-screen overflow-hidden flex flex-row  w-full text-white pt-3 px-2 md:py-0 md:px-0">
        {/* CHATSIDEBAR  */}

        <ChatSideBar
          handleAdminProfileDialog={handleAdminProfileDialog}
          handleSettings={handleSettings}
          handleInboxDialog={handleInboxDialog}
          handleGroupDialog={handleGroupDialog}
          handleAddFriendsDialog={handleAddFriendsDialog}
        />

        {/* CHAT AREA */}
        <ChatArea />

        {/* USER PROFILE PANEL  */}
        <UserProfilePanel />
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
      {settings && (
        <SettingsDialog
          handleSettings={handleSettings}
          handleChangePasswordDialog={handleChangePasswordDialog}
        />
      )}

      {/* CHANGE PASSWORD SETTING DIALOG  */}
      {changePassword && (
        <ChangePasswordDialog
          handleChangePasswordDialog={handleChangePasswordDialog}
          handleEditDialog={handleEditDialog}
        />
      )}
    </div>
  );
}
