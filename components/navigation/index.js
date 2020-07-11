import React from 'react';
import Button from '../button';

export default function Navigation() {
  return (
    <div className="container py-8 px-6">
      <div className="flex justify-between">
        <a href="#">
          <img src="/static/images/logo.svg" alt="Spectrum" width={120} />
        </a>
        <nav>
          <Button variant="ghost" is="a" href="#">
            Get started
          </Button>
        </nav>
      </div>
    </div>
  );
}
