const Api = "http://localhost:3001";

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
    return { data };
  } catch (err) {
    console.log(err);
  }
};
