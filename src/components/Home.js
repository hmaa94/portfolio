import React from "react";
import image from "../assets/img/paperbg.png"

export default function Home() {
    return (
    <main>
        <img src ={image} alt="paper background"
            className="object-center absolute object-contain h-screen w-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-gray-900">
            Hans M. Aasland
            </h1>
            </section>
    </main>
        )
}