import { Header } from './Header'
import VantaBirds from './VantaBirds'
import banner from './../images/illustrations/design.png'
import Link from 'next/link'

export function Hero() {
  return (
    <div id="home" className="relative bg-[#000000]">
      <Header />

      <div className="pt-30  mx-auto  h-[780px]  max-w-7xl px-6  pb-14 sm:px-8  sm:pb-36 lg:pt-36">
        <div className="z-1 absolute left-0 top-0 h-auto w-full overflow-hidden opacity-40">
          <VantaBirds />
        </div>
        <div className="relative mx-auto flex flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-12 ">
          <div className="mx-auto flex w-full  max-w-2xl flex-col items-center text-center lg:max-w-[50%] lg:shrink-0 lg:items-start  lg:text-left">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
              Crafting{' '}
              <span className="relative whitespace-nowrap text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-[#00DC46]"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Unique</span>
              </span>{' '}
              Web Solutions
            </h1>
            <p className="mx-auto mt-6 w-full text-lg tracking-tight text-white">
              We transform visions into reality with cutting-edge web
              development and design. Our expert team crafts custom websites
              that drive business growth and captivate users.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                href="mailto:vigneshkumarm2002@gmail.com"
                className="rounded-md bg-[#00DC46] px-4 py-[10px] font-medium text-black"
              >
                Call Now
              </Link>
              <Link
                className={
                  'rounded-md border border-[#00DC46]  px-4 py-[10px] font-medium text-white'
                }
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="mx-auto flex max-w-xl justify-end lg:w-[50%]">
            <img src={banner.src} className="h-[500px] w-auto" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  )
}
