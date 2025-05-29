import { Link, Outlet } from "react-router";


function BasicLayouts() {
    return (
        <>
            <header
                className="bg-gradient-to-r from-black to-cyan-400 text-cyan-400 shadow-lg py-4 flex flex-col sm:flex-row items-center justify-between px-6"
            >
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="notes">📝</span>
                    cms project
                </div>
                <div className="mt-3 sm:mt-0 flex flex-wrap gap-3 justify-center">
                    <Link
                        to="/home"
                        className="bg-gradient-to-r from-black to-cyan-700 text-cyan-300 px-5 py-2 rounded-full border border-cyan-400 shadow font-semibold transition-all duration-150 hover:bg-cyan-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        Home
                    </Link>
                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-black to-cyan-700 text-cyan-300 px-5 py-2 rounded-full border border-cyan-400 shadow font-semibold transition-all duration-150 hover:bg-cyan-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        sign-in
                    </Link>
                    <Link
                        to="/Signup"
                        className="bg-gradient-to-r from-black to-cyan-700 text-cyan-300 px-5 py-2 rounded-full border border-cyan-400 shadow font-semibold transition-all duration-150 hover:bg-cyan-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        Sign-up
                    </Link>
                    <Link
                        to="/devinfo"
                        className="bg-gradient-to-r from-black to-cyan-700 text-cyan-300 px-5 py-2 rounded-full border border-cyan-400 shadow font-semibold transition-all duration-150 hover:bg-cyan-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        Developer Info
                    </Link>
                </div>
            </header>
            <main className="">
                <Outlet />
            </main>
        </>
    );
}


export default BasicLayouts;
