import React from 'react';

import Button from '../button';

const PLANS = [
  {
    name: 'Starter',
    price: 8,
    features: [
      'High quality templates',
      'Hand-written HTML/CSS',
      'Support when you need it',
      'Another great product feature',
    ],
  },
  {
    name: 'Pro',
    price: 14,
    isMostPopular: true,
    features: [
      'High quality templates',
      'Hand-written HTML/CSS',
      'Support when you need it',
      'Another great product feature',
    ],
  },
  {
    name: 'Premium',
    price: 29,
    features: [
      'High quality templates',
      'Hand-written HTML/CSS',
      'Support when you need it',
      'Another great product feature',
    ],
  },
];

const Checkmark = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Plan = ({plan}) => (
  <div
    className={`w-full md:w-1/3 p-8 py-8 md:mx-2 mb-8 md:mb-0 rounded text-black border border-gray-300 ${
      plan.isMostPopular ? 'border-indigo-600' : ''
    }`}
  >
    <>
      <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
      <div className="relative flex content-start items-start">
        <span className="font-normal text-2xl">$</span>
        <span className="font-semibold text-5xl leading-none">
          {plan.price}
        </span>
      </div>
    </>
    <div className="md:px-6 mt-8">
      <ul className="font-normal text-sm md:text-base">
        {plan.features.map((feature) => (
          <li className="flex items-center" key={feature}>
            <Checkmark /> {feature}
          </li>
        ))}
      </ul>
      <Button variant="primary" size="small" fullWidth className="mt-5">
        Get started
      </Button>
    </div>
  </div>
);

export default function PricingTable() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row mx-auto items-start justify-center px-8 md:px-10">
        {PLANS.map((plan) => (
          <Plan plan={plan} key={plan.name} />
        ))}
      </div>
    </div>
  );
}
