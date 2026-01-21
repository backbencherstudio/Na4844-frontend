/** @format */
"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import ToggleSwitch, { PlanType } from "@/components/shared/ToggleSwitch";

const PriceBanner = ({
  value,
  onToggleChange,
}: {
  value: PlanType;
  onToggleChange: (value: PlanType) => void;
}) => {
  return (
    <div className='relative overflow-hidden mt-12 lg:mt-0 mb-[43px] lg:mb-[77px]'>
      <div className='mx-auto max-w-[1216px] flex flex-col gap-5 items-center mt-[100px] lg:mt-[185px]'>
        <PageHeaderButton text='Pricing' />

        <h1 className='font-semibold text-[44px] lg:text-[73px] -tracking-[0.04em] text-white text-center'>
          Stop Editing. <br className='block lg:hidden' /> Start growing
        </h1>

        <p className='text-base lg:text-xl leading-[150%] text-white max-w-2xl text-center'>
          As we grow our library of UI components, we’re introducing a
          limited-time pricing that’s not only 50% off but also significantly
          cheaper than what’s on the market
        </p>

        <ToggleSwitch value={value} onChange={onToggleChange} />
      </div>
    </div>
  );
};

export default PriceBanner;
