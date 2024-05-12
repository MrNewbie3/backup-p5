import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement your login logic here
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center font-[Manrope]">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-medium mb-6">Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="loginEmail" name="loginEmail" value={email} onChange={(e) => setEmail(e.target.value)} required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input type="password" id="loginPassword" name="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                        Signup with Google
                    </button>
                    
                </form>
            </div>
        </div>
        
    );
};

export default Login;