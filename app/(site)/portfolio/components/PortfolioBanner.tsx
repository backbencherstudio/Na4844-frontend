/** @format */

"use client";

import SiteButton from "@/components/shared/SiteButton";
import { IProject } from "@/types/portfolio";
import Image from "next/image";
import { useState, useEffect } from "react";

const PortfolioBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/homepage/projectsbg.svg";
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const allProjects: IProject[] = [
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Share your footage and any relevant media assets via the upload portal",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Share your footage and any relevant media assets via the upload portal",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Share your footage and any relevant media assets via the upload portal",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    },
  ];

  return (
    <div className='relative w-full'>
      <div className='w-full relative'>
        {/* Background Image */}
        <Image
          src='/homepage/projectsbg.svg'
          alt='projects background'
          fill
          priority
          fetchPriority='high'
          className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 pointer-events-none'
          sizes='100vw'
          style={{
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: "top left",
          }}
        />

        {/* Background Color - shows until image loads */}
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-linear-to-b from-[#4069E4] to-[rgba(255,255,255,0)] z-0 transition-opacity duration-300 ${
            imageLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className='relative z-10 mx-auto w-full px-2.5 md:px-0 max-w-[1216px]'>
          <div className='flex flex-col items-center justify-center gap-6 pt-20 lg:pt-[190px] '>
            <h1 className='font-semibold text-[44px] lg:text-[73px] leading-[118%] -tracking-[0.04em] text-white text-center lg:text-left'>
              Check out our <br className='block lg:hidden' /> portfolio
            </h1>
            <p className='font-normal text-lg lg:text-xl leading-[150%] text-white max-w-5xl text-center'>
              Nullam egestas et in tristique faucibus. Mauris quis posuere lorem
              tincidunt phasellus auctor tortor. Sit id neque tincidunt ac nibh
              varius aliquam tincidunt. Habitant egestas donec diam scelerisque
              donec aenean odio mattis. Lacus tempus est congue ultricies in
              vestibulum aenean. Enim aliquet nunc hac eget.
            </p>
            <div className='w-fit'>
              <SiteButton>View Projects</SiteButton>
            </div>
          </div>

          <div className='relative pt-15 lg:pt-[128px] pb-[75px] lg:pb-32'>
            <div className='w-full'>
              <div className='w-full'>
                <div className='mx-auto w-full px-2.5 md:px-0 max-w-[1216px]'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {allProjects?.map((project, i) => (
                      <div
                        key={i}
                        className='p-2.5 flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] rounded-xl w-full min-h-[400px]'>
                        <div className='relative w-full h-[220px] sm:h-[241px]'>
                          <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            className='object-cover rounded-md'
                            priority={i < 3}
                          />
                        </div>

                        <div className='flex flex-col gap-1.5 px-2.5'>
                          <h2 className='font-semibold text-2xl sm:text-3xl -tracking-[0.04em] capitalize'>
                            {project.title}
                          </h2>
                          <p className='text-base leading-[150%] text-black/70'>
                            {project.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
