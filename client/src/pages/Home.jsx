import React from 'react'

export default function Home() {
  return (
        <>
      <section className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-600 mt-0 ml-0">
        <div className="text-white-800 text-3xl font-bold mb-4">
          Welcome to My Application
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-lg text-lg transition duration-300">
          Get Started
        </button>
      </section>
    </>
  )
}
