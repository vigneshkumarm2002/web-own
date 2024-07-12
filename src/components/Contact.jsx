'use client'
import { useState } from 'react'
import ContactIllus from './../images/illustrations/contact.svg'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    lookingFor: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    try {
      const response = await fetch('/api/notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Form submitted successfully!')
        setFormData({
          name: '',
          phone: '',
          email: '',
          lookingFor: '',
        })
      } else {
        alert('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  return (
    <div
      id="contact"
      className=" z-10 mx-auto w-full  max-w-7xl  px-6   sm:px-8 sm:pt-32"
    >
      <div className="relative mx-auto flex flex-col justify-between gap-8  lg:mx-0 lg:flex-row  lg:gap-12 ">
        <div className="flex w-full max-w-xl flex-col justify-between   lg:w-[60%]">
          <div>
            <h1 className=" max-w-4xl text-left font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-5xl">
              Let’s Make Something{' '}
              <span className="text-brandGreen">Great Together</span> !
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Excited about your next project? We are too! Contact us and let’s
              create something extraordinary together.
            </p>
          </div>

          <img
            src={ContactIllus.src}
            alt="ContactIllus"
            loading="lazy"
            className="h-[210px] w-auto self-start   "
          />
        </div>

        <div className=" flex h-fit w-full items-center rounded-lg bg-gray-200 p-8 lg:w-[40%] ">
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="mt-1 h-[45px] w-full rounded-md border-0 bg-white px-4  ring-0 focus:border-0 focus:border-none  focus:ring-brandGreen"
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              required
              className="mt-1 h-[45px] w-full rounded-md border-0 bg-white px-4  ring-0 focus:border-0 focus:border-none  focus:ring-brandGreen"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="mt-1 h-[45px] w-full rounded-md border-0 bg-white px-4  ring-0 focus:border-0 focus:border-none  focus:ring-brandGreen"
            />

            <textarea
              id="lookingFor"
              name="lookingFor"
              rows="4"
              value={formData.lookingFor}
              onChange={handleChange}
              placeholder="What are you looking for?"
              required
              className="mt-1 h-auto w-full resize-none rounded-md border-0 bg-white px-4  ring-0 focus:border-0 focus:border-none  focus:ring-brandGreen"
            ></textarea>

            <button
              className="mt-4 h-[45px] rounded-md bg-brandGreen px-4 py-[10px] font-medium text-black"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
