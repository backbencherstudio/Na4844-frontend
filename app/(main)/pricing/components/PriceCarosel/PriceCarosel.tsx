/** @format */

"use client";

import PriceCard, { FeatureType } from "./PriceCard";

import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import ComparePlans from "../Editing/ComparePlans/ComparePlans";
import Image from "next/image";

interface PriceCaroselProps {
  discountMultiplier?: number;
}

const priceData: {
  id: number;
  title: string;
  price: number;
  glow: boolean;
  isPopular?: boolean; // ✅ FIX
  packageType: string;
  monthlypakage: string;
  desc: string;
  features: { text: string; type: FeatureType }[];
}[] = [
  {
    id: 1,
    title: "CORE",
    price: 409,
    desc: "$65 Per video",
    packageType: "MONTHLY",
    monthlypakage: "$629 Monthly",
    glow: false,
    features: [
      { text: "Parturient sed nunc neque", type: "minus" },
      { text: "Vel enim ultrices et ornare", type: "minus" },
      { text: "Aenean cursus nec amet", type: "minus" },
      { text: "Adipiscing accumsan ut", type: "minus" },
      { text: "Parturient imperdiet id urna", type: "minus" },
      { text: "Mollis porta bibendum", type: "minus" },
      { text: "Vel nec dapibus sem feugiat", type: "check" },
      { text: "Elementum pretium sed", type: "check" },
      { text: "Ridiculus urna habitasse", type: "check" },
    ],
  },
  {
    id: 2,
    title: "GROWTH",
    price: 582,
    desc: "Per video",
    packageType: "MONTHLY",
    monthlypakage: "$629 Monthly",

    glow: true,
    isPopular: true, // ✅ ONLY HERE
    features: [
      { text: "Ipsum eu mauris in ut massa", type: "check" },
      { text: "At id vel sit aliquet venenatis", type: "check" },
      { text: "Non at sit faucibus sed", type: "check" },
      { text: "Aliquet amet donec pulvinar", type: "check" },
      { text: "Justo et in interdum a nulla", type: "check" },
      { text: "Sit molestie libero in dui", type: "check" },
      { text: "Ultricies gravida tempus orci", type: "check" },
      { text: "Eu eget cras nunc facilisis", type: "check" },
      { text: "Gravida auctor sed donec", type: "check" },
    ],
  },
  {
    id: 3,
    title: "PLUS",
    price: 820,
    desc: "Per video",
    packageType: "MONTHLY",
    monthlypakage: "$629 Monthly",

    glow: false,
 
    features: [
      { text: "Morbi diam eros scelerisque", type: "check" },
      { text: "Urna facilisis mattis mi nulla", type: "check" },
      { text: "Volutpat odio nunc non vel", type: "check" },
      { text: "Lorem at in aliquam tellus", type: "check" },
      { text: "Molestie a vel in sed enim", type: "check" },
      { text: "Interdum lectus lorem ipsum", type: "check" },
      { text: "Nunc quis aliquet ornare", type: "check" },
      { text: "Ut bibendum mauris nisl", type: "check" },
      { text: "Dapibus at eget diam vitae", type: "check" },
    ],
  },
];

const PriceCarosel = ({ discountMultiplier = 1 }: PriceCaroselProps) => {
  const discountedPriceData = priceData.map((card) => ({
    ...card,
    price: Math.round(card.price / discountMultiplier),
  }));

  return (
    <div className='relative py-0 container '>
      <div className='w-full'>
        <div className='w-full'>
          <div className='mx-auto w-full px-2.5 md:px-0 '>
            <div className=''>
              {/* <Swiper
                onSwiper={(swiper) => (sliderRef.current = swiper)}
                modules={[FreeMode]}
                freeMode={true}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                    spaceBetween: 10,
                  },
                }}
                centeredSlides={true}
                className='w-full py-8'>
                {discountedPriceData.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div
                      ref={(el) => {
                        cardRefs.current[i] = el;
                      }}
                      className='flex justify-center'>
                      <PriceCard {...card} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>

            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 mb-20'>
              {discountedPriceData.map((card, i) => (
                <PriceCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <div className='bg-gradient-to-b from-[#e4e8f5] to-[#fdffff] h-10 block lg:hidden'></div> */}
      </div>
    </div>
  );
};

export default PriceCarosel;
