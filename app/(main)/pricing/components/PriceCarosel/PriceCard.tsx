/** @format */

"use client";

import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import DiamondIcon from "@/components/shared/DiamondCheckIcon";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

export type FeatureType = "check" | "minus";

interface Feature {
  text: string;
  type: FeatureType;
}

interface PriceCardProps {
  title: string;
  price: number;
  features: Feature[];
  glow?: boolean;
  desc?: string;
  monthlyPakage?: string;
}

const PriceCard = ({
  title,
  desc,
  price,
  monthlyPakage,
  features,
  glow = false,
}: PriceCardProps) => {
  const token = useAppSelector((state) => state.auth.token);

  // ✅ destination decide
  const redirectUrl = token ? "/subscribe" : "/singup";

  return (
    <div className='relative py-6 lg:py-12 px-4 lg:px-12 shadow-lg border border-white/25 rounded-[10px] bg-white/50 overflow-hidden flex flex-col items-center gap-8'>
      {glow && (
        <div className='absolute inset-0 pointer-events-none -top-10 z-10 opacity-40' />
      )}

      <div className='absolute inset-0 pointer-events-none -top-10 z-10 opacity-30'>
        <Image
          src='/images/price-page/card-glow.png'
          alt='card glow bg'
          fill
          className='object-cover'
        />
      </div>

      <div className='flex flex-col items-center relative z-20'>
        <h1 className='font-medium text-sm text-black/70'>{title}</h1>

        <div className='flex items-center gap-1'>
          <BsCurrencyDollar className='text-3xl text-black/70' />
          <h1 className='font-semibold text-6xl -tracking-[0.04em] text-black'>
            {price}
          </h1>
        </div>

        <h1 className='font-medium text-sm text-black/70'>{desc}</h1>
        <button>{monthlyPakage}</button>
      </div>

      <div className='h-px w-[95%] bg-black/15' />

      <ul className='flex flex-col gap-6 relative z-20'>
        {features.map((f, i) => (
          <li key={i} className='flex items-center gap-4'>
            <DiamondIcon type={f.type} />
            <p className='text-base text-black/70 leading-[154%]'>{f.text}</p>
          </li>
        ))}
      </ul>

      <div className='h-px w-[95%] bg-black/15' />

      {/* ✅ Conditional navigation */}
      <div className='w-fit shadow-xl relative z-20 rounded-lg'>
        <Link href={redirectUrl}>
          <div className='flex items-center gap-2 bg-[#3495fd] text-white py-1.5 px-4 rounded-lg cursor-pointer'>
            <span>
              {token ? "Proceed to Payment" : "Sign up to Start Trial"}
            </span>
            <GoCreditCard />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;

// /** @format */

// import Image from "next/image";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { GoCreditCard } from "react-icons/go";
// import SiteButton from "@/components/shared/SiteButton";
// import DiamondIcon from "@/components/shared/DiamondCheckIcon";
// import Link from "next/link";

// export type FeatureType = "check" | "minus";

// interface Feature {
//   text: string;
//   type: FeatureType;
// }

// interface PriceCardProps {
//   title: string;
//   price: number;
//   features: Feature[];
//   glow?: boolean;
//   desc?: string;
//   monthlyPakage?: string;
// }

// const PriceCard = ({
//   title,
//   desc,
//   price,
//   monthlyPakage,
//   features,
//   glow = false,
// }: PriceCardProps) => {
//   return (
//     <div className='relative py-6 lg:py-12 px-4 lg:px-12 shadow-lg border border-white/25 rounded-[10px] bg-white/50 overflow-hidden flex flex-col items-center gap-8'>
//       {glow && (
//         <div className='absolute inset-0 pointer-events-none -top-10 z-10 opacity-40'>
//           {/* <Image
//             src='/images/back/Wallpaper Blur.png'
//             alt='card glow bg'
//             fill
//             className='object-cover'
//           /> */}
//         </div>
//       )}

//       <div className='absolute inset-0 pointer-events-none -top-10 z-10 opacity-30'>
//         <Image
//           src='/images/price-page/card-glow.png'
//           alt='card glow bg'
//           fill
//           className='object-cover'
//         />
//       </div>
//       <div className='flex flex-col items-center relative z-20'>
//         <h1 className='font-medium text-sm text-black/70'>{title}</h1>

//         <div className='flex items-center gap-1'>
//           <BsCurrencyDollar className='text-3xl text-black/70' />
//           <h1 className='font-semibold text-6xl -tracking-[0.04em] text-black'>
//             {price}
//           </h1>
//         </div>

//         <h1 className='font-medium text-sm text-black/70'>{desc}</h1>
//         <button>{monthlyPakage}</button>
//       </div>

//       <div className='h-px w-[95%] bg-black/15' />

//       <ul className='flex flex-col gap-6 relative z-20'>
//         {features.map((f, i) => (
//           <li key={i} className='flex items-center gap-4'>
//             <DiamondIcon type={f.type} />
//             <p className='text-base text-black/70 leading-[154%]'>{f.text}</p>
//           </li>
//         ))}
//       </ul>

//       <div className='h-px w-[95%] bg-black/15' />

//       <div className='w-fit shadow-xl relative z-20 rounded-lg'>
//         <Link href='/stripe-payment'>
//           {" "}
//           <div className='flex items-center gap-2 bg-[#3495fd] text-white py-1.5 px-4 rounded-lg'>
//             <span>Start 14 Days Trial</span>
//             <GoCreditCard />
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PriceCard;
