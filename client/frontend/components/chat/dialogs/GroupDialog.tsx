import { X, ImagePlus, Search } from "lucide-react";

type GroupDialogType = {
  handleGroupDialog: () => void;
};
export default function GroupDialog({ handleGroupDialog }: GroupDialogType) {
  return (
    <div className="fixed  inset-0 bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center  p-5 min-h-screen  ">
      <div className=" flex flex-col bg-stone-900 w-full lg:w-4xl  pt-3 rounded-lg border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto ">
        <div className="flex justify-between p-5 border-b border-gray-400">
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-bold text-2xl md:text-3xl tracking-tighter">
              Create a New Group
            </h1>
            <p className="text-gray-400 text-sm">
              Create a chat with multiple friends.
            </p>
          </div>
          <button
            className="px-4 hover:bg-stone-800 rounded-lg cursor-pointer"
            onClick={handleGroupDialog}
          >
            <X size={20} className="text-white" />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between p-5 border-b border-gray-400 ">
          <div>
            <h1 className="text-white font-bold text-xl tracking-tighter">
              Group Details
            </h1>
            <p className="mt-5 text-white font-extralight text-sm">
              Group Avatar(Optional)
            </p>

            <div className="flex gap-4 items-center mt-6 lg:mt-2">
              <button className="flex items-center justify-center rounded-full border-2 cursor-pointer  border-dashed border-gray-400  bg-stone-800 size-20">
                <ImagePlus size={24} className="text-white text-center" />
              </button>
              <div className="flex flex-col">
                <p className="text-white font-medium">Upload a picture</p>
                <p className="text-[#92a4c9] text-sm">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
            </div>

            <form action="" className="my-10 flex flex-col">
              <label htmlFor="GroupName" className="text-white text-sm  mb-2">
                Group Name
              </label>
              <input
                type="text"
                placeholder="Enter group name"
                className="text-white px-3 py-2 rounded-lg outline-white"
              />
            </form>
          </div>
          <div className="lg:w-md">
            <h1 className="text-white font-bold text-xl tracking-tighter text-start">
              Add Members
            </h1>
            <div className="flex  rounded-lg items-center mt-3 py-1 px-3  border border-white">
              <Search size={24} className="text-white" />

              <form action="">
                <input
                  type="text"
                  className="px-2 py-1  text-white rounded-lg outline-none "
                  placeholder="Search by name..."
                />
              </form>
            </div>
            <div className="mt-5 space-y-2  h-auto overflow-y-auto">
              <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-white/10">
                <div
                  className="bg-cover size-10 rounded-full"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlnD_SnS2y6lzt_44bffbswb3wl8ZMRf6g7I3g34DIC51Jcg_E3vaxiTW9B0SAcLUMHCcHNVrg__4w-f45RNAm2-pNdWSt0WZEE74_4Vj_mUt9jeB2DPbsMWN0bRquPIVS57uSV2ouEpKXihzuk4xYJzl40MO-RrpHAAY0DvFL9O6DOf7cckPn-I5q7q8EajRD0uFMAZ1W2HHQuY-Dkqe42pjd9kA3qLf8R2P_c9eSLyL9y9YJEIePEcaDv7GSsyH81CafEmUXyLA")`,
                  }}
                ></div>
                <p className="text-white text-base font-medium flex-1">
                  Noah King
                </p>
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-lg bg-[#192233] border-[#324467] focus:ring-1  focus:ring-primary/50"
                />
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-white/10">
                <div
                  className="bg-cover size-10 rounded-full"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlnD_SnS2y6lzt_44bffbswb3wl8ZMRf6g7I3g34DIC51Jcg_E3vaxiTW9B0SAcLUMHCcHNVrg__4w-f45RNAm2-pNdWSt0WZEE74_4Vj_mUt9jeB2DPbsMWN0bRquPIVS57uSV2ouEpKXihzuk4xYJzl40MO-RrpHAAY0DvFL9O6DOf7cckPn-I5q7q8EajRD0uFMAZ1W2HHQuY-Dkqe42pjd9kA3qLf8R2P_c9eSLyL9y9YJEIePEcaDv7GSsyH81CafEmUXyLA")`,
                  }}
                ></div>
                <p className="text-white text-base font-medium flex-1">
                  Noah King
                </p>
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-lg bg-[#192233] border-[#324467] focus:ring-1  focus:ring-primary/50"
                />
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-white/10">
                <div
                  className="bg-cover size-10 rounded-full"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlnD_SnS2y6lzt_44bffbswb3wl8ZMRf6g7I3g34DIC51Jcg_E3vaxiTW9B0SAcLUMHCcHNVrg__4w-f45RNAm2-pNdWSt0WZEE74_4Vj_mUt9jeB2DPbsMWN0bRquPIVS57uSV2ouEpKXihzuk4xYJzl40MO-RrpHAAY0DvFL9O6DOf7cckPn-I5q7q8EajRD0uFMAZ1W2HHQuY-Dkqe42pjd9kA3qLf8R2P_c9eSLyL9y9YJEIePEcaDv7GSsyH81CafEmUXyLA")`,
                  }}
                ></div>
                <p className="text-white text-base font-medium flex-1">
                  Noah King
                </p>
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-lg bg-[#192233] border-[#324467] focus:ring-1  focus:ring-primary/50"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-end gap-3">
          <button
            className="bg-transparent px-3 py-2 text-white font-semibold hover:bg-white/10 rounded-lg tracking-tighter"
            onClick={handleGroupDialog}
          >
            Cancel
          </button>
          <button className="bg-[#7F56D9] px-3 py-2 text-white font-semibold hover:bg-purple-700 rounded-lg tracking-tighter">
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
}
