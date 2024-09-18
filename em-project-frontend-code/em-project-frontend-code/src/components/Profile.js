// src/components/Profile.js
import React from 'react';

const Profile = () => {
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-5xl font-bold text-center my-8">User Profile</h1>
            <div className="max-w-xl mx-auto bg-slate-800 rounded shadow py-4 px-8">
                <div className="text-3xl font-bold text-center py-4">
                    <p>👤 Admin</p> {/* Replace with dynamic data as needed */}
                </div>
                <div className="my-4 px-10">
                    <p className="text-xl mb-2">Email: admin@gmail.com</p> {/* Replace with dynamic data */}
                    <p className="text-xl mb-2">Phone: +1234567890</p> {/* Replace with dynamic data */}
                    <p className="text-xl mb-2">Position: HR </p> {/* Replace with dynamic data */}
                </div>
                <div className="flex justify-center my-4">
                </div>
            </div>
        </div>
    );
};

export default Profile;
