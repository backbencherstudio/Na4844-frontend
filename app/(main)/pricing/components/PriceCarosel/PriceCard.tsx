"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";
import { toast } from "sonner";
import DiamondIcon from "@/components/shared/DiamondCheckIcon";
import { useCreateTrileMutation } from "@/redux/features/payment/paymentApi";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/features/auth/authSlice";

export type FeatureType = "check" | "minus";

interface Feature {
  text: string;
  type: FeatureType;
}

interface PriceCardProps {
  id: number;
  title: string;
  price: number;
  features: Feature[];
  glow?: boolean;
  desc?: string;
  packageType: string;
  isPopular?: boolean;
  discount?: boolean;
}

export default function PriceCard({
  title,
  desc,
  price,
  packageType,
  features,
  glow = false,
  isPopular = false,
  discount = false,
}: PriceCardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { token, isTrial, isSubscribed } = useAppSelector((state) => state.auth);
  const [createTrial, { isLoading }] = useCreateTrileMutation();

  const handleClick = async () => {
    if (!token) return router.push("/signup");

    // 1️⃣ প্রথম বার trial শুরু
    if (!isTrial && !isSubscribed) {
      try {
        const res = await createTrial({
          plan: title,
          interval: packageType.toUpperCase(),
        }).unwrap();

        toast.success(res.message || "Trial started");

        // Redux + Cookies update → reload optional
        dispatch(
          setCredentials({
            isTrial: true,
            isSubscribed: false,
          })
        );

        return; // এখন button auto change হবে
      } catch (error: any) {
        toast.error(error?.data?.message || "Something went wrong");
        return;
      }
    }

    // 2️⃣ Trial active, কিন্তু subscribed নয় → subscribe page এ redirect
    if (isTrial && !isSubscribed) {
      return router.push("/subscribe");
    }

    // 3️⃣ Already subscribed → dashboard
    if (isTrial && isSubscribed) {
      return router.push("https://flow-edit-one.vercel.app/dashboard");
    }
  };

  const renderButtonText = () => {
    if (!token) return "Sign Up";
    if (!isTrial && !isSubscribed) return "Start 14 Days Free Trial";
    if (isTrial && !isSubscribed) return "Subscribe Now";
    if (isTrial && isSubscribed) return "Subscribed";
    return "Start Trial";
  };

  return (
    <div
      className={`relative overflow-hidden px-10 py-8 border rounded-lg bg-white/40 flex flex-col gap-6 ${glow ? "shadow-xl" : ""
        }`}
    >
      <Image
        src="/images/price-page/card-glow.png"
        alt="card glow"
        width={350}
        height={300}
        className="absolute -top-5 -right-7 opacity-30 z-0"
      />

      <div className="relative z-10 text-center">
        {isPopular && (
          <div className="absolute rotate-45 translate-x-12 -right-20 bg-blue-500 text-white text-xs font-semibold w-[280px] py-1 shadow-lg z-20">
            MOST POPULAR
          </div>
        )}

        {(title === "GROWTH" || title === "PLUS") && discount && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 lg:text-base text-lg px-4 py-1 rounded-full font-bold">
            SAVE 15%
          </div>
        )}

        <h2 className="text-sm text-gray-600">{title}</h2>

        <div className="flex justify-center items-center gap-1">
          <BsCurrencyDollar />
          <p className="text-5xl font-bold">{price}</p>
        </div>

        <p className="text-sm text-gray-500">{desc}</p>

        <ul className="space-y-5 mt-5">
          {features.map((f, i) => (
            <li key={i} className="flex gap-3">
              <DiamondIcon type={f.type} />
              <span>{f.text}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleClick}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl disabled:opacity-60"
        >
          {isLoading ? "Please wait..." : renderButtonText()}
        </button>
      </div>
    </div>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { toast } from "sonner";
// import DiamondIcon from "@/components/shared/DiamondCheckIcon";
// import { useCreateTrileMutation } from "@/redux/features/payment/paymentApi";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// export type FeatureType = "check" | "minus";

// interface Feature {
//   text: string;
//   type: FeatureType;
// }

// interface PriceCardProps {
//   id: number;
//   title: string;
//   price: number;
//   features: Feature[];
//   glow?: boolean;
//   desc?: string;
//   packageType: string;
//   isPopular?: boolean;
//   discount?: boolean;
// }

// export default function PriceCard({
//   title,
//   desc,
//   price,
//   packageType,
//   features,
//   glow = false,
//   isPopular = false,
//   discount = false,
// }: PriceCardProps) {
//   const { token, isTrial, role, isSubscribed } = useAppSelector((state) => state.auth);
//   const [createTrial, { isLoading }] = useCreateTrileMutation();
//   const router = useRouter();

//   // const dispatch = useAppDispatch();
//   // console.log('====================================');
//   // console.log(isSubscribed, "check");
//   // console.log('====================================');

//   const handleSubscribe = async () => {
//     if (!token) {
//       router.push("/signup");
//       return;
//     }

//     if (!isTrial) {
//       router.push("/subscribe");
//       return;
//     }

//     try {
//       // Call backend API
//       const response = await createTrial({
//         plan: title,
//         interval: packageType.toUpperCase(),
//       }).unwrap();

//       // Show backend message in toast
//       toast.success(response.message);

//       // Redirect if needed
//       router.push("/pricing");
//     } catch (error: any) {
//       const status = error?.status;
//       const message =
//         typeof error?.data?.message === "string"
//           ? error.data.message
//           : error?.data?.message?.message || "Something went wrong.";

//       if (status === 400 || status === 409) {
//         // Show backend error message
//         toast.warning(message || "You already have an active subscription.");
//         router.push("/subscribe");
//         return;
//       }

//       toast.error(message);
//     }
//   };



//   const renderButton = () => {
//     // if (!token) {
//     //   // User not logged in → redirect to signup
//     //   return (
//     //     <button
//     //       onClick={() => router.push("/signup")}
//     //       className="w-full bg-gray-600 text-white mt-9 py-2 rounded-xl"
//     //     >
//     //       Sign Up
//     //     </button>
//     //   );
//     // }

//     if (!isTrial) {
//       // User can start a trial → call backend
//       return (
//         <button
//           onClick={handleSubscribe}
//           disabled={isLoading}
//           className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl disabled:opacity-60"
//         >
//           {isLoading ? "Please wait..." : "Start 14 Days Free Trial"}
//         </button>
//       );
//     }

//     if (!isSubscribed) {
//     return (
//       <button
//         onClick={handleSubscribe}
//         disabled={isLoading}
//         className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl disabled:opacity-60"
//       >
//         {isLoading ? "Please wait..." : "Subscribe Now"}
//       </button>
//     );

//     }
//     // User already has a trial → show backend message via toast
//        return (
//         <button
//           onClick={() => router.push("https://flow-edit-one.vercel.app/dashboard")}
//           className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl disabled:opacity-60 cursor-pointer"
//         >
//           Subscribed
//         </button>
//       );
//   };

//   return (
//     <div
//       className={`relative overflow-hidden px-10 py-8 border rounded-lg bg-white/40 flex flex-col gap-6 ${glow ? "shadow-xl" : ""
//         }`}
//     >
//       <Image
//         src="/images/price-page/card-glow.png"
//         alt="card glow"
//         width={350}
//         height={300}
//         className="absolute -top-5 -right-7 opacity-30 z-0"
//       />

//       <div className="relative z-10 text-center">
//         {isPopular && (
//           <div className="absolute rotate-45 translate-x-12 -right-20 bg-blue-500 text-white text-xs font-semibold w-[280px] py-1 shadow-lg z-20">
//             MOST POPULAR
//           </div>
//         )}

//         {(title === "GROWTH" || title === "PLUS") && discount && (
//           <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 lg:text-base text-lg px-4 py-1 rounded-full font-bold">
//             SAVE 15%
//           </div>
//         )}

//         <h2 className="text-sm text-gray-600">{title}</h2>

//         <div className="flex justify-center items-center gap-1">
//           <BsCurrencyDollar />
//           <p className="text-5xl font-bold">{price}</p>
//         </div>

//         <p className="text-sm text-gray-500">{desc}</p>

//         <ul className="space-y-5 mt-5">
//           {features.map((f, i) => (
//             <li key={i} className="flex gap-3">
//               <DiamondIcon type={f.type} />
//               <span>{f.text}</span>
//             </li>
//           ))}
//         </ul>

//         {renderButton()}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { toast } from "sonner";
// import DiamondIcon from "@/components/shared/DiamondCheckIcon";
// import { useCreateTrileMutation } from "@/redux/features/payment/paymentApi";
// import { useAppSelector } from "@/redux/hooks";

// export type FeatureType = "check" | "minus";

// interface Feature {
//   text: string;
//   type: FeatureType;
// }

// interface PriceCardProps {
//   id: number;
//   title: string;
//   price: number;
//   features: Feature[];
//   glow?: boolean;
//   desc?: string;
//   packageType: string;
//   isPopular?: boolean;
//   discount?: boolean;
// }

// export default function PriceCard({
//   title,
//   desc,
//   price,
//   packageType,
//   features,
//   glow = false,
//   isPopular = false,
//   discount = false,
// }: PriceCardProps) {
//   const { token, isTrial, isSubscribed } = useAppSelector((state) => state.auth);
//   const [createTrial, { isLoading }] = useCreateTrileMutation();
//   const router = useRouter();

//   const handleSubscribe = async () => {
//     if (!token) {
//       router.push("/signup");
//       return;
//     }

//     // User has no trial → start 14 days free
//     if (!isTrial && !isSubscribed) {
//       try {
//         const response = await createTrial({
//           plan: title,
//           interval: packageType.toUpperCase(),
//         }).unwrap();
//         toast.success(response.message || "Trial started successfully");
//         router.push("/pricing"); // reload page to update button
//       } catch (error: any) {
//         toast.error(error?.data?.message || "Something went wrong");
//       }
//       return;
//     }

//     // Trial active but no subscription → redirect to subscribe
//     if (isTrial && !isSubscribed) {
//       router.push("/subscribe");
//       return;
//     }

//     // Trial + subscribed → redirect to dashboard
//     if (isTrial && isSubscribed) {
//       router.push("/dashboard");
//       return;
//     }
//   };

//   const renderButton = () => {
//     if (!token) {
//       return (
//         <button
//           onClick={() => router.push("/signup")}
//           className="w-full bg-gray-600 text-white mt-9 py-2 rounded-xl"
//         >
//           Sign Up
//         </button>
//       );
//     }

//     if (!isTrial && !isSubscribed) {
//       return (
//         <button
//           onClick={handleSubscribe}
//           disabled={isLoading}
//           className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl disabled:opacity-60"
//         >
//           {isLoading ? "Please wait..." : "Start 14 Days Free Trial"}
//         </button>
//       );
//     }

//     if (isTrial && !isSubscribed) {
//       return (
//         <button
//           onClick={handleSubscribe}
//           className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl"
//         >
//           Subscribe Now
//         </button>
//       );
//     }

//     // Already subscribed
//     return (
//       <button
//         onClick={handleSubscribe}
//         className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl"
//       >
//         Subscribed
//       </button>
//     );
//   };

//   return (
//     <div
//       className={`relative overflow-hidden px-10 py-8 border rounded-lg bg-white/40 flex flex-col gap-6 ${glow ? "shadow-xl" : ""
//         }`}
//     >
//       <Image
//         src="/images/price-page/card-glow.png"
//         alt="card glow"
//         width={350}
//         height={300}
//         className="absolute -top-5 -right-7 opacity-30 z-0"
//       />

//       <div className="relative z-10 text-center">
//         {isPopular && (
//           <div className="absolute rotate-45 translate-x-12 -right-20 bg-blue-500 text-white text-xs font-semibold w-[280px] py-1 shadow-lg z-20">
//             MOST POPULAR
//           </div>
//         )}

//         {(title === "GROWTH" || title === "PLUS") && discount && (
//           <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 lg:text-base text-lg px-4 py-1 rounded-full font-bold">
//             SAVE 15%
//           </div>
//         )}

//         <h2 className="text-sm text-gray-600">{title}</h2>

//         <div className="flex justify-center items-center gap-1">
//           <BsCurrencyDollar />
//           <p className="text-5xl font-bold">{price}</p>
//         </div>

//         <p className="text-sm text-gray-500">{desc}</p>

//         <ul className="space-y-5 mt-5">
//           {features.map((f, i) => (
//             <li key={i} className="flex gap-3">
//               <DiamondIcon type={f.type} />
//               <span>{f.text}</span>
//             </li>
//           ))}
//         </ul>

//         {renderButton()}
//       </div>
//     </div>
//   );
// }