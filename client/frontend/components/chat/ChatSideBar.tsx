import {
  Settings,
  Search,
  Bell,
  UsersRound,
  MessageSquarePlus,
} from "lucide-react";

type ChatSidebarType = {
  handleAdminProfileDialog: () => void;
  handleSettings: () => void;
  handleInboxDialog: () => void
  handleGroupDialog: () => void
  handleAddFriendsDialog: () => void
};
export default function ChatSideBar({
  handleAdminProfileDialog,
  handleSettings,
  handleInboxDialog,
  handleGroupDialog,
  handleAddFriendsDialog
}: ChatSidebarType) {
  return (
    <div className="flex flex-col bg-black w-full lg:w-80 space-y-4  p-2 pt-4  shrink-0 lg:border-r border-gray-600 overflow-y-auto">
      {/* FIRST HEADER  */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div
              className="rounded-full size-12 bg-cover"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAeTuYA3pdaWa0TNjuVGmfxIYd_7EepvgnuxVKi6akUKB0XU8rwO155xTKwYyQkERvqIxJ13vjbfeW_SuVq65RcZWRXIs6HzmxUgttiK4PySSQLegcvXxkBiQWViXUN7pedrUxlBUzq63QoY-SGRCsiokzS81QAqSStP8CR1DTWi0NErYuOwywSZN73XjIWgikoRyPZNFWRSUISbz3b3Ar6O2mLq6iJtJqIGcdHgujdyjvt6WnjGIZjGkpeZD2S7UJlsqL9XbXQ14")`,
              }}
            ></div>

            <span className="absolute bg-green-500 w-3 h-3 rounded-full bottom-1 left-9 shadow shadow-green-500"></span>
          </div>
          <div className="flex flex-col">
            <button
              className="text-white font-medium text-base hover:underline cursor-pointer"
              onClick={handleAdminProfileDialog}
            >
              Jordan Smith
            </button>
            <p className="text-gray-500 text-sm font-medium">Online</p>
          </div>
        </div>
        <button className="cursor-pointer" onClick={handleSettings}>
          <Settings size={30} />
        </button>
      </div>

      {/* SECOND HEADER  */}
      <div className="flex flex-row items-center gap-3 md:gap-2 mt-2  ">
        <div className="flex bg-stone-900 rounded-lg items-center p-2 flex-1 md:w-6">
          <Search size={24} className="text-white" />

          <form action="">
            <input
              type="text"
              className="px-2 py-1  text-white rounded-lg outline-none"
              placeholder="Search friends"
            />
          </form>
        </div>
        <div className="relative">
          <button
            className="bg-[#7F56D9] p-3 rounded-lg cursor-pointer"
            onClick={handleInboxDialog}
          >
            <Bell size={23} />
          </button>
          <div className="absolute left-10 bottom-10 rounded-full w-3 h-3 bg-blue-600 shadow shadow-blue-600"></div>
        </div>
        <button
          className="bg-[#7F56D9] p-3 rounded-lg cursor-pointer outline-none"
          onClick={handleGroupDialog}
        >
          <UsersRound size={20} />
        </button>
      </div>

      {/* THIRD HEADER  */}
      <div className="mt-1 space-y-2 w-full">
        <h1 className="text-gray-500 font-medium">Online Users</h1>
        <div className="flex items-center gap-2">
          <div className="relative cursor-pointer">
            <div
              className="rounded-full bg-cover size-10"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzWRVrJEvRLVvKrluLzVbe6wWz5CHyn4LkDAYNgMdXRqe57lqKYPF-ARwRudMyqvzY87ga_Fnau6nJKt4atN6B95wmsgSHj5l2pGKbagTXOp96YvTcn4IHlliaQLiLLnPcTPTb3mSOjxTwHD9ayXLAoIuwuuHlN0AXXk2Ug5xKgUGAAPUszW7W_TszI2A40h31OYR8lY08mjtvnONfYjTP1tMoBpee4Gat0VorRsmvbCpKMCZAV_GhVh1XVcNTfaliZkeDyvLGx14")`,
              }}
            ></div>
            <span className="absolute rounded-full bg-green-500  w-2 h-2 bottom-1 left-8 shadow shadow-green-500"></span>
          </div>

          <div className="relative cursor-pointer">
            <div
              className="rounded-full bg-cover size-10"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCscM4LmmhK3a6KB_fU_Avm-4eC3htIWtkHhmeDxdmADeAolTM0IHXT6k7mqN-44vXOoU_Q2pJ0katQHTfTUi-20P0b4E7ELPRm9sOEWTn1iOk2mj9rEyMhrVsHhwNYDkuZb0HkttTQQgYOU2oOyqqD8jHuf6Zh2x3pXvNYsY0GAytkNW76P4GheIwSEnITLBfzzUD7uXQW-Ow1Xmw5inhLd69j5Y7jrlRvrIovpgqYtfsrEP0oEMHGTz6g49-DTQ8hqLs5Wq5jrkk")`,
              }}
            ></div>

            <span className="absolute rounded-full bg-green-500 shadow shadow-green-500 w-2 h-2 bottom-1 left-8"></span>
          </div>

          <div className="relative cursor-pointer">
            <div
              className="rounded-full bg-cover size-10"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnMwcP06Oq7bIjjQlSXiGHJ0FX7-UU8PsWjjkxqMhpsu0QMdKq2oBxhUpjx2zxfj7By6ovvPljjbeTC_bQaI1vkK4Gs8106nQVCf4BbbuSDMTrmcg7z2LoZcMqUDTm5Y8-zV7Bkmli3pIrQDsjEvm4wVFKY0NwdagPAjmouVaCvp5g7_oWr02esijtp-376-gdwAiNvLPWhh0NhikFyexZZw1j171lLr5ym0KcE3ZB51X8eP9dHDKlbdoG_n8bAvht7vZXl2743eU")`,
              }}
            ></div>
            <span className="absolute rounded-full bg-green-500 shadow shadow-green-500 w-2 h-2 bottom-1 left-8"></span>
          </div>
          <button className="rounded-full bg-stone-900 flex items-center justify-center size-10 cursor-pointer">
            +2
          </button>
        </div>
      </div>

      {/* FOURTH SECTION  */}
      <div className="flex flex-col space-y-2 mt-2 h-full">
        <h1 className="text-gray-500 font-medium">Conversations</h1>
        <div className="flex flex-row items-center p-2 gap-2 cursor-pointer bg-stone-900 rounded-lg">
          <div className="relative">
            <div
              className="rounded-full bg-cover size-12"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzWRVrJEvRLVvKrluLzVbe6wWz5CHyn4LkDAYNgMdXRqe57lqKYPF-ARwRudMyqvzY87ga_Fnau6nJKt4atN6B95wmsgSHj5l2pGKbagTXOp96YvTcn4IHlliaQLiLLnPcTPTb3mSOjxTwHD9ayXLAoIuwuuHlN0AXXk2Ug5xKgUGAAPUszW7W_TszI2A40h31OYR8lY08mjtvnONfYjTP1tMoBpee4Gat0VorRsmvbCpKMCZAV_GhVh1XVcNTfaliZkeDyvLGx14")`,
              }}
            ></div>
            <span className="absolute bg-green-500 rounded-full w-3 h-3 bottom-1 left-9 shadow shadow-green-500"></span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-sm font-semibold">Alex Doe</h1>
            <p className="text-xs text-gray-400">Typing...</p>
          </div>
        </div>

        <div className="flex flex-row items-center p-2 gap-2 cursor-pointer rounded-lg hover:bg-stone-900 ">
          <div className="relative">
            <div
              className="rounded-full bg-cover size-12"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCscM4LmmhK3a6KB_fU_Avm-4eC3htIWtkHhmeDxdmADeAolTM0IHXT6k7mqN-44vXOoU_Q2pJ0katQHTfTUi-20P0b4E7ELPRm9sOEWTn1iOk2mj9rEyMhrVsHhwNYDkuZb0HkttTQQgYOU2oOyqqD8jHuf6Zh2x3pXvNYsY0GAytkNW76P4GheIwSEnITLBfzzUD7uXQW-Ow1Xmw5inhLd69j5Y7jrlRvrIovpgqYtfsrEP0oEMHGTz6g49-DTQ8hqLs5Wq5jrkk")`,
              }}
            ></div>
            <span className="absolute bg-green-500 rounded-full w-3 h-3 bottom-1 left-9 shadow shadow-green-500"></span>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <h1 className="text-white text-sm font-semibold">Samantha Bee</h1>
              <p className="text-xs text-gray-400">See you tomorrow then.</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center justify-center bg-[#7F56D9] text-white size-5 rounded-full p-3 text-sm font-medium">
                2
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center p-2 gap-2 cursor-pointer rounded-lg hover:bg-stone-900 ">
          <div className="relative">
            <div
              className="rounded-full bg-cover size-12"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEJlhZ54eop6qzB0CSyVZr3yWBHUhHIz4Vi4_OeWZoHl2c1lYzfJNFP_-XN1mw03E0dc76IhQ9JN_RIj8yDawWruOYW40LlnCz_BOu2y1yAdcI2kTczOPdGkJn9J1gsCxWKgkY40ZVzBTrfToBptFrH7IR4nwFZG_A6X2wpo3tBVrcveEXWg7vdg-VVWAQv_ZFFCvdMQn2ePZDBcCFSZWYT3glo1PI35mulsSdGVWCFuQUUJobZbGxHH2pW5UplI2IUkrzR9gWgog")`,
              }}
            ></div>
            <span className="absolute bg-gray-400 rounded-full w-3 h-3 bottom-1 left-9"></span>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <h1 className="text-white text-sm font-semibold">Chris Rogers</h1>
              <p className="text-xs text-gray-400">
                Okay, I&apos;ve sent the file.
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center justify-center bg-[#7F56D9] text-white size-5 rounded-full p-3 text-sm font-medium">
                1
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center p-2 gap-2 cursor-pointer rounded-lg hover:bg-stone-900 ">
          <div className="relative">
            <div
              className="rounded-full bg-cover size-12"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwW4A_vFI5PYkDz0UM-SRskKsMcmdku7gfHKZ-wB7WQQIYm8KzIvG-pRl0DNXPjZmlGrlE6piND1orq_8ylflCOSnwIWcsceLHDXE1tft9TOoV_sgYjMflsNWr4jsqGZToLaP098BYQKuqE-dRBNq1xuuFbTtJIdPgOclow9N_ACglhgFEDa0DX0bVVA4EcOIwalulCswBZcmaUVKXGaxTjg2CFU8-uyu5IlLyp5R92b9X4jGWLxDH_6B10yhr6xVQRjlzsfHOFs4")`,
              }}
            ></div>
            <span className="absolute bg-gray-400 rounded-full w-3 h-3 bottom-1 left-9"></span>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <h1 className="text-white text-sm font-semibold">Megan Carter</h1>
              <p className="text-xs text-gray-400">Can we reschedule?</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center justify-center bg-[#7F56D9] text-white size-5 rounded-full p-3 text-sm font-medium">
                5
              </div>
            </div>
          </div>
        </div>

        {/* ADD FRIEND BUTTON  */}
        <div className="sticky h-full bottom-40 md:bottom-4 flex items-end justify-end p-2">
          <button
            className="bg-[#7F56D9] p-2 rounded-lg text-white cursor-pointer w-12 flex items-center justify-center"
            onClick={handleAddFriendsDialog}
          >
            <MessageSquarePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
