import { UserPen, X } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/lib/context/UserProvider";
import { User } from "@/lib/context/UserProvider";
type profileDialogType = {
  handleAdminProfileDialog: () => void;
  handleEditDialog: () => void;
};
export default function ProfileDialog({
  handleAdminProfileDialog,
  handleEditDialog,
}: profileDialogType) {
  const [user, setUser] = useState<User | null>(null);
  const { data } = useContext(UserContext)!;

  useEffect(() => {
    const setUserFunc = () => {
      return setUser(data?.user ?? null);
    };
    setUserFunc();
  }, [data]);
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5 ">
      <div className="space-y-3 w-full md:w-md flex flex-col bg-stone-900     p-5 rounded-2xl border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto ">
        <button
          className="p-2 text-white hover:bg-white/30 rounded-full w-11 flex justify-center items-center "
          onClick={handleAdminProfileDialog}
        >
          <X size={24} />
        </button>
        <div className="flex justify-center items-center">
          <div className="relative">
            <div
              className="rounded-full size-30 bg-cover bg-center"
              style={{
                backgroundImage: `url(${user?.profileImage})`,
              }}
            ></div>

            <span className="absolute rounded-full bg-green-500 w-5 h-5 bottom-2 left-23 shadow shadow-green-500"></span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white leading-tight">
            {user?.username}
          </h2>
          <p className="text-sm text-start text-gray-400">@{user?.username}</p>
          <p className="text-white leading-relaxed pt-4">{user?.bio}</p>
        </div>
        <button
          className="flex items-center justify-center rounded-lg bg-[#7F56D9] px-3 py-2 text-white gap-2 hover:bg-purple-500 cursor-pointer"
          onClick={handleEditDialog}
        >
          <UserPen size={25} />
          <p>Edit Profile</p>
        </button>
      </div>
    </div>
  );
}
