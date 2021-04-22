import React from "react";
import image1 from "../../../assets/img/VYgreie.png"
export default function VySmidig() {
    return  (
    <div className="justify-center">
        <div className="lg:justify-between lg:items-center relative flex justify-center grid-rows-1">
            <div className="md:flex justify-between pt-8 md:pt-20 lg:pt-40 lg:pb-20 px-10">
                <div className="antialiased md:pl-40 lg:pl-60">
                <h1 className="font-display text-7xl md:text-8xl lg:text-9xl mb-6 lg:mb-14 font-black " >VY</h1>
                <p className="font-montserrat sm:text-3xl md:text-3xl lg:text-3xl mb-2 font-medium">Eksamen i smidig utvikling</p>
                <p className="font-montserrat sm:text-xl md:text-1xl lg:text-2xl mb-2 font-light">Oppgave: optimalisere reiseopplevelsen gjennom VYs tjenester.</p>
                </div>
                  <div className="flex justify-end" >
                  <img src={image1} alt="Vy smidig prosjekt" className="lg:ml-40 rounded shadow w-96"/>
            </div>
        </div>
    </div>
    <div>
        <p className="text-black mt-8 mb-8 lg:mt-20 font-bold ml-10 lg:ml-0 g:text-2xl relative flex justify-center">Hvordan legger vi til rette for en bedre dør-til-dør-opplevelse for VYs kunder?</p>
        <p className="text-black mb-8 text-1xl lg:text-3xl relative flex justify-center">Kundebeskrivelse</p>
    <h2 className="text-black mt-8 mb-8 lg:mt-20 font-bold text-3xl lg:text-6xl relative flex justify-center">Prosjektdetaljer</h2>
      </div>
      <div className=" lg:pl-96 pt-1 lg:pt-24 justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <div className="font-montserrat">
          <p className="font-bold text-1xl relative flex">Min rolle</p>
          <p className="font-light md:text-1xl relative flex mb-1">Interaksjonsdesign</p>
          <p className="font-light md:text-1xl relative flex mb-1">User Research</p>
          <p className="font-light md:text-1xl relative flex mb-1">Brukertesting</p>
          <p className="font-light md:text-1xl relative flex mb-1">Prototyping</p>
          <p className="font-light md:text-1xl relative flex mb-1">Konseptutvikling</p>
          <br></br>
          </div>
          <div>
          <p className="font-light md:text-black font-bold text-1xl relative flex">Verktøy og teknikker</p>
          <p className="font-light md:text-1xl relative flex mb-1">Figma</p>
          <p className="font-light md:text-1xl relative flex mb-1">SCRUM</p>
          <p className="font-light md:text-1xl relative flex mb-1">Google Design Sprint</p>
          <br></br>
          </div>
          <div>
          <p className="text-black font-bold text-1xl relative flex">Kunde</p>
          <p className="font-light md:text-1xl relative flex mb-1">VY</p>
          <p className="font-light md:text-1xl relative flex mb-1">2019-2020</p>
          <p className="font-light md:text-1xl relative flex mb-1">8 uker</p>
          </div>
          </div>
          <div className="flex justify-center bg-black pt-px mx-8 md:mx-80 lg:mx-96"> </div>
          <div>
    <h2 className="text-black mt-8 lg:mt-24 font-bold text-1xl relative flex justify-center">01.prosess</h2>
    <h2 className="text-black mb-8 mt-8 lg:mt-10 font-bold text-5xl relative flex justify-center">Google Design Sprint</h2>
      </div>
   </div>
        )
}