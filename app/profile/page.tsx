// Date - 27-11-2024  -  Wednesday


"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';

import React from 'react';


const ProfilePage = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            alert('Are you Sure you want to Logout..?');
            const res = await axios.get("/api/user/logout")
            router.push("/") 
        } catch (error) { 
            console.log("Error Occure in Logout", error)
        }
          
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-800">
            <div className="w-full max-w-md bg-gray-900 text-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-6">Profile</h1>
                
                <button
                    onClick={handleLogout}
                    className="w-full p-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
