import { ArrowLeft, CheckCheck } from "lucide-react";
export type InboxDialogType = {
  handleInboxDialog: () => void;
};
export default function InboxDialog({ handleInboxDialog }: InboxDialogType) {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5 ">
      <div className="space-y-6  flex flex-col bg-stone-900 w-full lg:w-4xl  p-3 md:p-5 rounded-lg border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto ">
        {/* Small Screen  */}
        <div className="md:hidden ">
          <button
            className=" bg-stone-600 p-3   rounded-full w-11 flex justify-center  text-white"
            onClick={handleInboxDialog}
          >
            <ArrowLeft size={18} />
          </button>

          <div className="mt-5 flex justify-between">
            <h1 className=" text-2xl md:text-4xl font-semibold text-white ">
              Notifications
            </h1>
            <button className="flex gap-2 items-center px-3 py-2 bg-[#7F56D9] text-white rounded-lg tracking-tight">
              <CheckCheck size={18} />
            </button>
          </div>
        </div>

        {/* Medium Screen */}
        <div className="hidden md:flex justify-between items-center ">
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
          <button className="flex gap-2 items-center px-3 py-2 bg-[#7F56D9] text-white rounded-lg tracking-tight">
            <CheckCheck size={16} />
            Mark all as read
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold tracking-tight px-1 ">
            Today
          </h3>
          <div className="flex items-center px-0 py-2 md:px-4  justify-between hover:bg-stone-800 transition-colors rounded-lg ">
            <div className="flex items-center gap-4">
              <div
                className="rounded-full size-12 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAf0PxIiTmyNA0DTyZ8c2oFlH4a6p-eRPfWlLKs388HJM9JlUzudvw-1x5tkd9kosRvcPfc5ofPkXQMw308yMrSIaEAKr4TBT4OTG_q5VQ-9UqdIRCj--bLgDngnn1ZaCDD2bthRG1vJHuoPwgu76sGsxCFSYE7h2KjsZnz41Jd8D9A53C4kaMNYd0H-PObt-O-SF6wA5-djS8AwfjEDmKTZQZNz-k8y08aU5ZeGYlD8-f4KtHdNULJA5kCuOTmGINZqdH3rTgXim4")`,
                }}
              />
              <div>
                <p className="text-white text-base leading-normal md:leading-relaxed">
                  <strong>Jordan Lee</strong> sent a friend request.
                </p>
                <p className="text-[#92a4c9] text-sm ">2h ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              {/* <button className=" bg-[#7F56D9] font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-purple-600">
                    Accept
                  </button> */}
              {/* <button className=" bg-gray-400 font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-[#3f527a]">
                    Decline
                  </button> */}
            </div>
          </div>
          <div className="flex items-center px-0 py-2 md:px-4  justify-between hover:bg-stone-800 transition-colors rounded-lg ">
            <div className="flex items-center gap-4">
              <div
                className="rounded-full size-12 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXpu9l662AP86eSD_26HTwPpsn4oLgMc6lQ7EZzfF8U7Q4XEZz76VL18-2KC8mSDYEWzYNTV9YPOnuwpdi2slqksiQp3feZ1_MxvVpmM_ACroLzrXRu72CQtjnHZhv-SO_BIsSmB7w8NjG5SWTz4NBsCbCimVhtgSj9K8YD3mBAXr9AHSbS_i2XqVSN0aDjTqQomIMhkuJBieGy94Q48e-eCGR3nkJy8-8QgjyL6d9QtZ9EvP89wcxr6ckzxU4CLGVoUEYgvXh8pQ")`,
                }}
              />
              <div>
                <p className="text-white text-base leading-normal md:leading-relaxed">
                  <strong>Kim</strong> added you to{" "}
                  <strong>DevCommunity.</strong>
                </p>
                <p className="text-[#92a4c9] text-sm ">2h ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              {/* <button className=" bg-[#7F56D9] font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-purple-600">
                    Accept
                  </button> */}
              {/* <button className=" bg-gray-400 font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-[#3f527a]">
                    Decline
                  </button> */}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold tracking-tight px-1 ">
            This Week
          </h3>
          <div className="flex items-center px-0 py-2 md:px-4  justify-between hover:bg-stone-800 transition-colors rounded-lg ">
            <div className="flex items-center gap-4">
              <div
                className="rounded-full size-12 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4KdQnn8Deg4PSqzyKxzRlA1dWm9mfPq6GeVDbg9ZtZETG3EETu-m5m3_OZft7ZzIm2UHienQmnVtf1djpY-Pjg9OY0yKoseFh3pYQJpPM44xobyhCrGLE4eShM7lT1SE-bdIZ_EPkw1IwCBWE4KQgZ7SP-jFOElJKKhbUh0JS8OUfQu5T4HoXA74Vi-xowHR7IPmtuH1mr31Tei9_u7ThsAFY2fDaWTTRoG494kxf-UGuBY-LEuRkmYUqs_lSZndGCW_1oO-acF4")`,
                }}
              />
              <div>
                <p className="text-white text-base leading-normal md:leading-relaxed">
                  <strong>Taylor</strong> accepted your friend request.
                </p>
                <p className="text-[#92a4c9] text-sm ">2h ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              {/* <button className=" bg-[#7F56D9] font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-purple-600">
                    Accept
                  </button> */}
              {/* <button className=" bg-gray-400 font-medium rounded-lg px-3 py-2 cursor-pointer text-white text-sm hover:bg-[#3f527a]">
                    Decline
                  </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
