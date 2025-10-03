"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import signupBanner from "../../../public/signupBanner.jpg";
import { primary, secondary } from "../../cnostants/tvar";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  age: z
    .number()
    .min(18, "You must be at least 18 years old")
    .max(120, "Please enter a valid age"),
  country: z.string().min(1, "Please select a country"),
  gender: z.string().min(1, "Please select your gender"),
  interests: z
    .array(z.string())
    .min(1, "Please select at least one interest")
    .max(3, "You can select up to 3 interests"),
  newsletter: z.boolean().default(false),
  preference: z.string().optional(),
});
export default function Someform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      age: 18,
      country: "",
      gender: "",
      interests: [],
      newsletter: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchNewsletter = watch("newsletter");

  return (
    <div className="flex max-md:flex-wrap max-w-5xl container mx-auto border max-md:border-none rounded-xl my-6 max-md:my-0 relative">
      <Image
        src={signupBanner}
        alt="signupBanner"
        className="rounded-l-xl max-md:rounded-none max-w-1/2 block max-md:hidden"
        height="570"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 mx-auto max-md:border rounded-xl max-md:m-4 max-sm:m-6 w-1/2 max-md:w-full"
      >
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <div className="space-y-2 overflow-y-auto scrollbar-none max-lg:max-h-[95vh] max-md:max-h-[78vh] p-2">
          <div className="flex flex-col gap-1">
            <label className="block" htmlFor="firstName">
              First Name
            </label>
            <Input
              error={errors.firstName}
              name="firstName"
              id="firstName"
              type="text"
              // className={`${errors.firstName ? "boder-red-500" : ""}`}
              {...register("firstName", {
                // required: "First name is required",
              })}
            />
            <span
              className={`${
                errors.firstName ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.firstName ? errors.firstName.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="block" htmlFor="email">
              Email
            </label>
            <Input
              error={errors.email}
              name="email"
              id="email"
              type="email"
              {...register("email", {
                // required: "Email is required",
              })}
            />
            <span
              className={`${
                errors.email ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.email ? errors.email.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="block" htmlFor="age">
              Age
            </label>
            <Input
              error={errors.age}
              name="age"
              id="age"
              type="number"
              {...register("age", {
                valueAsNumber: true,
                // required: "Age is required",
              })}
            />
            <span
              className={`${
                errors.age ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.age ? errors.age.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="block" htmlFor="country">
              Country
            </label>
            <Select
              error={errors.country}
              className="px-3 py-2 rounded-lg w-full text-blue-500 hover:text-purple-500 border-blue-500-400 border hover:border-blue-500-800"
              id="country"
              {...register("country", {
                // required: "Please select a country",
              })}
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
            </Select>
            <span
              className={`${
                errors.country ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.country ? errors.country.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label>Gender</label>
            <div className="flex flex-wrap gap-2">
              <label className="space-x-2">
                <input
                  type="radio"
                  className={`me-1.5 accent-${secondary} text-4xl`}
                  value="male"
                  {...register("gender", {
                    // required: "Please select your gender",
                  })}
                />
                <span>Male</span>
              </label>
              <label className="space-x-2">
                <input
                  type="radio"
                  className={`me-1.5 accent-${secondary} text-4xl`}
                  value="female"
                  {...register("gender")}
                />
                <span>Female</span>
              </label>
              <label className="space-x-2">
                <input
                  type="radio"
                  className={`me-1.5 accent-${secondary} text-4xl`}
                  value="other"
                  {...register("gender")}
                />
                <span>Other</span>
              </label>
            </div>
            <span
              className={`${
                errors.gender ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.gender ? errors.gender.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label>Interests</label>
            <div className="space-x-3">
              <label className="space-x-2 inline-flex">
                <input
                  type="checkbox"
                  className={`me-1.5 accent-${secondary} text-4xl`}
                  value="programming"
                  {...register("interests")}
                />
                <span>Programming</span>
              </label>
              <label className="space-x-2 inline-flex">
                <input
                  type="checkbox"
                  className={`me-1.5 accent-${secondary} text-4xl`}
                  value="design"
                  {...register("interests")}
                />
                <span>Design</span>
              </label>
              <label className="space-x-2 inline-flex">
                <input
                  type="checkbox"
                  className={`me-1.5 accent-${secondary} text-4xl`}
                  value="music"
                  {...register("interests")}
                />
                <span>Music</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="space-x-2">
              <input
                type="checkbox"
                className={`me-1.5 accent-${secondary} text-4xl`}
                {...register("newsletter")}
              />
              <span>Subscribe to newsletter</span>
            </label>

            {watchNewsletter && (
              <div className="flex flex-col gap-1">
                <label className="block" htmlFor="preference">
                  Newsletter Preference
                </label>
                <Select
                  className="px-3 py-2 rounded-lg w-full text-blue-500 hover:text-purple-500 border-blue-500-400 border hover:border-blue-500-800"
                  id="preference"
                  {...register("preference")}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </Select>
              </div>
            )}
          </div>

          <div className="flex space-x-4 sticky bottom-0 pt-3">
            <Button type="submit" varient="primary">
              Submit
            </Button>
            <Button
              type="button"
              varient="secondary"
              // cVarient={["blue-600", "sky-400"]}
              onClick={() => reset()}
            >
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
