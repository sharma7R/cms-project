import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[20rem] bg-white mt-0 ml-0 w-[78rem]">
        <div className="text-black-100 text-4xl font-bold mb-6 animate-pulse">
          Welcome to My Application
        </div>
        <div className="text-indigo-900 text-lg mb-4 ">
          Manage and track your interview experiences with ease.
        </div>
        <Link
          to="/login"
          className=" bg-gray-300 text-indigo-100 px-8 py-3 rounded-full border border-indigo-200 shadow-lg font-semibold transition duration-200 hover:bg-indigo-100 animate-bounce"
        >
          Get Started
        </Link>
      </section>
    </>
  )
}
