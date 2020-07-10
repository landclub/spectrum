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

const Plan = ({plan}) => (
  <div className="w-full md:w-1/3 p-8 py-8 md:mx-2 mb-8 md:mb-0 rounded text-black border border-gray-300">
    <div className="text-center">
      <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
      <div className="relative flex justify-center content-start items-start">
        <span className="font-normal text-base text-2xl">$</span>
        <span className="font-semibold text-6xl leading-none">
          {plan.price}
        </span>
      </div>
    </div>
    <div className=" md:px-6 mt-8">
      <ul className="usps font-normal text-sm md:text-base">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
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
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-16 items-start justify-center">
      {PLANS.map((plan) => (
        <Plan plan={plan} key={plan.name} />
      ))}
    </div>
  );
}
