/** @format */
"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login Data:", data);

    // ✅ later API integrate here
    // await loginUser(data)
  };

  return (
    <div className='min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4'>
      {/* ✅ Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-700 via-indigo-500 to-blue-200' />

      {/* ✅ Soft overlay rings */}
      <div className='absolute inset-0 opacity-20'>
        <div className='w-[1200px] h-[1200px] border border-white/30 rounded-full absolute -top-[650px] left-1/2 -translate-x-1/2' />
        <div className='w-[900px] h-[900px] border border-white/20 rounded-full absolute -top-[500px] left-1/2 -translate-x-1/2' />
        <div className='w-[700px] h-[700px] border border-white/15 rounded-full absolute -top-[400px] left-1/2 -translate-x-1/2' />
      </div>

      {/* ✅ Bottom wave */}
      <div className='absolute bottom-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 320'
          className='w-full h-[220px]'
          preserveAspectRatio='none'>
          <path
            fill='white'
            fillOpacity='0.55'
            d='M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
        </svg>
      </div>

      {/* ✅ Login Card */}
      <div className='relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome Back</h1>
        <p className='text-sm text-gray-600 mt-1'>
          Login with your email & password
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4'>
          {/* Email */}
          <div>
            <label className='text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className='text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              className='mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          {/* <div className='flex justify-end'>
            <button
              type='button'
              className='text-sm text-blue-600 font-semibold hover:underline'>
              Forgot Password?
            </button>
          </div> */}

          {/* Submit */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-60'>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* Signup Link */}
          <p className='text-center text-sm text-gray-600'>
            Don’t have an account?{" "}
            <Link href='/singup'>
              {" "}
              <span className='text-blue-600 font-semibold cursor-pointer hover:underline'>
                Sign up
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
