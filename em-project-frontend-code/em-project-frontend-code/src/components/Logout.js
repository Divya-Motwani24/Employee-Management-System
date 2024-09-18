// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or authentication token
        localStorage.removeItem('userToken'); // Replace with your actual token name or session clearing logic

        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-black p-8 rounded shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Logged Out</h1>
                <p>You have been successfully logged out.</p>
                <button
                    onClick={handleLogout}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default Logout;
