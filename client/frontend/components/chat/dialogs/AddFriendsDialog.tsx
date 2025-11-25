import { ArrowLeft, Search } from "lucide-react";
type AddFriendsDialogType = {
  handleAddFriendsDialog: () => void;
};

export default function AddFriendsDialog({
  handleAddFriendsDialog,
}: AddFriendsDialogType) {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5 ">
      <div className="space-y-3  flex flex-col bg-stone-900 w-full lg:w-4xl  p-5 rounded-lg border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto ">
        <div className="flex items-center gap-3">
          <ArrowLeft
            className="text-gray-400 cursor-pointer"
            onClick={handleAddFriendsDialog}
          />
          <h3 className="text-gray-400 text-sm">Back Home</h3>
        </div>

        <h2 className="text-4xl font-bold text-white mb-5">Add Friends</h2>
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="flex flex-1  items-center gap-1 px-4 py-1 bg-stone-600 rounded-lg">
            <Search className="text-stone-800" />
            <form className="w-full">
              <input
                type="text"
                className=" text-white py-2 px-3 outline-none w-full placeholder:tracking-tighter"
                placeholder="Search by username..."
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className=" pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
            Search Result
          </h2>
          <div className="flex justify-between items-center pt-5 py-3 md:px-3 hover:bg-slate-900 rounded-lg cursor-pointer">
            <div className="flex gap-3 items-center">
              <div
                className="bg-cover bg-center rounded-full size-12"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsPIIw01_4Xy-m5x8Vd4ACzdNn3sUJVfwP3KUqsQEWGntOchD1KXwrA3JG-TvuWzWbdepeyitRudEcqAkyxyddYK7H9Uqhs9sfHxtw8bRcmQCjGpBY-XR1i9WSf8SpGRrJwqTf3SkpH6cWkg1So9F80vEmEIf6GAciz5IhBiGbQtDDxqDgdq4FFKL5bYFVcuaTx7zIc8xxXQrw6UuZA5lnxFocsoYdhXkB8Z4Jm74IMP-Yx2XehVvSajGubFVe8WLy1D6Xcuyy-w4")`,
                }}
              ></div>
              <div>
                <h1 className="font-semibold text-white ">Olivia Chen</h1>
                <p className="text-sm text-slate-500">olivia.chen</p>
              </div>
            </div>
            <button className="cursor-pointer bg-[#7F56D9] hover:bg-purple-600 rounded-lg text-white py-2 px-3 text-sm">
              Add Friend
            </button>
          </div>
          <div className="flex justify-between items-center pt-5 py-3 md:px-3 hover:bg-slate-900 rounded-lg cursor-pointer">
            <div className="flex gap-3 items-center">
              <div
                className="bg-cover bg-center rounded-full size-12"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwpzKwq_oXolxWKHmhl1Fuv2euMgNHganbjKg8GCQoxh3XUIoIA_x7Os9FOSTxYvDvZxI-Bu4SNJamOg5NbLTH6JBcy3bZOvooEe1tylAJN1kg8iXL5hhhT5BFSG8p2mPVEIJT6IZnDqSO_WnsTQe_WouMjGVbXJSXnjJ-hNKFrIIEF_I4nhKsG73hPTWulmTsDgL0zXoIOIjF3MJoPTcxdEM2HjF3IoepSkgyhnTqH8jda3e-5_bthPZev0tR4g7Ce2Twgg67Nt0")`,
                }}
              ></div>
              <div>
                <h1 className="font-semibold text-white ">Ben Carter</h1>
                <p className="text-sm text-slate-500">bencarter</p>
              </div>
            </div>
            <button
              disabled
              className="bg-gray-400 rounded-lg text-white py-2 px-3 text-sm"
            >
              Request sent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
