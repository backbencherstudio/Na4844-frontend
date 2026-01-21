/** @format */
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <div className='fixed top-0 left-0 z-30 w-full px-6 md:px-10 lg:px-20 py-6 text-white'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            {" "}
            <p className='text-xl font-semibold'>Flow Edit</p>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-12'>
            <Link href='/'>
              <p>Home</p>
            </Link>
            <p>Pricing</p>
            <Link href='/portfolio'>
              <p>Portfolio</p>
            </Link>
            <button className='rounded-full bg-white px-6 py-2 text-black'>
              Start for Free
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setOpen(true)} className='lg:hidden'>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      {open && (
        <div className='fixed inset-0 z-40 bg-[#0B0B0B] text-white'>
          {/* Top bar */}
          <div className='flex items-center justify-between px-6 py-6'>
            <p className='text-xl font-semibold'>Flow Edit</p>
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className='flex h-full flex-col items-center justify-center gap-10 text-2xl'>
            <p onClick={() => setOpen(false)}>Home</p>
            <p onClick={() => setOpen(false)}>Pricing</p>
            <p onClick={() => setOpen(false)}>Portfolio</p>

            <button className='mt-6 rounded-full bg-white px-10 py-3 text-black'>
              Start for Free
            </button>
          </div>
        </div>
      )}
    </>
  );
}
