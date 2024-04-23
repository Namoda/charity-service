import { img } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            src="/child.jpg"
            width={1000}
            hight={1000}
            className="absolute inset-0 h-full 
           rounded-3xl 
            w-full object-cover"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Kind Heart Donation & Charity Service</h2>
         

          <p className="mt-4 text-gray-600">

          Kind Heart Donation & Charity Service is dedicated to spreading kindness through acts of
          generosity and support. We provide essential supplies, financial aid, and a listening ear 
          to those in need. Join us in building a compassionate world where everyone has the opportunity
           to thrive and feel supported.
          </p>
  
          <a
            href="#"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero