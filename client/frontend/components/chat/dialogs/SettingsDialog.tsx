import { ArrowLeft, Lock, LogOut, Trash2 } from "lucide-react";

type SettingsDialogType = {
  handleSettings: () => void;
  handleChangePasswordDialog: () => void;
};

export default function SettingsDialog({
  handleSettings,
  handleChangePasswordDialog,
}: SettingsDialogType) {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5">
      <div className="space-y-3 w-full lg:w-4xl flex flex-col bg-stone-900  p-5   rounded-2xl border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto">
        <div className="flex items-center gap-3">
          <ArrowLeft
            className="text-gray-400 cursor-pointer"
            onClick={handleSettings}
          />
          <h3 className="text-gray-400 text-sm">Back Home</h3>
        </div>

        <div>
          <h1 className="text-white font-bold text-3xl">Account Settings</h1>
        </div>
        <div className="flex items-center justify-between rounded-lg mt-5 py-3 px-2 md:bg-stone-800 md:border md:border-gray-400">
          <div className="flex items-center gap-2 ">
            <div className="rounded-lg size-10 flex items-center justify-center bg-purple-500">
              <Lock size={15} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Change Password</h3>
            </div>
          </div>
          <button
            className="bg-[#7F56D9] px-3 py-2 text-white text-sm font-medium rounded-lg hover:bg-purple-500 cursor-pointer"
            onClick={handleChangePasswordDialog}
          >
            Change password{" "}
          </button>
        </div>
        <div className="flex items-center justify-between rounded-lg mt-5 py-3 px-2 md:bg-stone-800 md:border md:border-gray-400">
          <div className="flex items-center gap-2 ">
            <div className="rounded-lg size-10 flex items-center justify-center bg-gray-500">
              <LogOut size={15} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Logout</h3>
            </div>
          </div>
          <button className="bg-gray-400 px-3 py-2 text-white text-sm font-medium rounded-lg hover:bg-gray-600 cursor-pointer">
            Logout{" "}
          </button>
        </div>
        <div className="flex items-center justify-between rounded-lg mt-5 py-3 px-2 md:bg-red-500/20 md:border md:border-red-500/40">
          <div className="flex items-center gap-2 ">
            <div className="rounded-lg size-10 flex items-center justify-center bg-red-500">
              <Trash2 size={15} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Delete Account</h3>
            </div>
          </div>
          <button className="bg-red-600 px-3 py-2 text-white text-sm font-medium rounded-lg hover:bg-red-700 cursor-pointer">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
