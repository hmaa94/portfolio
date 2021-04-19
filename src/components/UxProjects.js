import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../assets/img/id3artikkel.png";
import image2 from "../assets/img/Cherish.png"
import image3 from "../assets/img/VYgreie.png"

export default function UxProjects() {
    return (
    <div>
    <section className="text-gray-600 mt-36 font-bold text-7xl relative flex justify-center">UX Design</section>
        <div className="grid grid-rows-3 lg:grid-flow-col sm:auto-cols-auto gap-4 relative flex justify-center pt-12 lg:pt-24 px-2">
            

            <div className="row-span-3 ... ">
            <NavLink to="/vysmidig">
                    <img src={image3} alt="Vy smidig prosjekt" className="h-96 w-96 object-cover"/>
                </NavLink> 
           
            </div>
            <div className="col-span-2 ... ">
                <img src={image1} alt="Raadet for psykisk helse" className="h-96 w-96 object-cover"/>
            </div>
            <div className="row-span-2 col-span-2 ... ">
            <img src={image2} alt="Cherish" className="h-96 w-96 object-left"/>
            </div>
        </div>
    </div>
        )
}