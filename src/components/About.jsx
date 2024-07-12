import React from 'react'
import Working from './../images/illustrations/About.svg'
export function About() {
  return (
    <div
      id="about"
      className=" z-10 mx-auto max-w-7xl  px-6   sm:px-8 sm:pb-12 sm:pt-40"
    >
      <div className="relative mx-auto flex flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row-reverse lg:items-center lg:gap-12 ">
        <div className="mx-auto flex w-full  max-w-2xl flex-col items-center text-center lg:max-w-[50%] lg:shrink-0 lg:items-start  lg:text-left">
          <h1 className=" mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-6xl">
            Who we are<span className="text-[#00DC46]">?</span>
          </h1>
          <p className="mx-auto mt-6 w-full text-lg tracking-tight text-gray-700">
            Welcome to [Your Agency Name]! We transform ideas into digital
            masterpieces, blending creativity with cutting-edge technology. Our
            passionate team is dedicated to delivering stunning, high-performing
            solutions that exceed client expectations. We pride ourselves on
            fostering innovation and driving business growth. With a focus on
            excellence and client satisfaction, we strive to build lasting
            partnerships. Let's create something amazing together. Your success
            is our mission.
          </p>
        </div>
        <div className="mx-auto max-w-xl lg:w-[50%]">
          <img
            src={Working.src}
            alt="About illustration"
            loading="lazy"
            className=" h-[300px] w-auto  scale-x-[-1] "
          />
        </div>
      </div>
    </div>
  )
}
