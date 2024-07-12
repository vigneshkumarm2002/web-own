'use client'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: 'How Can I Get Started with Your Services?',
    answer:
      "Getting started is easy! Simply contact us through our website or give us a call. We'll schedule a consultation to discuss your project, understand your needs, and provide a tailored proposal. Let's bring your ideas to life!",
  },
  {
    question: 'How Can a Well-Designed Website Benefit My Business?',
    answer:
      'A well-designed website enhances your online presence, improves user experience, and helps build credibility. It can attract more visitors, convert leads into customers, and ultimately drive business growth.',
  },
  {
    question: 'How Long Does It Take to Develop a Website or App?',
    answer:
      "The timeline varies based on the project's complexity and requirements. Generally, a website can take 4-6 weeks, while app development might take 8-12 weeks. We'll provide a detailed timeline after discussing your specific needs.",
  },
  {
    question: 'Do You Offer SEO Services?',
    answer:
      "We offer basic SEO services to help improve your website's visibility in search engine results. While we don't handle comprehensive SEO, we implement essential practices to boost your online presence.",
  },
  {
    question: 'Can You Help with Website and App Maintenance?',
    answer:
      'Absolutely! We offer ongoing maintenance services to ensure your website and app remain updated, secure, and running smoothly. Our support packages are designed to keep your digital presence at its best.',
  },

  {
    question: 'What Technologies Do You Use for Development?',
    answer:
      'We utilize the latest technologies and frameworks to build robust, scalable, and high-performance websites and apps. Our tech stack includes HTML5, CSS3, JavaScript, React, NextJS , React Native, NodeJS, ExpressJS, Flutter, and more.',
  },
]

export function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pb-16 sm:pt-36 lg:px-8 ">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="font-display text-3xl font-medium  tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ChevronDownIcon
                              className="h-6 w-6 stroke-brandGreen stroke-1 text-brandGreen"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronRightIcon
                              className="h-6 w-6 stroke-brandGreen stroke-1 text-brandGreen"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
