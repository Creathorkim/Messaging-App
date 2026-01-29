import { ArrowLeft, LogOut, Trash2, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { LogOutApi } from "@/lib/api/auth";
import { DeleteAccount } from "@/lib/api/auth";
type SettingsDialogType = {
  handleSettings: () => void;
};

export default function SettingsDialog({ handleSettings }: SettingsDialogType) {
  const [removeAccount, setRemoveAccount] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const handleLogOut = () => {
    setLogOut(!logOut);
  };

  const handleRemoveAccount = () => {
    setRemoveAccount(!removeAccount);
  };

  const logOutFunc = () => {
    LogOutApi();
  };

  const deleteAccount = async()=>{
    try{
      await DeleteAccount()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-3">
        <div className="space-y-3 w-full lg:w-4xl flex flex-col bg-stone-900  p-5   rounded-2xl border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto">
          <div className="flex items-center gap-3">
            <ArrowLeft
              className="text-gray-400 cursor-pointer"
              onClick={handleSettings}
            />
            <h1 className="text-white font-bold text-2xl">Account Settings</h1>
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
            <button
              className="bg-gray-400 px-3 py-2 text-white text-sm font-medium rounded-lg hover:bg-gray-600 cursor-pointer"
              onClick={handleLogOut}
            >
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
            <button
              className="bg-red-600 px-3 py-2 text-white text-sm font-medium rounded-lg hover:bg-red-700 cursor-pointer"
              onClick={handleRemoveAccount}
            >
              Delete account
            </button>
          </div>
        </div>
      </div>

      {logOut && (
        <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-3">
          <div className=" w-full lg:w-md flex flex-col bg-stone-900 p-5 rounded-2xl border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto">
            <div className="rounded-full flex items-center justify-center bg-red-600/10 mb-4 mx-auto h-16 w-16">
              <LogOut className="text-red-600 text-4xl" />
            </div>
            <div className="space-y-2 flex flex-col justify-center text-center items-center pb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Log Out?
              </h1>
              <p className="text-base text-gray-400">
                Are you sure you want to log out? You will be returned to the
                login screen.
              </p>
            </div>
            <div className="flex flex-row-reverse lg:flex-row items-center justify-center gap-3">
              <button
                className=" rounded-full w-full cursor-pointer px-3 py-2 bg-red-600 text-white text-base font-bold hover:bg-red-700 transition-colors"
                onClick={logOutFunc}
              >
                {" "}
                Log Out
              </button>
              <button
                className=" rounded-full w-full cursor-pointer px-3 py-2 bg-[#232f48] text-white text-base font-bold hover:bg-[#2e3a59] transition-colors"
                onClick={handleLogOut}
              >
                {" "}
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {removeAccount && (
        <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-3">
          <div className=" w-full lg:w-md flex flex-col bg-stone-900 p-5 rounded-2xl border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto">
            <div className="rounded-full flex items-center justify-center bg-red-600/10 mb-4 mx-auto h-16 w-16">
              <AlertTriangle className="text-red-600 text-4xl" />
            </div>
            <div className="space-y-2 flex flex-col justify-center text-center items-center pb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Delete Account Permanently?
              </h1>
              <p className="text-base text-gray-400">
                Deleting your account will permanently remove all messages,
                contacts, and files. This action cannot be undone.
              </p>
            </div>
            <div className="flex flex-row-reverse lg:flex-row items-center justify-center gap-3">
              <button
                className=" rounded-full w-full cursor-pointer px-3 py-2 bg-red-600 text-white text-base font-bold hover:bg-red-700 transition-colors"
                onClick={deleteAccount}
              >
                {" "}
                Delete
              </button>
              <button
                className=" rounded-full w-full cursor-pointer px-3 py-2 bg-[#232f48] text-white text-base font-bold hover:bg-[#2e3a59] transition-colors"
                onClick={handleRemoveAccount}
              >
                {" "}
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
