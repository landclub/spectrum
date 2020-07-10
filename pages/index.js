import Head from 'next/head';
import {motion} from 'framer-motion';

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
];

export default function Home() {
  return (
    <Layout>
      <motion.section
        className="py-12"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="container">
          <div className="flex py-14 px-6 justify-center text-left md:text-center">
            <div className="w-12/12 md:w-8/12">
              <motion.div
                variants={{
                  initial: {y: 30, opacity: 0},
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96]},
                  },
                }}
              >
                <h1 className="text-4xl md:text-5xl font-bold">
                  Landing pages. Made simple.
                </h1>
                <p className="text-xl text-gray-700">
                  A beautifully designed next.js template for your next project
                </p>
                <Button className="mt-5">Get started</Button>
              </motion.div>
            </div>
          </div>

          <div className="flex py-14 justify-center">
            <div className="w-9/12">
              <motion.div
                className="screenshot"
                variants={{
                  initial: {
                    x: 100,
                  },
                  enter: {
                    x: 0,
                    transition: {duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96]},
                  },
                }}
              >
                <img src="/static/images/preview.png" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-8">
        <div className="container">
          <div className="flex justify-center text-center mb-5">
            <h2 className="">Trusted by these great companies</h2>
          </div>
          <div className="flex justify-center">
            <div className="w-10/12 flex justify-between">
              <img
                src="/static/images/logo-airfrance.svg"
                width="120"
                alt="Aifrance"
              />
              <img
                src="/static/images/logo-braintree.svg"
                width="120"
                alt="Braintree"
              />
              <img
                src="/static/images/logo-converse.svg"
                width="120"
                alt="Converse"
              />
              <img
                src="/static/images/logo-google.svg"
                width="120"
                alt="Google"
              />
              <img
                src="/static/images/logo-vimeo.svg"
                width="120"
                alt="Vimeo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div class="flex flex-col lg:flex-row items-center content-center justify-between mb-8 md:mb-24 my-16 max-w-6xl mx-auto px-4 xl:px-0">
            <div class="w-full lg:w-6/12">
              <div class="rounded border border-gray-800">
                <img src="/static/images/preview.png" />
              </div>
            </div>
            <div class="w-full lg:w-6/12 lg:ml-16 px-2 md:px-0 ">
              <h2 class="font-semibold text-2xl text-black md:leading-tight md:text-4xl mb-4">
                A really great feature shoutout can go here
              </h2>{' '}
              <p class="text-gray-800 text-base md:text-lg mb-4 font-normal">
                Pellentesque id sapien eu nulla rhoncus sagittis et a ex. Donec
                sollicitudin convallis arcu nec feugiat. Curabitur pretium nisl
                id tellus consequat, tristique bibendum elit mattis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div class="flex flex-col lg:flex-row-reverse items-center content-center justify-between mb-8 md:mb-24 my-16 max-w-6xl mx-auto px-4 xl:px-0">
            <div class="w-full lg:w-6/12">
              <div class="rounded border border-gray-800">
                <img src="/static/images/preview.png" />
              </div>
            </div>
            <div class="w-full lg:w-6/12 lg:mr-16 px-2 md:px-0 ">
              <h2 class="font-semibold text-2xl text-black md:leading-tight md:text-4xl mb-4">
                A really great feature shoutout can go here
              </h2>{' '}
              <p class="text-gray-800 text-base md:text-lg mb-4 font-normal">
                Pellentesque id sapien eu nulla rhoncus sagittis et a ex. Donec
                sollicitudin convallis arcu nec feugiat. Curabitur pretium nisl
                id tellus consequat, tristique bibendum elit mattis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <PricingTable />
      </section>

      <section className="py-14 my-13">
        <div className="container">
          <div className="flex">
            <div className="w-4/12">
              <h2 className="text-4xl font-bold">FAQ</h2>
            </div>
            <div className="w-8/12 px-6">
              <div className="grid grid-cols-2 gap-8">
                {FAQS.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-bold">{faq.question}</h3>
                    <p className>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
