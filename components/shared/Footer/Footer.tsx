/** @format */

import { SquarePlay } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { FaXTwitter } from "react-icons/fa6";
// import MobileFooter from "./MobileFooter";
// import Logo from "../Logo";

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
      { label: "Figma", to: "https://figma.com" },
      { label: "Framer", to: "https://framer.com" },
      { label: "Spline", to: "https://spline.design" },
      { label: "Screen Studio", to: "https://screen.studio" },
    ],
  },

  {
    title: "FOLLOW US",
    mobileOnly: true,

    links: [
      { label: "Twitter", to: "https://twitter.com" },
      { label: "YouTube", to: "https://youtube.com" },
    ],
  },
];

const Footer: FC = () => {
  return (
    <div className='bg-[]'>
      {/* <div className='h-20 hidden 2xl:block bg-gradient-to-b from-[#f0f3fa] to-[#ffffff]'></div>   */}

      <div className='w-full relative z-20'>
        <div className='container '>
          <footer className=' w-full py-0 px-4 xl:px-0'>
            <div>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left'>
                <div className='flex flex-col items-center sm:items-start'>
                  {/* <Logo className="text-xl font-semibold mb-4" /> */}

                  <div className='flex gap-4 mb-6'>
                    <div className='h-8 w-8 rounded bg-white/30 backdrop-blur-sm flex items-center justify-center'>
                      <FaXTwitter className='text-lg' />
                    </div>

                    <div className='h-8 w-8 rounded bg-white/30 backdrop-blur-sm flex items-center justify-center'>
                      <SquarePlay />
                    </div>
                  </div>

                  <p className=' text-sm text-black/70'>
                    © 2025.{" "}
                    <Link href='#' className='hover:underline cursor-pointer'>
                      PRIVACY
                    </Link>
                    .{" "}
                    <Link href='#' className='hover:underline cursor-pointer'>
                      TERMS
                    </Link>
                  </p>
                </div>

                {footerMenu
                  .filter((menu) => !menu.mobileOnly)
                  .map((menu, idx) => (
                    <div
                      key={idx}
                      className=' md:flex flex-col items-center sm:items-start'>
                      <h3 className='text-sm font-bold text-black mb-6'>
                        {menu.title}
                      </h3>

                      <ul className='space-y-3 w-full'>
                        {menu.links.map((link, linkIdx) => (
                          <li key={linkIdx} className='w-full'>
                            <Link
                              href={link.to}
                              className='relative text-black/90 text-sm font-medium px-3 py-1.5 block w-2/3 hover:border-l-2 hover:border-l-[#2670e9] border-transparent border-l-2 before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-[#2670e9] before:blur-[10px] before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:opacity-100 after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(38,112,233,0.3)_0%,rgba(38,112,233,0.15)_60%,rgba(38,112,233,0)_100%)] after:opacity-0 after:transition-all after:duration-500 after:ease-out hover:after:opacity-100 cursor-pointer'>
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

          {/* <MobileFooter footerMenu={footerMenu} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
