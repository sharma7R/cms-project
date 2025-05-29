import { Link, Outlet } from "react-router";


function BasicLayouts() {
    return (
        <>
            <header
                className="text-cyan-400 shadow-lg py-4 flex flex-col sm:flex-row items-center justify-between px-6"
                style={{
                    background: "linear-gradient(90deg, #000 0%, #00ffff 100%)"
                }}
            >
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="notes">
                    </span> cms project
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <Link
                        to="/home"
                        className="bg-black text-cyan-400 px-5 py-2 rounded-full border border-black shadow font-semibold transition-all duration-150 hover:bg-cyan-900 hover:text-white">
                        Home
                    </Link>
                    <Link
                        to="/login"
                        className="bg-black text-cyan-400 px-5 py-2 rounded-full border border-black shadow font-semibold transition-all duration-150 hover:bg-cyan-900 hover:text-white">
                        sign-in
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
