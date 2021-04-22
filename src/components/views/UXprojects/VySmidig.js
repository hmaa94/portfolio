import React from "react";
import image1 from "../../../assets/img/VYgreie.png"
export default function VySmidig() {
    return  (
    <div className="justify-center">
        <div className="lg:justify-between lg:items-center relative flex justify-center grid-rows-1">
            <div className="md:flex justify-between pt-8 md:pt-20 lg:pt-40 lg:pb-20 px-10">
                <div className="md:pl-40 lg:pl-60">
                <h1 className="text-7xl md:text-8xl lg:text-9xl mb-6 lg:mb-14 font-black font-body " >VY</h1>
                <p className="sm:text-3xl md:text-3xl lg:text-3xl mb-2 font-medium font-body">Eksamen i smidig utvikling</p>
                <p className="sm:text-xl md:text-1xl lg:text-2xl mb-2 font-light font-montserrat">Oppgave: optimalisere reiseopplevelsen gjennom VYs tjenester.</p>
                </div>
                  <div className="flex justify-end" >
                  <img src={image1} alt="Vy smidig prosjekt" className="lg:ml-40 rounded shadow w-96"/>
            </div>
        </div>
    </div>
    <div>
        <p className="font-body text-black mt-8 mb-8 lg:mt-20 font-bold ml-10 lg:ml-0 lg:text-2xl relative flex justify-center">Hvordan legger vi til rette for en bedre dør-til-dør-opplevelse for VYs kunder?</p>
        <p className="font-montserrat text-black mb-8 text-base lg:text-xl relative flex justify-center">Vy er - osv - prosjektinnledelse.</p>
    <h2 className="font-body text-black mt-8 mb-8 lg:mt-20 font-bold text-3xl lg:text-6xl relative flex justify-center">Prosjektdetaljer</h2>
      </div>
      <div className=" lg:pl-96 pt-1 lg:pt-24 justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <div className="">
          <p className="font-bold font-body text-1xl relative flex">Min rolle</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">Interaksjonsdesign</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">User Research</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">Brukertesting</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">Prototyping</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">Konseptutvikling</p>
          <br></br>
          </div>
          <div>
          <p className="font-bold font-body md:text-black text-1xl relative flex">Verktøy og teknikker</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">Figma</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">SCRUM</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">Google Design Sprint</p>
          <br></br>
          </div>
          <div>
          <p className="font-bold font-body text-1xl relative flex">Kunde</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">VY</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">2019-2020</p>
          <p className="font-light font-montserrat md:text-1xl relative flex mb-1">8 uker</p>
          </div>
          </div>
          <div className="flex justify-center bg-black pt-px mx-8 md:mx-80 lg:mx-96"> </div>
          <div>
    <h2 className="font-body text-black mt-8 lg:mt-24 mb-10 font-bold text-1xl relative flex justify-center">01.prosess</h2>
        <h3 className="font-body text-black mb-8 font-bold text-3xl lg:text-4xl relative flex justify-center subpixel-antialiased">Google Design Sprint</h3>
        <div className=" relative flex justify-center mx-auto w-3/4 lg:w-2/4 text-lg">
            <p className="relative flex justify-center font-montserrat subpixel-antialiased">Innledningsvis startet prosessen med Google Design Sprint.
                På disse fem dagene fikk vi idéer raskt på papir, utvidet de ytterligere, lagde to prototyper, for så å brukerteste de.
                Med tidsbegrensede oppgaver ble vi utfordret til å tørre å satse stort og få ned idéer kjapt. Selv om det gikk noe tid til å sette seg inn
                i nye begreper og teknikker, var gevinsten av å komme seg ut av komforsonen stor.</p>
            </div>
        <h2 className="font-body text-black mb-8 mt-8 lg:mt-10 ml-14 lg:ml-0 font-bold text-2xl relative flex justify-center">Metoder og teknikker</h2>
        <div  className=" relative flex justify-center mx-auto w-3/4 lg:w-2/4 text-lg">
        <p className="relative flex justify-center font-montserrat mb-10">Etter å ha satt et langtidsmål, formulerte vi problemer rundt idéer og tanker.
                Disse ble seinere omformulert til muligheter i form av "How Might We"'s. På denne måten ser man at problemene kan løses, også med flere tilnærminger.</p>
        </div>
        <div className=" relative flex justify-center mx-auto w-3/4 lg:w-2/4 text-lg">
        <p className="relative flex justify-center font-montserrat mb-10"> Skisseteknikker som ble brukt var Four-Step-Sketch, Crazy 8 og en Solution Sketch.
            Løsningsskissene ble deretter stemt på og fordelt i vinnere og "maybe-laters". Deretter smeltet vi sammen vinnende ideer som 
            og lagde et Storyboard på femten ruter. Vi lagde grove skisser til prototyper og passet på at brukertestere kunne dukke opp til dagen etter.</p>
        </div>
        <h2 className="font-body text-black mb-8 ml-14 lg:ml-0 font-bold text-2xl relative flex justify-center">Brukertesting</h2>
        <div  className=" relative flex justify-center mx-auto w-3/4 lg:w-2/4 text-lg">
        <p className="relative flex justify-center font-montserrat mb-10">Etter å ha satt et langtidsmål, formulerte vi problemer rundt idéer og tanker.
                Disse ble seinere omformulert til muligheter i form av "How Might We"'s. På denne måten ser man at problemene kan løses, også med flere tilnærminger.</p>
        </div>
      </div>
   </div>
        )
}