'use client'
import React from 'react'
import { Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine)
  }

  const particlesOptions = {
    particles: {
      number: { 
        value: 80, 
        density: { 
          enable: true, 
          value_area: 800 
        } 
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white">
      <Header />
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      
      <main className="relative z-10 min-h-screen flex items-center px-20">
        <div className="grid grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Delivering Superior Services<br />
              <span className="text-blue-500">IT Solutions.</span>
            </h1>
            <p className="text-xl mb-6">
              You can easily change any design to your own. 
              It is also highly customizable SEO friendly template.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600">
                Get Quotes
              </button>
              <button className="border border-blue-500 px-6 py-3 rounded-full hover:bg-blue-500/20">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <img 
              src="/images/passarinho.png" 
              alt="AI Technology" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}