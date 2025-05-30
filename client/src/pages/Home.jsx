import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[30rem] w-[77rem] bg-gradient-to-r from-black via-gray-800 to-gray-900">
        <div className="text-indigo-100 text-4xl font-bold mb-6 w-[77rem">
          Welcome to My Application
        </div>
        <Link
          to="/login"
          className="bg-indigo-900 text-indigo-100 px-6 py-2 rounded-full border border-indigo-200 shadow-md font-semibold transition duration-150 hover:bg-indigo-100 hover:text-indigo-900"
        >
          Get Started
        </Link>
      </section>
    </>
  )
}
