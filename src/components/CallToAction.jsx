import Link from 'next/link'

export function CallToAction() {
  return (
    <div className="relative ">
      <div className="mx-auto  flex h-auto max-w-7xl flex-col items-center justify-center rounded-4xl  bg-[#000000] px-6   py-24  sm:px-8  ">
        <h1 className="text-center font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Ready for a Digital Upgrade?<br></br> Connect with Us Today!
        </h1>
        <div className="mt-8 flex gap-4">
          <Link
            href="mailto:vigneshkumarm2002@gmail.com"
            className="rounded-md bg-[#00DC46] px-4 py-[10px] font-medium text-black"
          >
            Contact Now
          </Link>
          <Link
            className={
              'rounded-md border border-[#00DC46]  px-4 py-[10px] font-medium text-white'
            }
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            Get a Quote
          </Link>
        </div>{' '}
      </div>
    </div>
  )
}
