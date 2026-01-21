/** @format */

"use client";

import Image from "next/image";
import SiteButton from "@/components/shared/SiteButton";
import { useEffect, useState } from "react";

const workflowData = [
  {
    id: 1,
    title: "Upload your footage",
    desc: "Share your footage and any relevant media assets via the upload portal",
    img: "/images/home-page/workflow-3.png",
  },
  {
    id: 2,
    title: "Track progress",
    desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    img: "/images/home-page/workflow-2.png",
  },
  {
    id: 3,
    title: "Experience success",
    desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    img: "/images/home-page/workflow-3.png",
  },
];

const WorkflowSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className='w-full relative overflow-hidden -mt-20 md:-my-12'>
      {/* Background Image */}
      <div className='absolute top-24 md:top-0 left-0 right-0 bottom-0 w-full h-full z-0'>
        <Image
          src='/homepage/workflowbg.png'
          alt='workflow background'
          fill
          className='w-full h-full'
          style={{
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: "top",
          }}
          sizes='100vw'
          priority
        />
      </div>

      {/* Content */}
      <div className='container flex flex-col items-center gap-10 relative lg:mb-[50px] z-10 pt-6 md:pt-10 pb-10 lg:pb-0'>
        <h1 className='font-semibold text-[34px] sm:text-[42px] md:text-[54px] -tracking-[0.04em] text-center pt-18'>
          A Simple Powerful Workflow
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch lg:-mb-[75px]'>
          {workflowData.map((item) => (
            <div
              key={item.id}
              className='p-2.5 flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] rounded-xl w-full h-full'>
              <div className='relative w-full h-[220px] sm:h-[241px]'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-cover rounded-md'
                />
              </div>

              <div className='flex flex-col gap-1.5 px-2.5'>
                <h2 className='font-semibold text-2xl sm:text-3xl -tracking-[0.04em] capitalize'>
                  {item.title}
                </h2>
                <p className='text-base leading-[150%] text-black/70'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DualShowcase Section */}
        <div className='mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col justify-between gap-16 lg:gap-28 relative z-10 mt-10 lg:mt-[284px] pb-10 lg:pb-0'>
          <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-24 max-w-full'>
            <div className='w-full lg:w-1/2 rounded-2xl'>
              <div className='relative w-full aspect-4/3 lg:h-full'>
                <Image
                  src='/images/home-page/workflow-3.png'
                  alt='showcase image big'
                  fill
                  className='object-cover rounded-2xl'
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] border border-[rgba(255,255,255,0.33)] rounded-2xl'>
                  <Image
                    src='/images/home-page/workflow-3.png'
                    alt='showcase image big'
                    fill
                    className='object-cover rounded-2xl'
                  />
                </div>
              </div>
            </div>

            <div className='w-full lg:w-1/2 flex flex-col gap-6'>
              <h1 className='font-semibold text-[36px] lg:text-[54px] -tracking-[0.04em] text-black max-w-xl'>
                Duis convallis elit blandit turpis
              </h1>
              <p className='font-normal text-lg leading-[133%] text-[rgba(0,0,0,0.7)] max-w-lg'>
                Tellus fermentum laoreet dignissim risus scelerisque pretium
                ullamcorper pretium. Sapien ut tellus ut hendrerit mauris.
                Varius dui sed vestibulum quis tellus egestas dolor eget magna.
                Dui imperdiet interdum parturient vitae. Nunc gravida lobortis
                ut ut in nisl facilisis amet. Aenean feugiat ultrices mauris
                gravida iaculis. Amet sem.
              </p>

              <div className='w-full lg:w-fit'>
                <SiteButton className='bg-[#B6C7F5]/15 hover:bg-[#B6C7F5]/15 shadow-lg w-full'>
                  Start for Free
                </SiteButton>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-24 max-w-full'>
            <div className='w-full lg:w-1/2 rounded-2xl'>
              <div className='relative w-full aspect-4/3 lg:h-full'>
                <Image
                  src='/images/home-page/workflow-2.png'
                  alt='showcase image big'
                  fill
                  className='object-cover rounded-2xl'
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] border border-[rgba(255,255,255,0.33)] rounded-2xl'>
                  <Image
                    src='/images/home-page/workflow-2.png'
                    alt='showcase image big'
                    fill
                    className='object-cover rounded-2xl'
                  />
                </div>
              </div>
            </div>

            <div className='w-full lg:w-1/2 flex flex-col gap-6'>
              <h1 className='font-semibold text-[36px] lg:text-[54px] -tracking-[0.04em] text-black max-w-xl'>
                Duis convallis elit blandit turpis
              </h1>
              <p className='font-normal text-lg leading-[133%] text-[rgba(0,0,0,0.7)] max-w-lg'>
                Tellus fermentum laoreet dignissim risus scelerisque pretium
                ullamcorper pretium. Sapien ut tellus ut hendrerit mauris.
                Varius dui sed vestibulum quis tellus egestas dolor eget magna.
                Dui imperdiet interdum parturient vitae. Nunc gravida lobortis
                ut ut in nisl facilisis amet. Aenean feugiat ultrices mauris
                gravida iaculis. Amet sem.
              </p>

              <div className='w-full lg:w-fit'>
                <SiteButton className='w-full bg-[#B6C7F5]/15 hover:bg-[#B6C7F5]/15 shadow-lg'>
                  Start for Free
                </SiteButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
