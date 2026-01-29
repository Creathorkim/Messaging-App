"use client";

import { ArrowLeft, Search, UserX, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { handleSearch } from "@/lib/api/auth";
import { UserType } from "@/lib/context/UserProvider";
import {
  sendFriendRequest,
  cancelRequest,
  acceptFriendRequest,
} from "@/lib/api/auth";
import { useContext } from "react";
import { UserContext } from "@/lib/context/UserProvider";
import { useRouter } from "next/navigation";
type AddFriendsDialogType = {
  handleAddFriendsDialog: () => void;
};

export default function AddFriendsDialog({
  handleAddFriendsDialog,
}: AddFriendsDialogType) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data } = useContext(UserContext)!;

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setError("");
    try {
      const res = await handleSearch(searchInput);
      if (res.error) {
        setError(res.error);
      } else {
        setUser(res.data?.usersWithStatus);
        console.log(res.data?.usersWithStatus);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addFriend = async (receiverId: string) => {
    setLoading(true);
    try {
      await sendFriendRequest(receiverId);
      setLoading(false);
      window.location.assign("/HomeScreen");
    } catch (err) {
      console.log(err);
    }
  };

  const cancelRequestFunc = async (receiverId: string) => {
    setLoading(true);
    try {
      await cancelRequest(receiverId);
      setLoading(false);
      window.location.assign("/HomeScreen");
    } catch (err) {
      console.log(err);
    }
  };

  const acceptFriend = async (requestId: string) => {
    setLoading(true);
    try {
      await acceptFriendRequest(requestId);
      setLoading(false);
      window.location.assign("/HomeScreen");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!searchInput) return;

    const timeout = setTimeout(async () => {
      setError("");
      const res = await handleSearch(searchInput);
      if (res.error) {
        setError(res.error);
      }
      setUser(res.data?.usersWithStatus);
      console.log(res.data?.usersWithStatus);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [searchInput]);
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-stone-900/30 backdrop-blur-sm flex flex-col items-center mx-auto justify-center p-5 ">
      <div className="space-y-3  flex flex-col bg-stone-900 w-full lg:w-4xl  p-5 rounded-lg border border-gray-400 shadow-lg shadow-[#7F56D9] h-md overflow-y-auto ">
        <div className="flex items-center gap-3 mb-5">
          <ArrowLeft
            className="text-gray-400 cursor-pointer"
            onClick={handleAddFriendsDialog}
          />
          <h2 className="text-2xl font-bold text-white ">Add Friends</h2>
        </div>

        <div className="flex items-center gap-4 overflow-hidden">
          <div className="flex flex-1  items-center gap-1 px-4 py-1 bg-stone-600 rounded-lg">
            <Search className="text-[#7F56D9]" />
            <form className="w-full" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className=" text-white py-2 px-3 outline-none w-full placeholder:tracking-tighter"
                placeholder="Search by username..."
                onChange={handleSearchInput}
              />
            </form>
          </div>
        </div>

        {error && (
          <div className="flex flex-col items-center justify-center  border border-[#7F56D9] rounded-lg p-5 mt-3">
            <div className="flex items-center justify-center w-20 h-20 bg-stone-700 rounded-full mb-3">
              <UserX size={30} />
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <h1 className="text-white text-2xl">{error}</h1>
              <p className="tracking-tighter text-slate-400">
                We couldn&apos;t find anyone with that username or email. Please
                check the spelling and try again.
              </p>
            </div>
          </div>
        )}
        {user?.length > 0 && (
          <div className="flex flex-col">
            <h2 className=" pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
              Search Result
            </h2>
            {user.map((searchResult, index) => (
              <div
                key={index}
                className="flex justify-between gap-5 items-center pt-5 py-3 md:px-3 "
              >
                <div className="flex gap-3 items-center">
                  <div
                    className="bg-cover bg-center rounded-full size-12"
                    style={{
                      backgroundImage: `url(${searchResult.profileImage})`,
                    }}
                  ></div>
                  <div>
                    <h1 className="font-semibold text-white ">
                      {searchResult.username}
                    </h1>
                    <p className="text-sm text-slate-500">
                      @{searchResult.username}
                    </p>
                  </div>
                </div>

                {searchResult.status === "friends" ? (
                  <button
                    className="bg-gray-500/20 text-white text-md  tracking-tight font-semibold py-2 px-3 rounded-lg text-sm"
                    disabled
                  >
                    Friends
                  </button>
                ) : searchResult.status === "pending" ? (
                  <div className="flex gap-2">
                    <button
                      className="bg-gray-500/20 text-white text-md  tracking-tight font-semibold py-2 px-3 rounded-lg text-sm"
                      disabled
                    >
                      Request sent
                    </button>
                    <button
                      className="bg-[#7F56D9] py-2 px-3 rounded-lg text-white  text-sm cursor-pointer  tracking-tight text-md font-semibold"
                      onClick={() => cancelRequestFunc(searchResult.id)}
                    >
                      {loading ? (
                        <div className="flex gap-3">
                          <Loader2 className="animate-spin text-white  text-center" />
                          <p>Cancel</p>
                        </div>
                      ) : (
                        <p>Cancel</p>
                      )}
                    </button>
                  </div>
                ) : searchResult.status === "awaiting_response" ? (
                  <button
                    className="bg-[#7F56D9] cursor-pointer text-sm py-2 px-3 rounded-lg text-white tracking-tight font-semibold"
                    onClick={() => acceptFriend(searchResult.requestId)}
                  >
                    {loading ? (
                      <div className="flex gap-3">
                        <Loader2 className="animate-spin text-white  text-center" />
                        <p>Accept</p>
                      </div>
                    ) : (
                      <p>Accept</p>
                    )}
                  </button>
                ) : (
                  <button
                    className="bg-[#7F56D9] py-2 px-3 rounded-lg cursor-pointer text-white tracking-tight text-sm font-semibold"
                    onClick={() => addFriend(searchResult.id)}
                  >
                    {loading ? (
                      <div className="flex gap-3">
                        <Loader2 className="animate-spin text-white  text-center" />
                        <p>Add Friend</p>
                      </div>
                    ) : (
                      <p>Add Friend</p>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
