/** @format */

"use client";

import PortfolioBanner from "./components/PortfolioBanner";
import PortfolioShowcase from "./components/PortfolioShowcase";
// import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import Faq from "@/components/homePage/Faq/Faq";
import LovedByCreatorsSection from "@/components/homePage/LoveCreation/LoveCreation";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prefetch heavy assets up-front to avoid visible lazy loading on scroll
  useEffect(() => {
    const imagesToPreload = [
      "/portfolio-bg.jpg",
      "/homepage/projectsbg.svg",
      "/homepage/duisbg.svg",
      "/images/home-page/workflow-2.png",
      "/images/home-page/workflow-3.png",
    ];
    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div className='relative bg-white w-full'>
      <Head>
        <link rel='preload' as='image' href='/portfolio-bg.jpg' />
        <link rel='preload' as='image' href='/homepage/projectsbg.svg' />
        <link rel='preload' as='image' href='/homepage/duisbg.svg' />
        <link
          rel='preload'
          as='image'
          href='/images/home-page/workflow-2.png'
        />
        <link
          rel='preload'
          as='image'
          href='/images/home-page/workflow-3.png'
        />
      </Head>
      <div className='w-full relative lg:pb-20'>
        <Image
          src='/portfolio-bg.jpg'
          alt='background'
          fill
          className='object-cover object-top -z-10'
          priority
          fetchPriority='high'
        />
        <div className='flex flex-col space-y-12 lg:space-y-0'>
          {/* <Navbar /> */}
          <PortfolioBanner />
          <PortfolioShowcase />
          <LovedByCreatorsSection />
          <Faq />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
