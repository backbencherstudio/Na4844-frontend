/** @format */

"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import SiteButton from "@/components/shared/SiteButton";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import SplitType from "split-type";
import Image from "next/image";

const Banner = () => {
  const pathname = usePathname();

  useEffect(() => {
    const split = new SplitType(".hero-title", {
      types: "words",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(split.words, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        stagger: 0.05,
      })
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.9 }, "-=0.4")
        .from(
          ".hero-button",
          { opacity: 0, scale: 0.9, duration: 0.8 },
          "-=0.3",
        )
        .from(
          ".hero-bottom-text",
          { opacity: 0, y: 20, duration: 0.8 },
          "-=0.4",
        );
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [pathname]);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(".floating-laptop", {
      x: () => gsap.utils.random(-15, 15),
      y: () => gsap.utils.random(-20, 20),
      rotation: () => gsap.utils.random(-3, 3),
      duration: 5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className='w-full lg:h-[1440px] z-10 bg-linear-to-b from-[#4069E4] to-[rgba(255,255,255,0)] relative overflow-hidden'>
      {/* Top Banner Image */}
      <div className='absolute top-0 left-0 right-0 w-full z-10 pointer-events-none'>
        <Image
          src='/banner/bannertop.svg'
          alt='banner top decoration'
          width={1920}
          height={200}
          className='w-full h-auto object-contain'
          priority
        />
      </div>

      {/* Bottom Banner Image Holla */}
      <div className='absolute bottom-24 md:bottom-[216px] left-[400px] md:left-0 right-0 w-full z-10 pointer-events-none flex justify-center'>
        <Image
          src='/banner/bannerbottom.svg'
          alt='banner bottom decoration'
          width={1920}
          height={200}
          className='w-auto md:w-full max-w-[1200px] md:h-auto  object-contain'
          style={{ objectPosition: "bottom" }}
        />
      </div>

      <div className='w-full relative z-20 mt-[220px] md:mt-[180px]'>
        <div className='mx-auto w-full px-2.5 md:px-0 max-w-[1216px]'>
          <div className='w-full '>
            <div className='flex flex-col items-center justify-center text-center gap-11 sm:gap-6 md:gap-7 lg:gap[25px] w-full'>
              <PageHeaderButton
                text='Loved by 4.5 out of 5 Creators'
                icons={[
                  <IoMdStar key='1' />,
                  <IoMdStar key='2' />,
                  <IoMdStar key='3' />,
                  <IoMdStar key='4' />,
                  <IoMdStarHalf key='5' />,
                ]}
              />

              <div className='flex flex-col gap-8 z-40 items-center'>
                <h1 className='hero-title font-semibold text-white md:max-w-5xl text-[44px] sm:text-4xl md:text-5xl lg:text-7xl leading-[120%] tracking-[-4%]'>
                  Post Better Videos—Faster. Skip the Editing.
                </h1>

                <p className='hero-subtitle text-white leading-[150%] max-w-[20rem] sm:max-w-lg md:max-w-3xl lg:max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl'>
                  We&apos;ll edit anything, fast-optimized for any platform.
                  Just drop your footage, and we&apos;ll turn it into content
                  that gets views and drives growth—with zero effort on your
                  part.
                </p>

                <div className='w-full sm:w-fit shadow-2xl'>
                  <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
                    Start for Free
                  </SiteButton>
                </div>

                <p className='hero-bottom-text text-white max-w-60 sm:max-w-sm md:max-w-md text-xs sm:text-sm md:text-base leading-[150%]'>
                  14-Day free access to professional <br /> video editing team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className=' z-10 relative  w-full'>
          <div className='w-full'>
            <div className='container flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20'>
              <div className='flex flex-col gap-4 text-center lg:text-left'>
                <h1 className='font-semibold text-black -tracking-[0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] whitespace-nowrap'>
                  Effortless Video
                </h1>

                <h4 className='font-semibold text-black -tracking-[0.04em] max-w-80 mx-auto lg:mx-0 text-lg sm:text-xl md:text-[24px] lg:text-[28px]'>
                  The perfect tool for your creative mind
                </h4>

                <p className='text-black leading-[150%] max-w-md sm:max-w-108 text-sm sm:text-base md:text-lg mx-auto lg:mx-0'>
                  Regular video posts equals more reach. With FlowEdit, you get
                  a steady stream of high-quality, platform-optimized videos
                  that keep your audience engaged and your brand top-of-mind.
                </p>
              </div>

              <div className='relative w-full h-[440px] md:h-[520px] block lg:hidden overflow-hidden floating-laptop'>
                <Image
                  src='/images/home-page/laptop.png'
                  alt='laptop image'
                  fill
                  className='object-cover object-center'
                />
              </div>

              <div className='hidden lg:block relative w-full max-w-[711px] h-[650px] floating-laptop'>
                <Image
                  src='/images/home-page/laptop.png'
                  alt='laptop image'
                  fill
                  className='object-contain lg:object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
