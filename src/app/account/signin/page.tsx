"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { login } from "./actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const formSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "must create a password"),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);

    const result = await login({
      email: values.email,
      password: values.password,
    });

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    } else if (result?.success) {
      // Refresh the router to get the new auth state
      router.refresh();
      // Navigate to home page
      router.push("/");
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex items-center flex-col mb-20">
      <div className="flex flex-col items-center text-center pt-12 px-6 mb-10">
        <h1 className="text-3xl font-black mb-7">
          Sign in or Create an Account
        </h1>
      </div>

      <div className="self-center w-full md:w-2/3  xl:w-1/3 p-14 rounded-2xl md:shadow-[0_1px_10px_0_#0000001a,0_4px_5px_0_#0000000f,0_2px_4px_0_#00000012] ">
        <p className="">
          <span className="text-green-700">* </span>indicates required field
          {error ? <p className="text-destructive">{error}</p> : ""}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="pt-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="* Email"
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
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="* Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-4 px-3 py-2 bg-green-800 rounded-full bg-blend-color-burn"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
