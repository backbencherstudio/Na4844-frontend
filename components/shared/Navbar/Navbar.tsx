/** @format */
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import SiteButton from "../SiteButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <div className='fixed top-0 left-0 z-30 w-full px-6 md:px-10 lg:px-20.5 py-16 text-white'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            {" "}
            <p className='text-xl font-medium'>Flow Edit</p>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-12 text-base font-medium text-[#fff]'>
            <Link href='/'>
              <p>Home</p>
            </Link>
            <Link href='/pricing'>
              <p>Pricing</p>
            </Link>
            <Link href='/portfolio'>
              <p>Portfolio</p>
            </Link>
            <div className='w-full sm:w-fit shadow-2xl'>
              <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
                Start for Free
              </SiteButton>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setOpen(true)} className='lg:hidden'>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      {open && (
        <div
          className='fixed inset-0 z-40 bg-blue-400 text-white'
          style={{
            backgroundImage: "url(/images/MobileaMenu.png)",
            backgroundPosition: "contain",
            backgroundSize: "cover",
          }}>
          {/* Top bar */}
          <div className='flex items-center justify-between px-6 py-6'>
            <p className='text-xl font-semibold'>Flow Edit</p>
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className='flex h-full flex-col items-center justify-center gap-10 text-2xl  px-12.5'>
            <p onClick={() => setOpen(false)}>Home</p>
            <hr className='w-full' />
            <p onClick={() => setOpen(false)}>Pricing</p>
            <hr className='w-full' />

            <p onClick={() => setOpen(false)}>Portfolio</p>
            <hr className='w-full' />

            <button className='mt-6 rounded-full bg-white px-10 py-3 text-black'>
              Start for Free
            </button>
          </div>
        </div>
      )}
    </>
  );
}
