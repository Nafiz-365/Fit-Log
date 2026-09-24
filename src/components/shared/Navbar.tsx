import { Dumbbell, Menu } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar shadow-sm bg-[#0C0D10]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <Menu className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <a className="btn rounded-2xl">Workouts</a>
                        <a className="btn rounded-2xl">My Plan</a>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl rounded-2xl">
                    <Dumbbell
                        className="h-6 w-6 text-[#c4f000]"
                        aria-hidden="true"
                    />
                    FITLOG
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <a className="btn rounded-2xl">Workouts</a>
                    <a className="btn rounded-2xl">My Plan</a>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn rounded-2xl">Plan</a>
                <a className="btn rounded-2xl">Saved</a>
            </div>
        </div>
    );
};

export default Navbar;
