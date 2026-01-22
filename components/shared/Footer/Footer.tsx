/** @format */

import { SquarePlay } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { FaXTwitter } from "react-icons/fa6";

const footerMenu = [
  {
    title: "SITE MAP",
    links: [
      { label: "Product", to: "/product" },
      { label: "Pricing", to: "/pricing" },
      { label: "Changelog", to: "/changelog" },
      { label: "Sign in", to: "/signin" },
    ],
  },
  {
    title: "MADE BY US",
    links: [
      { label: "Courses", to: "/courses" },
      { label: "UI Templates", to: "/ui-templates" },
      { label: "Icons", to: "/icons" },
      { label: "Mockups", to: "/mockups" },
    ],
  },
  {
    title: "TOOLS WE USE",
    links: [
      { label: "Figma", to: "#" },
      { label: "Framer", to: "#" },
      { label: "Spline", to: "#" },
      { label: "Screen Studio", to: "#" },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className='w-full bg-gradient-to-b from-white via-blue-50/40 to-white pt-20 pb-10'>
      <div className='container mx-auto px-4 xl:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14'>
          {/* Left Brand / Social */}
          <div className='flex flex-col items-center sm:items-start'>
            <div className='flex gap-4 mb-6'>
              <div className='h-8 w-8 rounded bg-white/40 backdrop-blur flex items-center justify-center'>
                <FaXTwitter className='text-lg' />
              </div>
              <div className='h-8 w-8 rounded bg-white/40 backdrop-blur flex items-center justify-center'>
                <SquarePlay size={18} />
              </div>
            </div>

            <p className='text-sm text-black/70'>
              © 2025.{" "}
              <Link href='#' className='hover:underline'>
                PRIVACY
              </Link>{" "}
              ·{" "}
              <Link href='#' className='hover:underline'>
                TERMS
              </Link>
            </p>
          </div>

          {/* Footer Menus */}
          {footerMenu.map((menu, i) => (
            <div key={i} className='text-center sm:text-left z-0'>
              <h4 className='mb-4 text-sm font-semibold tracking-widest text-black/60'>
                {menu.title}
              </h4>

              <ul className='space-y-3'>
                {menu.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.to}
                      className='text-sm text-black/80 hover:text-black transition'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
