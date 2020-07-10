import React from 'react';
import Button from '../button';

export default function Navigation() {
  return (
    <div className="container py-8">
      <div className="flex justify-between">
        <a href="#">Spectrum</a>
        <nav>
          <Button variant="ghost" is="a" href="#">
            Get started
          </Button>
        </nav>
      </div>
    </div>
  );
}
