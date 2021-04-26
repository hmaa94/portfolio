import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon } from "react-social-icons";

export default function NavBar () {
    return (
        <header className="z-50 font-display sticky top-0 bg-white">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to= "/" 
                            exact className="font-bold"
                            className="transition delay-100 duration-300 ease-in-out ... iflex-flex items-center py-2 px-3 ml-4 mr-4 my-6 text-gray-800 hover:text-gray-400 lg:text-3xl md:text-2xl font-bold tracking-widest"> Hans Aasland
                    </NavLink>
                    
                    <NavLink to="/about"
                    className="transition delay-100 duration-300 ease-in-out ... inline-flex items-center py-3 px-3 my-3 rounded text-gray-800 hover:text-gray-400 font-semibold"> About
                    </NavLink>                    
                    <NavLink to= "/uxprojects"
                    className="transition delay-100 duration-300 ease-in-out ... inline-flex items-center py-3 px-3 my-3 rounded text-gray-800 hover:text-gray-400 font-semibold"> UX Projects
                    </NavLink>
                    <NavLink to="/webprojects"
                    className="transition delay-100 duration-300 ease-in-out ... inline-flex items-center py-3 px-3 my-3 rounded text-gray-800 hover:text-gray-400 font-semibold"> Web Projects
                    
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://linkedin.com/in/hans-aasland" className="mr-4" target="_blank" fgColor="#685044" bgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="mailto:aaslandhans@gmail.com" className="mr-4" target="_blank" fgColor="#685044" bgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/hmaa94" className="mr-4" target="_blank" fgColor="#685044" bgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
            
        </header>
    )
}