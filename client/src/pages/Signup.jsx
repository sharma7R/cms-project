import React from 'react'

export default function Signup() {
return (
    <section className="min-h-[32rem] flex items-center justify-center bg-gradient-to-br from-black to-cyan-400 w-[100vw] ">
        <div className="bg-black p-8 rounded-xl shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Sign Up</h2>
            <form className="flex flex-col gap-6">
                <div>
                    <label className="block text-cyan-200 font-semibold mb-2" htmlFor="username">
                        Choose Your Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="e.g. StarCoder42"
                        className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label className="block text-cyan-200 font-semibold mb-2" htmlFor="password">
                        Create a Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        autoComplete="new-password"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-lg transition shadow-md"
                >
                    Sign Up 🚀
                </button>
            </form>
            <p className="mt-6 text-cyan-200 text-sm text-center">
                Already have an account? <a href="/login" className="underline hover:text-white">Log in</a>
            </p>
        </div>
    </section>
)
}
