import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../assets/img/id3artikkel.png";
import image2 from "../assets/img/Cherish.png"
import image3 from "../assets/img/VYgreie.png"

export default function UxProjects() {
    return (
    <main class="grid place-items-center min-h-screen p-5">
        <div>
            <h1 className="font-body text-4xl sm:text 5-xl md:text-7xl font-bold text-gray-600 mb-8">UX Design</h1>
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/*card 1*/}
                    <div className="bg-gray-300 shadow-lg rounded p-3">
                        <div className="group relative">
                            <NavLink to="/vysmidig">
                                <img className="w-full lg:w-72 lg:h-72 block rounded" src={image3} alt="Vy smidig prosjekt" />
                                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                
                                </div>
                            </NavLink>
                        </div>
                            <div className="p-5">
                                <h3 className="text-gray-900 font-bold text-lg">VY</h3>
                                <p className="text-gray-900">Prototype i Figma</p>
                            </div>
                    </div>
            {/*end of card 1*/}

            {/*card 2*/}
            <div className="bg-gray-300 shadow-lg rounded p-3">
                        <div className="group relative">
                            <NavLink to="/vysmidig">
                                <img className="w-full lg:w-72 lg:h-72 object-cover block rounded" src={image1} alt="Vy smidig prosjekt" />
                                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                
                                </div>
                            </NavLink>
                        </div>
                            <div className="p-5">
                                <h3 className="text-gray-900 font-bold text-lg">VY</h3>
                                <p className="text-gray-900">Prototype i Figma</p>
                            </div>
                    </div>
            {/*end of card 2*/}

            {/*card 3*/}
                    <div className="bg-gray-300 shadow-lg rounded p-3">
                        <div className="group relative">
                            <NavLink to="/vysmidig">
                                <img className="w-full lg:w-72 lg:h-72 object-fill block rounded" src={image2} alt="Vy smidig prosjekt" />
                                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                
                                </div>
                            </NavLink>
                        </div>
                            <div className="p-5">
                                <h3 className="text-gray-900 font-bold text-lg">VY</h3>
                                <p className="text-gray-900">Prototype i Figma</p>
                            </div>
                    </div>
                    {/*end of card 3*/}
                    
        </section>
        </div>
    </main>
        )
}