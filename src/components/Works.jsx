import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import DarlinsProduction from './../images/works/darlins-production.png'
import HealingCrystals from './../images/works/healing-crystal.png'
import AnantaaFoundtion from './../images/works/anantaa-foundation.png'
import Image from 'next/image'

const works = [
  {
    id: 1,
    title: 'Healing Crystals',
    imageUrl: HealingCrystals,
    url: 'https://healing-crystals.vercel.app/',
    bg: 'bg-[#A91CDB]',
  },
  {
    id: 1,
    title: 'Anantaa Foundation',
    imageUrl: AnantaaFoundtion,
    url: 'https://anantaafoundation.org/',
    bg: 'bg-[#00CAB9]',
  },
  {
    id: 1,
    title: 'Darlins Production',
    imageUrl: DarlinsProduction,
    url: 'https://www.darlinsproduction.in/',
    bg: 'bg-[#FDE94C]',
  },
]

export function Works() {
  return (
    <div id="works" className=" bg-[#F6F7FA] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl  font-medium tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-brandGreen">"</span> Our Recent Works{' '}
            <span className="text-brandGreen">"</span>
          </h2>
          <p className="mt-2  text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-14 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {works.map((work) => (
            <div key={work.id}>
              <Link
                href={work.url}
                target="_blank"
                className={`flex flex-col items-start justify-between rounded-md ${
                  work?.bg ? work.bg : 'bg-green-400'
                } px-6 pt-6  shadow-md`}
              >
                <div className="relative w-full ">
                  <img
                    src={work?.imageUrl.src}
                    alt=""
                    className="h-auto w-auto rounded-t-md"
                  />
                </div>
              </Link>
              <Link href={work.url} target="_blank" className="max-w-xl">
                <h3 className="mt-4 flex items-center gap-2 font-display text-xl font-medium  leading-6 text-gray-900  ">
                  {work.title}
                  <ArrowUpRightIcon className="h-5 w-5 stroke-brandGreen stroke-1 text-brandGreen" />
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
