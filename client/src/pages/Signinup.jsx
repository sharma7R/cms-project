import React from 'react';

function Signinup() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-cyan-400 w-[100vw]">
            <div className="bg-black p-8 rounded-xl shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">SIGN-IN</h2>
                <div className="mb-4"> 
                    <label className="block text-cyan-200 font-semibold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter a Username"
                        className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-cyan-200 font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>
                <button
                    className="w-full bg-cyan-600 text-white font-bold py-2 rounded-lg hover:bg-cyan-700 transition"
                >
                    SUBMIT
                </button>
            </div>
        </section>
    );
}

export default Signinup;