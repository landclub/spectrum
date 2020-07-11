import Head from 'next/head';
import {Fade, Flip} from 'react-reveal';

import Layout from '../components/layout';
import PricingTable from '../components/pricing-table';
import Button from '../components/button';

const FAQS = [
  {
    question: 'Neque porro quisquam est qui dolorem ipsum?',
    answer:
      'Nulla facilisi. Donec blandit id odio a posuere. Morbi blandit risus a nisl semper commodo. Mauris condimentum turpis vel volutpat vestibulum. Nulla tempor ut ligula eu fermentum.',
  },
  {
    question: 'Suspendisse tincidunt velit eros, et ultricies?',
    answer:
      'Nulla facilisi. Donec blandit id odio a posuere. Morbi blandit risus a nisl semper commodo. Mauris condimentum turpis vel volutpat vestibulum. Nulla tempor ut ligula eu fermentum.',
  },
  {
    question: 'Phasellus arcu nisi, placerat et nibh non, blandit luctus nisi?',
    answer:
      'Nulla facilisi. Donec blandit id odio a posuere. Morbi blandit risus a nisl semper commodo. Mauris condimentum turpis vel volutpat vestibulum. Nulla tempor ut ligula eu fermentum.',
  },
  {
    question: 'Morbi blandit risus a nisl semper commodo?',
    answer:
      'Nulla facilisi. Donec blandit id odio a posuere. Morbi blandit risus a nisl semper commodo. Mauris condimentum turpis vel volutpat vestibulum. Nulla tempor ut ligula eu fermentum.',
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="py-6 md:pt-19 md:pb-12">
        <div className="container">
          <div className="flex px-6 justify-center text-left md:text-center">
            <div className="w-12/12 lg:w-8/12">
              <Flip bottom>
                <span className="uppercase font-bold tracking-widest text-sm text-indigo-600">
                  Spectrum
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
                  Landing pages. Made simple.
                </h1>
                <p className="text-l lg:text-xl text-gray-700 mb-4 mt-2">
                  A beautifully designed next.js template for your next project
                </p>
                <Button className="mt-5">Get started →</Button>
              </Flip>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container">
          <div className="flex py-14 justify-center">
            <div className="w-11/12">
              <div className="screenshot rounded-l-full ml-18 py-8">
                <Fade right>
                  <img src="/static/images/preview.png" className="-ml-18" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="flex justify-center text-center mb-5">
            <h2 className="">Trusted by these great companies</h2>
          </div>
          <div className="flex justify-center">
            <div className="w-10/12 flex flex-row items-center flex-wrap justify-center md:justify-between">
              <img
                src="/static/images/logo-airfrance.svg"
                width="120"
                alt="Aifrance"
                className="mx-4 mb-4 md:mx-0 md:mb-0"
              />
              <img
                src="/static/images/logo-braintree.svg"
                width="120"
                alt="Braintree"
                className="mx-4 mb-4 md:mx-0 md:mb-0"
              />
              <img
                src="/static/images/logo-converse.svg"
                width="120"
                alt="Converse"
                className="mx-4 mb-4 md:mx-0 md:mb-0"
              />
              <img
                src="/static/images/logo-google.svg"
                width="120"
                alt="Google"
                className="mx-4 mb-4 md:mx-0 md:mb-0"
              />
              <img
                src="/static/images/logo-vimeo.svg"
                width="120"
                alt="Vimeo"
                className="mx-4 mb-4 md:mx-0 md:mb-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 lg:py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center content-center justify-between mb-8 md:mb-24 mx-auto px-6 md:px-0">
            <div className="w-full lg:w-8/12 -ml-14">
              <div className="rounded-r-full feature-screenshot feature-screenshot--one p-10">
                <Fade top>
                  <img
                    src="/static/images/preview.png"
                    className="shadow-2xl"
                  />
                </Fade>
              </div>
            </div>
            <div className="w-full mt-6 lg:mt-0 lg:w-4/12 px-2 md:px-5">
              <h2 className="font-extrabold text-2xl text-black md:leading-tight md:text-3xl mb-4">
                A really great feature shoutout can go here
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4 font-normal">
                Pellentesque id sapien eu nulla rhoncus sagittis et a ex. Donec
                sollicitudin convallis arcu nec feugiat. Curabitur pretium nisl
                id tellus consequat, tristique bibendum elit mattis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 lg:py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse items-center content-center justify-between px-6 md:px-0 mb-8 md:mb-24">
            <div className="w-full lg:w-8/12 -mr-14">
              <div className="rounded-l-full feature-screenshot feature-screenshot--two p-10">
                <Fade top>
                  <img
                    src="/static/images/preview.png"
                    className="shadow-2xl"
                  />
                </Fade>
              </div>
            </div>
            <div className="w-full mt-6 lg:mt-0 lg:w-4/12 px-2 md:px-0 ">
              <h2 className="font-extrabold text-2xl text-black md:leading-tight md:text-3xl mb-4">
                A really great feature shoutout can go here
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4 font-normal">
                Pellentesque id sapien eu nulla rhoncus sagittis et a ex. Donec
                sollicitudin convallis arcu nec feugiat. Curabitur pretium nisl
                id tellus consequat, tristique bibendum elit mattis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="flex justify-center md:text-center px-8">
            <div className="w-12/12">
              <h2 className="font-extrabold text-3xl md:text-5xl text-black md:text-5xl">
                Pricing
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4 font-normal">
                Pellentesque id sapien eu nulla rhoncus sagittis et a ex.
              </p>
            </div>
          </div>
        </div>
        <PricingTable />
      </section>

      <section className="py-2 lg:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row px-8">
            <div className="w-1/1 md:w-4/12">
              <h2 className="text-5xl font-extrabold">FAQ</h2>
            </div>
            <div className="w-1/1 md:w-8/12 md:px-6 mt-5 md:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {FAQS.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-6 md:my-13">
        <div className="container bg-gray-100 py-15 px-5">
          <div className="flex justify-center text-center">
            <div className="w-1/1 md:w-6/12">
              <h2 className="text-4xl font-extrabold">
                Get started with Spectrum today.
              </h2>
              <p className="mb-5 mt-3 text-lg">
                Spectrum is a simple, clean, modern landing page for your next
                project
              </p>
              <Button variant="primary" size="medium">
                Get started →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
