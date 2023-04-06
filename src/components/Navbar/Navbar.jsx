import React from "react";

import { MdOutlineTransform } from 'react-icons/md';

export default function Navbar() {
    return (
        <nav className="w-full shadow-lg shadow-slate-500/50 p-3 flex justify-center items-center">
            
            <div className="navContent w-full flex justify-between md:w-1/2">

                <div className="convertLogo text-white text-5xl p-2">
                    <a
                        href="/">
                        <MdOutlineTransform />
                    </a>
                </div>
                
                <div className="currencyType text-white text-3xl flex items-center">
                    <button className="bg-slate-700 ml-2 p-2 px-5 rounded-full uppercase text-sm hover:bg-slate-500 font-bold">exchange</button>
                </div>

                <div className="converName typeTitle hidden md:flex items-center">
                    <p className="text-white uppercase tracking-[.15em]">
                        Currency Convert
                    </p>
                </div>
            </div>

        </nav>
    );
}