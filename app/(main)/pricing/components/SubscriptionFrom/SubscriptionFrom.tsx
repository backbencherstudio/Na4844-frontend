/** @format */
"use client";

import Cookies from "js-cookie";
import { FormEvent, useMemo, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

type Plan = "CORE" | "GROWTH" | "PLUS";
type Interval = "MONTHLY" | "SEMIANNUAL" | "ANNUAL";

interface BackendResponse {
  client_secret: string;
  subscription_id: string;
}

export default function SubscriptionForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [plan, setPlan] = useState<Plan>("CORE");
  const [interval, setInterval] = useState<Interval>("MONTHLY");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUrl = useMemo(
    () => `${process.env.NEXT_PUBLIC_BACKEND_BASE}/payment/stripe/subscription`,
    [],
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage("Stripe loading...");
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setMessage("Card element not found");
      return;
    }

    try {
      setLoading(true);
      setMessage("Creating payment intent...");

      const token = Cookies.get("token");

      const res = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan, interval }),
      });

      const data: BackendResponse = await res.json();

      if (!res.ok) {
        setMessage("Failed to create payment");
        return;
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        data.client_secret,
        {
          payment_method: {
            card,
            billing_details: {
              address: { postal_code: postalCode },
            },
          },
        },
      );

      if (error) {
        setMessage(error.message ?? "Payment failed");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        setMessage("✅ Payment successful! Subscription active.");
        setTimeout(() => {
          window.location.href = "#"; //success page
        }, 1500);
      }
    } catch {
      setMessage("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full mb-10 '>
      <div className='min-h-screen w-full inset-0 bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-200 relative overflow-hidden flex items-center justify-center px-4 '>
        {/* Gradient Background */}
        <div className='absolut' />

        {/* Card */}
        <div className='relative w-full lg:max-w-xl  bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Subscription Payment
          </h2>
          <p className='text-sm text-gray-600 mt-1'>
            Enter your details to activate subscription
          </p>

          {message && (
            <div className='mt-4 rounded-lg bg-blue-100 text-blue-700 px-4 py-2 text-sm'>
              {message}
            </div>
          )}

          <form onSubmit={onSubmit} className='mt-6 space-y-4'>
            {/* Plan */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Select Plan
              </label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value as Plan)}
                className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'>
                <option value='CORE'>Core</option>
                <option value='GROWTH'>Growth</option>
                <option value='PLUS'>Plus</option>
              </select>
            </div>

            {/* Interval */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Billing Interval
              </label>
              <select
                value={interval}
                onChange={(e) => setInterval(e.target.value as Interval)}
                className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'>
                <option value='MONTHLY'>Monthly</option>
                <option value='SEMIANNUAL'>6 Months</option>
                <option value='ANNUAL'>Yearly</option>
              </select>
            </div>

            {/* Postal Code */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Postal Code
              </label>
              <input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder='Postal Code'
                className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              />
            </div>

            {/* Stripe Card Element */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Card Details
              </label>
              <div className='mt-2 rounded-xl bg-gray-100 px-4 py-3 border focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200'>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#1f2937",
                        "::placeholder": {
                          color: "#9ca3af",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type='submit'
              disabled={loading || !stripe}
              className='w-full rounded-xl bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition disabled:opacity-60'>
              {loading ? "Processing..." : "Subscribe Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// /** @format */

// "use client";
// import Cookies from "js-cookie";
// import { FormEvent, useMemo, useState } from "react";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// type Plan = "CORE" | "GROWTH" | "PLUS";
// type Interval = "MONTHLY" | "SEMIANNUAL" | "ANNUAL";

// interface BackendResponse {
//   client_secret: string;
//   subscription_id: string;
// }

// export default function SubscriptionForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [plan, setPlan] = useState<Plan>("CORE");
//   const [interval, setInterval] = useState<Interval>("MONTHLY");
//   const [postalCode, setPostalCode] = useState("1000");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchUrl = useMemo(
//     () => `${process.env.NEXT_PUBLIC_BACKEND_BASE}/payment/stripe/subscription`,
//     [],
//   );

//   const onSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       setMessage("Stripe loading...");
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       setMessage("Card element missing");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("Creating payment intent...");

//       const token = Cookies.get("token");
//       //   const token =
//       //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1am9uYmRjYWxsaW5nQGdtYWlsLmNvbSIsInN1YiI6ImNta3oxM3l4ZjAwMDAwMnpvanhsZWNlcHAiLCJ0eXBlIjoiQ0xJRU5UIiwiaWF0IjoxNzY5Njc5OTU3LCJleHAiOjE3Njk2ODM1NTd9.5dXMvbzURtrEgPFHvYNHTtAm7wqMSnMkaQuJmPUXqsY";

//       const res = await fetch(fetchUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ plan, interval }),
//       });

//       const data: BackendResponse = await res.json();

//       if (!res.ok) {
//         setMessage("Failed to create payment");
//         return;
//       }

//       const { error, paymentIntent } = await stripe.confirmCardPayment(
//         data.client_secret,
//         {
//           payment_method: {
//             card,
//             billing_details: {
//               address: { postal_code: postalCode },
//             },
//           },
//         },
//       );

//       if (error) {
//         setMessage(error.message ?? "Payment failed");
//         return;
//       }

//       if (paymentIntent?.status === "succeeded") {
//         setMessage("✅ Payment successful!");
//         setTimeout(() => {
//           window.location.href = "#"; //success page
//         }, 1500);
//       }
//     } catch {
//       setMessage("Network error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <select value={plan} onChange={(e) => setPlan(e.target.value as Plan)}>
//         <option value='CORE'>Core</option>
//         <option value='GROWTH'>Growth</option>
//         <option value='PLUS'>Plus</option>
//       </select>

//       <select
//         value={interval}
//         onChange={(e) => setInterval(e.target.value as Interval)}>
//         <option value='MONTHLY'>Monthly</option>
//         <option value='SEMIANNUAL'>6 Months</option>
//         <option value='ANNUAL'>Yearly</option>
//       </select>

//       <input
//         placeholder='Postal Code'
//         value={postalCode}
//         onChange={(e) => setPostalCode(e.target.value)}
//       />

//       <div style={{ margin: "12px 0" }}>
//         <CardElement />
//       </div>

//       <button disabled={!stripe || loading}>
//         {loading ? "Processing..." : "Subscribe"}
//       </button>

//       <p>{message}</p>
//     </form>
//   );
// }
