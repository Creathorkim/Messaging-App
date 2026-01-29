"use client";

import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/lib/context/UserProvider";
import { UserType } from "@/lib/context/UserProvider";
import { updateProfile } from "@/lib/api/auth";
import { X, Loader2 } from "lucide-react";


type ProfileDialogType = {
  handleEditDialog: () => void;
};

export default function EditProfileDialog({
  handleEditDialog,
}: ProfileDialogType) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);

  type userInputType = {
    DisplayName: string;
    Bio: string;
  };

  const [userInput, setUserInput] = useState<userInputType>({
    DisplayName: "",
    Bio: "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const { data } = useContext(UserContext)!;
  useEffect(() => {
    const fetchUser = () => {
      if (data) {
        setUser(data);
        setUserInput({
          DisplayName: data.username ?? "",
          Bio: data.bio ?? "",
        });
      }
    };
    fetchUser();
  }, [data]);

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setAvatarFile(file);
  };

  const saveProfileChanges = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("DisplayName", userInput.DisplayName);
    formData.append("Bio", userInput.Bio);
    if (avatarFile) {
      formData.append("profilePicture", avatarFile);
    }
    try {
      await updateProfile(formData);
      setLoading(false);
      window.location.assign("/HomeScreen")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5">
      <div className="space-y-3 w-full md:w-md flex flex-col bg-stone-900  p-5   rounded-2xl border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto">
        <div className="flex justify-between items-center  pb-3 ">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <button
            className="hover:bg-slate-300 py-2 px-3 rounded-lg text-white hover:text-black"
            onClick={handleEditDialog}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex  flex-col items-center justify-center border-b border-gray-400 pb-8">
          <div
            className="rounded-full bg-center bg-cover size-24"
            style={{
              backgroundImage: `url(${user?.profileImage})`,
            }}
          ></div>

          <input
            type="file"
            accept="image/*"
            id="avatarInput"
            className="hidden"
            onChange={handleFileInput}
          />
          <p
            className="font-bold text-white hover:text-[#7F56D9] hover:underline cursor-pointer pt-4"
            onClick={() => document.getElementById("avatarInput")?.click()}
          >
            Edit or change Avatar
          </p>
        </div>
        <form onSubmit={saveProfileChanges}>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="DisplayName"
              className="text-sm text-white font-bold mb-2"
            >
              Display Name
            </label>
            <input
              name="DisplayName"
              type="text"
              value={userInput.DisplayName}
              onChange={handleUserInput}
              className="rounded-lg py-3 px-3 bg-stone-800 text-white outline-none focus:ring-2 focus:ring-purple-600 "
            />
          </div>
          <div className="mb-5 flex flex-col space-y-2">
            <label
              htmlFor="DisplayName"
              className="text-sm text-white font-bold"
            >
              About Me
            </label>
            <textarea
              name="Bio"
              value={userInput.Bio}
              onChange={handleUserInput}
              className="rounded-lg py-3 px-3 bg-stone-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              className="py-2 px-3 text-gray-400 text-sm tracking-tight hover:bg-white/10 rounded-full"
              onClick={handleEditDialog}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 text-gray-400 text-sm rounded-full tracking-tight hover:bg-[#7F56D9] bg-purple-900"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  <p>Save Changes</p>
                </div>
              ) : (
                <>Save Changes</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
