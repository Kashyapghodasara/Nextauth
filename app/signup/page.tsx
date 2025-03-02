// Date - 20-11-2024  -  Wednesday
// Date - 21-11-2024  -  Thursday
// Date - 24-11-2024  -  Sunday
// Date - 26-11-2024  -  Tuesday
// Date - 27-11-2024  -  Wednesday



"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const SignupForm = () => {
  const router = useRouter();
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (user.email === "" || user.password === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [user]);

  const submitHandler = async (e: any) => {
    e.preventDefault();  // Prevent form default submission behavior
    try {
      const res = await axios.post("/api/user/signup", user);
      console.log("User Registerd Successfully ✔")
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="w-full max-w-md bg-gray-900 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={submitHandler}>  {/* Add onSubmit here */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={user.username}
              onChange={(e) => { setuser({ ...user, username: e.target.value }) }}
              placeholder="Username"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => { setuser({ ...user, email: e.target.value }) }}
              placeholder="Enter your email"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => { setuser({ ...user, password: e.target.value }) }}
              placeholder="Enter your password"
              className="mt-2 w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <button
            type="submit"  // Button type as submit
            disabled={disable}
            className={`w-full p-3 rounded-lg text-white transition 
              ${disable ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"}`}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{""}
          <a href="/login" className="text-indigo-400 hover:text-indigo-300">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
