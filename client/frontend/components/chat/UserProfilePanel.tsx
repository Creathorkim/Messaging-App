import { selectedFriendProp } from "@/app/(client)/HomeScreen/page";
import type { MobileView } from "@/app/(client)/HomeScreen/page";
import { SetStateAction } from "react";
import {X} from "lucide-react";
type friendProps = {
  friend: selectedFriendProp;
  setMobileView: React.Dispatch<SetStateAction<MobileView>>;
};

export default function UserProfilePanel({ friend, setMobileView }: friendProps) {
  return (
    <div className="flex flex-col border-l border-gray-400 w-full  py-4 overflow-y-auto">
      <div className="pb-8 flex flex-col  border-b border-gray-400 w-full">
        <div className="flex flex-col">
          <div className="pl-3" onClick={()=>{
            setMobileView("chat")
          }}>
            <X/>
          </div>
          <div className="relative flex items-center justify-center mt-3">
            <div
              className="bg-cover w-24 h-24 rounded-full"
              style={{
                backgroundImage: `url(${friend.profileImage})`,
              }}
            ></div>
            {friend.isOnline ? (
              <span className="absolute rounded-full bg-green-500 shadow shadow-green-500 w-4 h-4  bottom-12 right-59 md:bottom-2 md:left-39"></span>
            ) : (
              <span className="absolute rounded-full bg-gray-500 shadow shadow-gray-500 w-4 h-4 bottom-1 left-18"></span>
            )}{" "}
          </div>
        </div>
        <div className="space-y-1 text-center mt-4 ">
          <h1 className="font-semibold text-xl">{friend.username}</h1>
          {/* <p className="text-sm text-gray-400">{friend.bio}</p> */}
        </div>
      </div>

      <div className="py-4 px-3">
        <div className="space-y-1">
          <h1 className="text-sm font-semibold text-gray-400">About me</h1>
          <p className="text-sm text-gray-300 leading-relaxed">{friend.bio}</p>
        </div>

        <div className="space-y-1 mt-3">
          <h1 className="text-sm font-semibold text-gray-400">Member since</h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            {new Date(friend.createdAt!).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
