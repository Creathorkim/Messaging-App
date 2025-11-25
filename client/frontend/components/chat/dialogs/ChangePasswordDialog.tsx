import { ArrowLeft } from "lucide-react";

type ChangePasswordDialogType = {
  handleChangePasswordDialog: () => void;
  handleEditDialog: () => void;
};
export default function ChangePasswordDialog({
  handleChangePasswordDialog,
  handleEditDialog,
}: ChangePasswordDialogType) {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5">
      <div className="space-y-4 w-full lg:w-4xl flex flex-col bg-stone-900  p-5   rounded-2xl border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto">
        <div className="flex items-center gap-3">
          <ArrowLeft
            className="text-gray-400 cursor-pointer"
            onClick={handleChangePasswordDialog}
          />
          <h3 className="text-gray-400 text-sm">Back to Account Settings</h3>
        </div>

        <h2 className="text-white text-3xl font-bold mb-5">Change Password</h2>

        <form>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="Current Password"
              className="text-sm text-gray-400 font-bold mb-2"
            >
              Current Password
            </label>
            <input
              type="text"
              className="rounded-lg py-3 px-3 bg-stone-800 text-white outline-none focus:ring-2 focus:ring-purple-600 "
            />
          </div>
          <div className="mb-5 flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm text-gray-400 font-bold"
            >
              Password
            </label>
            <input className="rounded-lg py-3 px-3 bg-stone-800 text-white outline-none focus:ring-2 focus:ring-purple-600" />
          </div>

          <div className="mb-5 flex flex-col space-y-2">
            <label
              htmlFor="Confirm New Password"
              className="text-sm text-gray-400 font-bold"
            >
              Confirm New Password
            </label>
            <input className="rounded-lg py-3 px-3 bg-stone-800 text-white outline-none focus:ring-2 focus:ring-purple-600" />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              className="py-2 px-3 text-gray-400 text-sm tracking-tight hover:bg-white/10 rounded-full"
              onClick={handleEditDialog}
            >
              Cancel
            </button>
            <button className="py-2 px-3 text-gray-400 text-sm rounded-full tracking-tight hover:bg-[#7F56D9] bg-purple-900">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
