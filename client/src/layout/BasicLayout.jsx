import { Link, Outlet } from "react-router";

function BasicLayouts() {
    return (
        <>
            <header className="w-[80rem] bg-white shadow-md py-2 px-5 flex items-center justify-between border-b border-gray-200 ml-0 mt-0">
                <div className="flex items-center gap-3">
                    <Link to="/home" className="flex items-center gap-2">
                        <span className="text-3xl text-indigo-600 font-bold">💼</span>
                        <span className="text-xl font-semibold text-gray-800 tracking-tight">Interview Experience Management</span>
                    </Link>
                </div>
                <nav className="flex gap-4">
                    <Link to="/login" className="px-5 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                        Sign In
                    </Link>
                    <Link to="/signup" className="px-5 py-2 rounded-md border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition">
                        Sign Up
                    </Link>
                </nav>
            </header>
            <main className="max-w-5xl mx-auto py-10 px-4 min-h-[70vh] ml-0 mt-0">
                <Outlet />
            </main>
            <footer className="w-full py-6 text-center bg-gray-100 rounded-t-lg border-t">
                © {new Date().getFullYear()} <span className="font-bold text-indigo-600">Notes App</span>. All rights reserved.
            </footer>
        </>
    );
}

export default BasicLayouts;