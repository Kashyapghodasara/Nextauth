"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Login = () => { // ✅ Renamed to PascalCase
  const router = useRouter();

  const [user, setuser] = useState({
    email: "",
    password: ""
  });

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(user.email === "" || user.password === "");
  }, [user.email, user.password]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/login", user);
      console.log(res.data.message);
      router.push("/profile");
    } catch (error) {
      console.log("Something went wrong on API Request", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="w-full max-w-md bg-gray-900 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="mt-2 mb-3 w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={disable}
            className={`w-full p-3 rounded-lg text-white transition 
              ${disable ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"}`}>
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-indigo-400 hover:text-indigo-300">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login; // ✅ Exporting correctly
