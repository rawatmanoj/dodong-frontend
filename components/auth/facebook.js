"use client";
import { useEffect } from "react";
import { FacebookProvider, useLogin } from "react-facebook";
import { BsFacebook } from "react-icons/bs";

export default function FacebookButton() {
  const { login, status, isLoading, error } = useLogin();

  useEffect(() => {
    console.log("status", status);
    if (status === "connected") {
      console.log("connected");
    } else {
      console.log("not connected", status);
    }
  }, []);

  async function handleLogin() {
    try {
      const response = await login({
        scope: "email public_profile",
      });

      console.log(response.status);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <button onClick={handleLogin} disabled={isLoading}>
      {/* facebook icon */}
      <BsFacebook className="text-blue-600 text-3xl" />
    </button>
  );
}
