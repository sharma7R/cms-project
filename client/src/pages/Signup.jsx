import React from 'react'

export default function Signup() {
  return (
    <section>
    <div>
        <h2> Your The New Register</h2>
        <div>
            <label>
                Username
            </label>
            <input
                type="text"
                placeholder="Enter a Username"
                className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
        </div>
        <div>
            <label>
                PassWord
            </label>
            <input
                type="Password"
                placeholder="Enter a password"
                className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
        </div>
    </div>
    </section>
  )
}
