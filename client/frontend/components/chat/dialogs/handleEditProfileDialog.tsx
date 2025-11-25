import { X } from "lucide-react";

type ProfileDialogType = {
  handleEditDialog: () => void;
};
export default function EditProfileDialog({
  handleEditDialog,
}: ProfileDialogType) {
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
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAeTuYA3pdaWa0TNjuVGmfxIYd_7EepvgnuxVKi6akUKB0XU8rwO155xTKwYyQkERvqIxJ13vjbfeW_SuVq65RcZWRXIs6HzmxUgttiK4PySSQLegcvXxkBiQWViXUN7pedrUxlBUzq63QoY-SGRCsiokzS81QAqSStP8CR1DTWi0NErYuOwywSZN73XjIWgikoRyPZNFWRSUISbz3b3Ar6O2mLq6iJtJqIGcdHgujdyjvt6WnjGIZjGkpeZD2S7UJlsqL9XbXQ14")`,
            }}
          ></div>
          <p className="font-bold text-white hover:text-[#7F56D9] hover:underline cursor-pointer pt-4">
            Edit or change Avatar
          </p>
        </div>
        <form>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="DisplayName"
              className="text-sm text-white font-bold mb-2"
            >
              Display Name
            </label>
            <input
              type="text"
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
            <textarea className="rounded-lg py-3 px-3 bg-stone-800 text-white outline-none focus:ring-2 focus:ring-purple-600" />
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
