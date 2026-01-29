/** @format */
"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  // ✅ RTK Query hook
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginFormData) => {
    setApiError(null);

    try {
      await login(data).unwrap();
      router.push("/"); // ✅ login success redirect
    } catch (err: unknown) {
      let message = "Login failed";

      if (typeof err === "object" && err !== null && "status" in err) {
        const fetchError = err as FetchBaseQueryError;
        message =
          (fetchError.data as { message?: string })?.message ??
          "Invalid credentials";
      } else {
        const serializedError = err as SerializedError;
        message = serializedError.message ?? message;
      }

      setApiError(message);
    }
  };

  return (
    <div className='min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-200' />

      {/* Overlay rings */}
      <div className='absolute inset-0 opacity-20'>
        <div className='w-[1200px] h-[1200px] border border-white/30 rounded-full absolute -top-[650px] left-1/2 -translate-x-1/2' />
        <div className='w-[900px] h-[900px] border border-white/20 rounded-full absolute -top-[500px] left-1/2 -translate-x-1/2' />
        <div className='w-[700px] h-[700px] border border-white/15 rounded-full absolute -top-[400px] left-1/2 -translate-x-1/2' />
      </div>

      {/* Card */}
      <div className='relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome Back</h1>
        <p className='text-sm text-gray-600 mt-1'>
          Login with your email & password
        </p>

        {/* API Error */}
        {apiError && (
          <div className='mt-4 rounded-lg bg-red-100 text-red-700 px-4 py-2 text-sm'>
            {apiError}
          </div>
        )}

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

            <div className='relative mt-1'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Enter your password'
                className='w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />

              <button
                type='button'
                onClick={() => setShowPassword((prev) => !prev)}
                className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700'
                aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ?
                  <EyeOff size={20} />
                : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-60'>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {/* Signup */}
          <p className='text-center text-sm text-gray-600'>
            Don’t have an account?{" "}
            <Link href='/signup'>
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
