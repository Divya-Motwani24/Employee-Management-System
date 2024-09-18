import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-5xl font-bold text-center my-8">Welcome to the Employee Management System</h1>
            <p className="text-center text-lg my-4">
                Manage your employee data efficiently with our simple and intuitive interface.
            </p>
            <div className="flex justify-center my-8">
                <button 
                    onClick={() => window.location.href='/addEmployee'}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                    Add New Employee
                </button>
                <button 
                    onClick={() => window.location.href='/employeeList'}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                    View Employee List
                </button>
            </div>
        </div>
    );
};

export default Home;
