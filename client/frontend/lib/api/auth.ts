const Api = "https://messaging-app-backend-l4ma.onrender.com";
// const Api = " http://localhost:3001";

type signUpType = {
  username: string;
  email: string;
  password: string;
};

type LoginType = {
  email: string;
  password: string;
};

export const signUp = async (payload: signUpType) => {
  try {
    const res = await fetch(`${Api}/signUp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { error: data.error };
    }
    return { data };
  } catch (err) {
    console.log("Sign-up failed", err);
    return { error: err };
  }
};

export const login = async (payload: LoginType) => {
  try {
    const res = await fetch(`${Api}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { error: data.error };
    }
    localStorage.setItem("token", data.token);
    return { data };
  } catch (err) {
    console.log(err);
  }
};

export const fetchUser = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await res.json();
    if (!res.ok) {
      console.log(user.error);
    }

    if (user.error === "jwt expired") {
      localStorage.removeItem("token");
    }

    return user;
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = async (form: FormData) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/update`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
    }
  } catch (err) {
    console.log(err);
  }
};

export const LogOutApi = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const DeleteAccount = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/deleteAccount`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      window.location.href = "/";
    }
  } catch (err) {
    console.log(err);
  }
};

export const handleSearch = async (username: string) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/search?username=${username}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) {
      return { error: data.error };
    }
    return { data: data };
  } catch (err) {
    console.log(err);
    return { error: "Network error" };
  }
};

export const sendFriendRequest = async (receiverId: string) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/friend/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ receiverId }),
    });
    const data = await res.json();

    if (!res.ok) {
      return { error: data.error };
    }

    console.log("Friend request sucess");
    return data;
  } catch (err) {
    console.log("Friend request error", err);
  }
};

export const cancelRequest = async (receiverId: string) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/friend/cancelRequest`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ receiverId }),
    });
    const data = await res.json();

    if (!res.ok) {
      return { error: data.error };
    }
    console.log("Friends request cancelled succussfully");
  } catch (err) {
    console.log("Cancel Request", err);
  }
};

export const acceptFriendRequest = async (requestId: string) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/friend/accept`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestId),
    });
    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
      return;
    }

    return { data };
  } catch (err) {
    console.log(err);
  }
};

export const rejectRequest = async (requestId: string) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${Api}/friend/reject`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestId),
    });
    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
      return;
    }

    console.log(data);
    return;
  } catch (err) {
    console.log(err);
  }
};

export const chatHistory = async (chatId: string) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${Api}/chat/${chatId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.error);
      return { error: data.error };
    }
    return { data: data };
  } catch (err) {
    console.log(err);
  }
};

export const groupChatHistory = async (groupId: string) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${Api}/chat/GroupChat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        body: JSON.stringify({ groupId }),
      },
    });

    const data = await res.json();
    if (!res.ok) {
      console.log(data.error);
      return { error: data.error };
    }
    return { data: data };
  } catch (err) {
    console.log(err);
  }
};

export const uploadFileApi = async (form: FormData) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${Api}/uploads`, {
      method: "POST",
      body: form,
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    if (!res.ok) {
      return { error: data.error };
    }
    return { data: data.data };
  } catch (err) {
    console.log(err);
  }
};

export const CreateGroup = async (groupId: FormData) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/createGroup`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: groupId,
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
      return { error: data.error };
    }
    console.log(data);
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
};

export const leaveGroup = async (groupId: string) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/exitGroup`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: groupId,
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
      return { error: data.error };
    }
    console.log(data);
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
};

export const unFriendUser = async (friendId: string) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/unfriendUser`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: friendId,
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
      return { error: data.error };
    }
    console.log(data);
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
};

export const addMemberToGroup = async (
  groupId: string,
  newMembers: string[],
) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${Api}/addMembersToGroup`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupId,
        newMembers,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
      return { error: data.error };
    }
    console.log(data);
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
};
