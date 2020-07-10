import React from 'react';

export default function Footer() {
  return (
    <footer className="container py-6">
      <div className="flex justify-between">
        <div className="w-1/3 text-left">
          <span>Crafted by LandClub 2020</span>
        </div>
        <div className="w-1/3 text-center">
          <span>Twitter - Facebook</span>
        </div>
        <div className="w-1/3 text-right">
          <span>About - Support</span>
        </div>
      </div>
    </footer>
  );
}
