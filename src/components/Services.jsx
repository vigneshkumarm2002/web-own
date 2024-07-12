import WebIllus from './../images/illustrations/web-development-illustration.png'
import AppIllus from './../images/illustrations/app-development-illustration.png'
import LogoIllus from './../images/illustrations/logo-design-illustrator.png'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Our expert team specializes in creating high-quality, custom websites tailored to your business needs. From responsive design to robust backend systems, we ensure your website is both visually stunning and highly functional.',
    imageUrl: WebIllus,
  },
  {
    id: 2,
    title: 'App Development',
    description:
      'Transform your ideas into powerful mobile applications. Our app development services cover iOS and Android platforms, ensuring your app provides an exceptional user experience and meets your business goals.',
    imageUrl: AppIllus,
  },
  {
    id: 3,
    title: 'Logo Design',
    description:
      'A strong logo is the cornerstone of your brand identity. Our creative designers craft unique and memorable logos that perfectly represent your brand’s values and vision, helping you stand out in the market.',
    imageUrl: LogoIllus,
  },
]

export function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" max-w-2xl text-left">
          <h2 className="font-display text-3xl font-medium  tracking-tight text-gray-900 sm:text-5xl">
            Services We offer
            <span className="ml-1 text-7xl text-brandGreen">.</span>
          </h2>
          <p className="mt-2  text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="flex h-full w-full ">
                <img
                  src={service?.imageUrl?.src}
                  alt=""
                  className="h-[200px] w-auto"
                />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-4 font-display text-xl font-medium  leading-6 text-gray-900 ">
                    <a href={service.href}>
                      <span className="absolute inset-0 " />
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-base leading-6 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
