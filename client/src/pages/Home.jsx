import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-600 mt-0 ml-0">
        <div className="text-white-800 text-3xl font-bold mb-4">
          Welcome to My Application
        </div>
                  <Link
            to="/login"
            className="bg-transparent text-indigo-100 px-5 py-2 rounded-full border border-indigo-200 shadow font-semibold transition-all duration-150 hover:bg-indigo-100 hover:text-indigo-900">
            GetStarted
          </Link>
      </section>
    </>
  )
}
