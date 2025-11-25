import { File, Download } from "lucide-react";
export default function UserProfilePanel() {
  return (
    <div className="hidden lg:flex flex-col border-l border-gray-400 w-md py-4 overflow-y-auto">
      <div className="pb-8 flex flex-col items-center  border-b border-gray-400 w-full">
        <div className="relative">
          <div
            className="bg-cover size-24 rounded-full"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlnD_SnS2y6lzt_44bffbswb3wl8ZMRf6g7I3g34DIC51Jcg_E3vaxiTW9B0SAcLUMHCcHNVrg__4w-f45RNAm2-pNdWSt0WZEE74_4Vj_mUt9jeB2DPbsMWN0bRquPIVS57uSV2ouEpKXihzuk4xYJzl40MO-RrpHAAY0DvFL9O6DOf7cckPn-I5q7q8EajRD0uFMAZ1W2HHQuY-Dkqe42pjd9kA3qLf8R2P_c9eSLyL9y9YJEIePEcaDv7GSsyH81CafEmUXyLA")`,
            }}
          ></div>
          <span className="absolute rounded-full bg-green-500 shadow shadow-green-500 w-4 h-4 bottom-1 left-18"></span>
        </div>
        <div className="space-y-1 text-center mt-4 ">
          <h1 className="font-semibold text-xl">Alex Doe</h1>
          <p className="text-sm text-gray-400">Lead Designer</p>
        </div>
      </div>

      <div className="py-4 px-3 border-b border-gray-500 ">
        <div className="space-y-1">
          <h1 className="text-sm font-semibold text-gray-400">About me</h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Passionate designer creating beautiful and intuitive user
            experiences.
          </p>
        </div>

        <div className="space-y-1 mt-3">
          <h1 className="text-sm font-semibold text-gray-400">Member since</h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            November 19, 2025
          </p>
        </div>
      </div>

      <div className="py-4 px-3 space-y-2">
        <h1 className="text-sm font-semibold text-gray-400">Shared Media</h1>
        <div className="rounded-lg bg-gray-600 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <File size={20} className="text-[#7F56D9]" />
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-200">
                project_brief.pd
              </p>
              <p className="text-xs text-gray-400">1.2MB</p>
            </div>
          </div>
          <div>
            <Download size={20} />
          </div>
        </div>
        <div className="rounded-lg bg-gray-600 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <File size={20} className="text-[#7F56D9]" />
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-200">
                project_brief.pd
              </p>
              <p className="text-xs text-gray-400">1.2MB</p>
            </div>
          </div>
          <div>
            <Download size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
