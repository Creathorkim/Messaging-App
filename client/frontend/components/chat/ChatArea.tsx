import {Check, CheckCheck, FileUp, Smile, Mic} from "lucide-react"
export default function ChatArea() {
  return (
    <div className="relative hidden lg:flex flex-col  bg-black w-full overflow-y-auto  ">
      <div className="w-full border-b border-gray-400 p-2  ">
        <div className="flex items-center gap-3 bg-stone-900 rounded-lg p-2">
          <div className="relative">
            <div
              className="rounded-full size-12 bg-cover"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlnD_SnS2y6lzt_44bffbswb3wl8ZMRf6g7I3g34DIC51Jcg_E3vaxiTW9B0SAcLUMHCcHNVrg__4w-f45RNAm2-pNdWSt0WZEE74_4Vj_mUt9jeB2DPbsMWN0bRquPIVS57uSV2ouEpKXihzuk4xYJzl40MO-RrpHAAY0DvFL9O6DOf7cckPn-I5q7q8EajRD0uFMAZ1W2HHQuY-Dkqe42pjd9kA3qLf8R2P_c9eSLyL9y9YJEIePEcaDv7GSsyH81CafEmUXyLA")`,
              }}
            ></div>
            <span className="absolute bg-green-500 rounded-full w-3 h-3 shadow shadow-green-500 bottom-1 left-9"></span>
          </div>
          <div>
            <h1 className="text-white text-sm font-semibold hover:underline cursor-pointer">
              Alex Doe
            </h1>
            <p className="text-green-500 text-xs">Online</p>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4 mb-40 px-2 min-h-screen">
        <div className="flex justify-start gap-3">
          <div
            className="rounded-full bg-cover size-10"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlnD_SnS2y6lzt_44bffbswb3wl8ZMRf6g7I3g34DIC51Jcg_E3vaxiTW9B0SAcLUMHCcHNVrg__4w-f45RNAm2-pNdWSt0WZEE74_4Vj_mUt9jeB2DPbsMWN0bRquPIVS57uSV2ouEpKXihzuk4xYJzl40MO-RrpHAAY0DvFL9O6DOf7cckPn-I5q7q8EajRD0uFMAZ1W2HHQuY-Dkqe42pjd9kA3qLf8R2P_c9eSLyL9y9YJEIePEcaDv7GSsyH81CafEmUXyLA")`,
            }}
          ></div>
          <div className="bg-stone-900 p-3 w-md leading-relaxed  rounded-lg ">
            <p>Hey! How&apos;s it going? I saw you were online.</p>
            <p className="mt-2 text-end text-xs text-gray-500">10:40 AM</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-linear-to-r from-[#7F56D9]  to-[#14053b] p-3 max-w-md leading-relaxed  rounded-lg ">
            <p>
              I&apos;m doing great, Alex! Just working on that new project. How
              about you?
            </p>
            <div className="flex items-center justify-end gap-2 mt-2 ">
              <p className=" text-end text-xs text-gray-500">10:41 AM</p>
              <Check size={10} />
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-3">
          <div
            className="rounded-full bg-cover size-10"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlnD_SnS2y6lzt_44bffbswb3wl8ZMRf6g7I3g34DIC51Jcg_E3vaxiTW9B0SAcLUMHCcHNVrg__4w-f45RNAm2-pNdWSt0WZEE74_4Vj_mUt9jeB2DPbsMWN0bRquPIVS57uSV2ouEpKXihzuk4xYJzl40MO-RrpHAAY0DvFL9O6DOf7cckPn-I5q7q8EajRD0uFMAZ1W2HHQuY-Dkqe42pjd9kA3qLf8R2P_c9eSLyL9y9YJEIePEcaDv7GSsyH81CafEmUXyLA")`,
            }}
          ></div>
          <div className="bg-stone-900 p-3 max-w-md leading-relaxed  rounded-lg ">
            <p>
              Same here! It&apos;s been pretty busy. Are you free for a call
              later this afternoon to sync up?
            </p>
            <p className="mt-2 text-end text-xs text-gray-500">10:42 AM</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-linear-to-r from-[#7F56D9]  to-[#14053b] p-3 max-w-md leading-relaxed  rounded-lg ">
            <p>Sounds good!</p>
            <div className="flex items-center justify-end gap-2 mt-2 ">
              <p className=" text-end text-xs text-gray-500">10:41 AM</p>
              <CheckCheck size={15} />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-2 w-full  px-1  rounded-2xl  ">
        <form className="bg-stone-900 rounded-lg flex items-center gap-6 p-2">
          <div className="flex gap-3 items-center flex-1">
            <div className="hover:bg-gray-600 hover:rounded-lg  p-2 cursor-pointer">
              <FileUp size={24} />
            </div>

            <textarea
              name=""
              id=""
              className="w-full outline-none border-0  pt-5 overflow-hidden resize-none"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <div className="flex gap-1">
            <div className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
              <Smile size={24} className="hover:animate-pulse" />
            </div>
            <div className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer">
              <Mic size={24} className="hover:animate-pulse" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
