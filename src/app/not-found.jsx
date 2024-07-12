import { Logo } from '@/components/Logo'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative bg-white">
      <div className="  mx-auto  flex  min-h-screen max-w-7xl flex-col items-center  justify-center gap-4 px-6 py-12 sm:px-8">
        <div className="flex">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        <p className="mt-8 text-2xl font-medium text-gray-600">404</p>
        <h1 className="mt-3 text-lg font-semibold text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-gray-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="rounded-md bg-[#00DC46] px-4 py-[10px] font-medium text-black"
        >
          Go back home
        </a>
      </div>
    </div>
  )
}
