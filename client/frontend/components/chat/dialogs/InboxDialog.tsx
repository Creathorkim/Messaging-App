import { useEffect, useState } from "react";
import { ArrowLeft, CheckCheck } from "lucide-react";
// import { getSocket } from "@/lib/socket/socket";
import { acceptFriendRequest, rejectRequest } from "@/lib/api/auth";
export type InboxDialogType = {
  handleInboxDialog: () => void;
};

type notificationType = {
  id: string;
  message: string;
  read: boolean;
  type: string;
  userId: string;
  profilePicture: string;
  statusId: string;
};

type notificationGroup = Record<
  "Today" | "ThisWeek" | "ThisYear" | "Older",
  notificationType[]
>;
export default function InboxDialog({ handleInboxDialog }: InboxDialogType) {
  const [data, setData] = useState<notificationGroup>();

  // useEffect(() => {
  //   const Socket = getSocket()
  //   Socket.on("notifications-data", (data) => {
  //     setData(data.grouped);
  //     console.log(data.grouped);
  //   });

  //   Socket.emit("get-notifications");
  // }, []);

  const acceptFriend = async (requestId: string) => {
    try {
      await acceptFriendRequest(requestId);
      window.location.assign("/HomeScreen");
    } catch (err) {
      console.log(err);
    }
  };

  const rejectFriend = async (requestId: string) => {
    try {
      await rejectRequest(requestId);
      window.location.assign("/HomeScreen");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5 ">
      <div className="space-y-4  flex flex-col bg-stone-900 w-full lg:w-4xl  p-3 md:p-5 rounded-lg border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto ">
        {/* Medium Screen */}
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <button
              className=" bg-white/10 p-3 rounded-full text-white cursor-pointer hover:bg-white/30"
              onClick={handleInboxDialog}
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className=" text-2xl md:text-4xl font-semibold text-white ">
              Notifications
            </h1>
          </div>
          <button className="hidden md:flex gap-2 items-center px-3 py-2 bg-[#7F56D9] text-white rounded-lg tracking-tight">
            <CheckCheck size={16} />
            Mark all as read
          </button>
          <button className="md:hidden flex gap-2 items-center px-3 py-2 bg-[#7F56D9] text-white rounded-lg tracking-tight">
            <CheckCheck size={16} />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold tracking-tight px-1 ">
            {(data?.Today?.length ?? 0) > 0 && "Today"}
          </h3>
          {data?.Today?.map((notification, index) =>
            notification.type === "FRIEND REQUEST" ? (
              <div
                key={index}
                className="flex items-center px-0 py-2 md:px-4  justify-between hover:bg-stone-800 transition-colors rounded-lg "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-full size-12 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${notification.profilePicture})`,
                    }}
                  />
                  <div>
                    <p className="text-white text-base leading-normal md:leading-relaxed">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className=" bg-[#7F56D9] font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-purple-600"
                    onClick={() => acceptFriend(notification.userId)}
                  >
                    Accept
                  </button>
                  <button
                    className=" bg-gray-400 font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-[#3f527a]"
                    onClick={() => rejectFriend(notification.statusId)}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold tracking-tight px-1 ">
            {(data?.ThisWeek?.length ?? 0) > 0 && "This Week"}
          </h3>
          {data?.ThisWeek?.map((notification, index) =>
            notification.type === "FRIEND REQUEST" ? (
              <div
                key={index}
                className="flex items-center px-0 py-2 md:px-4  justify-between hover:bg-stone-800 transition-colors rounded-lg "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-full size-12 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${notification.profilePicture})`,
                    }}
                  />
                  <div>
                    <p className="text-white text-base leading-normal md:leading-relaxed">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className=" bg-[#7F56D9] font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-purple-600"
                    onClick={() => acceptFriend(notification.userId)}
                  >
                    Accept
                  </button>
                  <button
                    className=" bg-gray-400 font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-[#3f527a]"
                    onClick={() => rejectFriend(notification.statusId)}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold tracking-tight px-1 ">
            {(data?.ThisYear?.length ?? 0) > 0 && "This Year"}
          </h3>
          {data?.ThisYear?.map((notification, index) =>
            notification.type === "FRIEND REQUEST" ? (
              <div
                key={index}
                className="flex items-center px-0 py-2 md:px-4  justify-between hover:bg-stone-800 transition-colors rounded-lg "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-full size-12 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${notification.profilePicture})`,
                    }}
                  />
                  <div>
                    <p className="text-white text-base leading-normal md:leading-relaxed">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className=" bg-[#7F56D9] font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-purple-600"
                    onClick={() => acceptFriend(notification.userId)}
                  >
                    Accept
                  </button>
                  <button
                    className=" bg-gray-400 font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-[#3f527a]"
                    onClick={() => rejectFriend(notification.statusId)}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold tracking-tight px-1 ">
            {(data?.Older?.length ?? 0) > 0 && "Older"}
          </h3>
          {data?.Older?.map((notification, index) =>
            notification.type === "FRIEND REQUEST" ? (
              <div
                key={index}
                className="flex items-center px-0 py-2 md:px-4  justify-between hover:bg-stone-800 transition-colors rounded-lg "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-full size-12 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${notification.profilePicture})`,
                    }}
                  />
                  <div>
                    <p className="text-white text-base leading-normal md:leading-relaxed">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className=" bg-[#7F56D9] font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-purple-600"
                    onClick={() => acceptFriend(notification.userId)}
                  >
                    Accept
                  </button>
                  <button
                    className=" bg-gray-400 font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-[#3f527a]"
                    onClick={() => rejectFriend(notification.statusId)}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
