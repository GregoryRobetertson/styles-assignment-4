'use client';
import React from 'react';

export default function Navbar() {
  return (
    <div className='bg-gray-800'>
      <nav className='container mx-auto flex items-center justify-between py-4'>
        <div className='text-white'>
          <a href='#' className='text-xl font-bold'>
            Food
          </a>
        </div>
        <ul className='flex space-x-4'>
          <li>
            <a href='#' className='text-white hover:text-gray-300'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='text-white hover:text-gray-300'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='text-white hover:text-gray-300'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
