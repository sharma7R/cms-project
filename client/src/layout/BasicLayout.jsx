import { Link, Outlet } from "react-router";

function BasicLayouts() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md py-2 px-4 flex items-center justify-between border-b border-yellow-200 z-50" style={{height: '56px'}}>
                <div className="flex items-center gap-2">
                    <Link to="/home" className="flex items-center gap-1">
                        <span className="text-2xl text-yellow-700 font-bold">💼</span>
                        <span className="text-lg font-bold text-yellow-900 tracking-tight drop-shadow">Interview Experience Management</span>
                    </Link>
                </div>
                <nav className="flex gap-2">
                    <Link to="/home" className="px-4 py-1 rounded bg-yellow-100 text-yellow-900 font-semibold shadow transition border border-yellow-300 text-sm hover:bg-yellow-700 hover:text-white focus:bg-yellow-700 focus:text-white">
                        Home
                    </Link>
                    <Link to="/login" className="px-4 py-1 rounded bg-yellow-100 text-yellow-900 font-semibold shadow transition border border-yellow-300 text-sm hover:bg-yellow-700 hover:text-white focus:bg-yellow-700 focus:text-white">
                        Sign-in
                    </Link>
                    <Link to="/signup" className="px-4 py-1 rounded bg-yellow-100 text-yellow-900 font-semibold shadow transition border border-yellow-300 text-sm hover:bg-yellow-700 hover:text-white focus:bg-yellow-700 focus:text-white">
                        Sign-Up
                    </Link>
                </nav>
            </header>
            <main className="max-w-3xl mx-auto py-20 px-4 min-h-[70vh] mt-0 pt-32">
                <Outlet />
            </main>
        </>
    );
}

export default BasicLayouts;