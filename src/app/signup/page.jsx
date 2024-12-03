"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex items-center justify-center my-auto">
      <section className="w-full max-w-md p-6 bg-white bg-opacity-10 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            {...register("email")}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Your Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.exampleRequired && (
            <span className="text-sm text-red-500">This field is required</span>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or sign in with</div>

        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            <FaGoogle className="text-lg" />
          </button>
        </div>
        <h2 className="">
          Already Have an Account?{" "}
          <button>
            <Link className="text-red-500 underline pl-2" href={`/login`}>
              Sing in
            </Link>
          </button>
        </h2>
      </section>
    </div>
  );
};

export default page;
