/** @format */
"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import ToggleSwitch, { PlanType } from "@/components/shared/ToggleSwitch";
import PriceCarosel from "./PriceCarosel/PriceCarosel";

const PriceBanner = ({
  value,
  onToggleChange,
}: {
  value: PlanType;
  onToggleChange: (value: PlanType) => void;
}) => {
  const discountApplied = value === "annual" || value === "semiannual";

  const getDiscountMultiplier = (plan: PlanType) => {
    switch (plan) {
      case "monthly":
        return 1;
      case "semiannual":
        return 0.8; // 20% off
      case "annual":
        return 0.65; // 35% off
      default:
        return 1;
    }
  };

  return (
    <div
      className='relative overflow-hidden inset-0
      bg-gradient-to-b from-[#6386f1] to-[#feffff] z-0'>
      {/* Mobile BG */}
      <div
        className='absolute top-0 block lg:hidden h-screen left-0 right-0 bottom-0 z-20'
        style={{
          backgroundImage: "url('/images/smallBg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Desktop BG */}
      <div
        className='absolute top-0 hidden lg:block left-0 right-0 bottom-0 w-full z-0'
        style={{
          backgroundImage: "url('/images/back/border.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className='absolute top-0 hidden lg:block left-0 right-0 bottom-0 w-full mt-90 z-0'
        style={{
          backgroundImage: "url('/images/back/dhew.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* CONTENT */}
      <div className='container mx-auto flex flex-col gap-5 items-center mt-[100px] lg:mt-[185px] relative z-20'>
        <PageHeaderButton text='Pricing' />

        <h1 className='font-semibold text-[44px] lg:text-[73px] -tracking-[0.04em] text-white text-center'>
          Stop Editing. <br className='block lg:hidden' /> Start growing
        </h1>

        <p className='text-base lg:text-xl leading-[150%] text-white max-w-2xl text-center'>
          As we grow our library of UI components, we’re introducing a
          limited-time pricing that’s not only 50% off but also significantly
          cheaper than what’s on the market
        </p>

        <div className='pb-[77px]'>
          <ToggleSwitch value={value} onChange={onToggleChange} />
        </div>
      </div>

      <PriceCarosel discountMultiplier={getDiscountMultiplier(value)} />
    </div>
  );
};

export default PriceBanner;
