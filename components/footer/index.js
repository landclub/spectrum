import React from 'react';

export default function Footer() {
  return (
    <footer className="container py-6 pb-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-1/1 md:w-6/12 text-center md:text-left">
          <span>Crafted by LandClub 2020</span>
        </div>
        <div className="w-1/1 md:w-6/12 text-center md:text-right">
          <a href="#" className="text-md text-gray-700 mr-4">
            Twitter
          </a>
          <a href="#" className="text-md text-gray-700 mr-4">
            Facebook
          </a>
          <a href="#" className="text-md text-gray-700 mr-4">
            About
          </a>
          <a href="#" className="text-md text-gray-700">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
