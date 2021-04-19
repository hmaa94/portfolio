import React from "react";
import image1 from "../../../assets/img/VYgreie.png"
export default function VySmidig() {
    return  (
    <div className="font-body">
        <div className="md:pl-40 lg:pl-60 lg:justify-between lg:items-center relative flex justify-center">
            <div className="md:flex justify-between py-8 md:py-20 lg:py-40 px-10">
                <div className="antialiased">
                <p className="sm:text-2xl md:text-2xl lg:text-3xl mb-2 font-light">Eksamen i smidig utvikling</p>
                <h1 className="text-4xl md:text-5xl lg:text-9xl mb-6 lg:mb-14 font-black " >VY</h1>
                <p className=" sm:text-1xl md:text-2xl lg:text-3xl mb-2 font-light">En behagelig reise fra dør til dør.</p>
                </div>
            </div>
        </div>
    <div className="relative flex justify-center py-8 text-white sm:ml-0 md:ml-36 lg:ml-60 md:pr-36 lg:pr-96 lg:bg-gray-100 sm:bg-white text-venter">
    <img src={image1} alt="Vy smidig prosjekt" className="md:mt-36 lg:mt-60 h-80 lg:h-3/6 w-80 lg:w-3/6 object-cover"/>
    </div>
    <div className="relative flex justify-center py-8 text-white sm:ml-0 md:ml-36 lg:ml-60 md:pr-36 lg:pr-96 ">
    <h2 className="text-black mt-8 mb-8 lg:mt-20 font-bold text-4xl relative flex justify-center">Prosjektdetaljer</h2>
    <p className="text-black"></p>
      </div>
   </div>
        )
}