import { Link, Outlet } from "react-router";

function BasicLayouts() {
    return (
        <>
            <header className="w-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-3 shadow-lg flex flex-col sm:flex-row items-center justify-between px-8 rounded-b-3xl border-b-4 border-pink-400">
                <div className="text-3xl font-extrabold flex items-center tracking-wide drop-shadow-lg w-screen">
                    <span role="img" aria-label="notes" className="text-4xl animate-bounce">
                        <Link to={'/home'}>📝</Link>
                    </span>
                    <span className="bg-white text-pink-700 px-5 py-1 rounded-lg shadow-md">Notes</span>
                </div>
                <div className="flex flex-row gap-4 mr-2 items-center">
                    <Link to={'/login'}>
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-transform font-semibold border-2 border-white">
                            SignIn
                        </div>
                    </Link>
                    <Link to={'/signup'}>
                        <div className="bg-white text-pink-700 px-6 py-2 rounded-full shadow hover:bg-pink-100 transition-colors font-semibold border-2 border-pink-400 w-min">
                            SignUp
                        </div>
                    </Link>
                </div>
            </header>
            <main className="w-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 px-4 py-8 rounded-xl shadow-inner mx-0 mt-4">
                <Outlet />
            </main>
            <footer className="w-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-pink-700 py-5 text-center mt-10 border-t-2 border-pink-200 rounded-t-2xl font-medium tracking-wide shadow">
                © {new Date().getFullYear()} <span className="font-bold">Notes App</span>. All rights reserved.
            </footer>
        </>
    );
}

export default BasicLayouts;