"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Page = () => {
  const formSchema = z.object({
    firstName: z.string().min(2, "must enter a First Name"),
    lastName: z.string().min(2, "must enter a Last Name"),
    email: z.email(),
    password: z.string().min(8, "must create a password"),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values));
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex items-center flex-col mb-20">
      <div className="flex flex-col items-center text-center pt-12 px-6 mb-10">
        <h1 className="text-3xl font-black mb-7">Create an account</h1>
        <p className="text-gray-500 w-2/3">
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and
          moremore.
        </p>
      </div>

      <div className="self-center w-full md:w-2/3  xl:w-1/3 p-14 rounded-2xl shadow-[0_1px_10px_0_#0000001a,0_4px_5px_0_#0000000f,0_2px_4px_0_#00000012] ">
        <p className="">
          <span className="text-green-700">* </span>indicates required field
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="pt-8">
            <h1 className="text-xl font-semibold">Personal Information</h1>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel>
                    <span className="text-green-600">*</span>First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="enter first name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel>
                    <span className="text-green-600">*</span>Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="enter first name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel>
                    <span className="text-green-600">*</span>Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="enter first name"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel>
                    <span className="text-green-600">*</span>Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="enter first name"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-4" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
