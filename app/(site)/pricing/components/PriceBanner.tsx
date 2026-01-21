/** @format */

"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import ToggleSwitch from "@/components/shared/ToggleSwitch";
import { useState } from "react";

const PriceBanner = ({
  onToggleChange,
}: {
  onToggleChange: (value: boolean) => void;
}) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = (value: boolean) => {
    setIsToggled(value);
    onToggleChange(value);
  };

  return (
    <div className='relative overflow-hidden mt-0 md:-mt-2 mb-[43px] lg:mb-[77px]'>
      <div className='w-full h-full'>
        <div className='w-full'>
          <div className='mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col gap-5 items-center justify-center h-full mt-[100px] lg:mt-[185px]'>
            <div className='w-fit'>
              <PageHeaderButton text='Pricing' />
            </div>
            <h1 className='font-semibold text-[44px] leading-[118%] lg:text-[73px] -tracking-[0.04em] text-white text-center lg:text-left'>
              Stop Editing. <br className='block lg:hidden' /> Start growing
            </h1>

            <p className='text-base lg:text-xl leading-[150%] text-white max-w-92 lg:max-w-2xl text-center'>
              As we grow our library of UI components, we’re introducing a
              limited-time pricing that’s not only 50% off but also
              significantly cheaper than what’s on the market
            </p>

            <div className='flex items-center gap-3.5'>
              <p className='text-lg lg:text-xl leading-[150%] text-white'>
                Unlock
              </p>

              <ToggleSwitch checked={isToggled} onChange={handleToggle} />
              <p className='text-lg lg:text-xl leading-[150%] text-white'>
                35% savings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBanner;
