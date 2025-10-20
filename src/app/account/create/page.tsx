"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const formSchema = z.object({
    firstName: z.string().min(2, "must enter a First Name"),
    lastName: z.string().min(2, "must enter a Last Name"),
    email: z.email(),
    password: z.string().min(8, "must create a password"),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Create user in Supabase Auth
      console.log("Attempting to sign up user:", values.email);
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      console.log("Auth response:", { authData, authError });

      if (authError) {
        console.error("Auth error details:", authError);
        throw new Error(`Authentication error: ${authError.message}`);
      }

      if (!authData.user) {
        throw new Error("Failed to create user account");
      }

      // Step 2: Insert user data into your custom table
      console.log("Attempting to insert user:", {
        user_id: authData.user.id,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });

      const { data: insertData, error: dbError } = await supabase
        .from("accounts")
        .insert([
          {
            user_id: authData.user.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          },
        ])
        .select();

      if (dbError) {
        console.error("Full database error:", JSON.stringify(dbError, null, 2));
        throw new Error(
          `Database error: ${dbError.message} (Code: ${dbError.code})`
        );
      }

      console.log("Insert successful:", insertData);

      // Success! Redirect to a success page or login
      router.push("/account"); // Adjust this to your desired redirect
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
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

      <div className="self-center w-full md:w-2/3  xl:w-1/3 p-14 rounded-2xl md:shadow-[0_1px_10px_0_#0000001a,0_4px_5px_0_#0000000f,0_2px_4px_0_#00000012] ">
        <p className="">
          <span className="text-green-700">* </span>indicates required field
        </p>
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="pt-8">
            <h1 className="text-xl font-semibold">Personal Information</h1>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="* First Name"
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
                <FormItem className="pt-6 pb-8">
                  <FormControl>
                    <Input
                      className="bg-color-white"
                      placeholder="* Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h1 className="text-xl font-semibold">Account Security</h1>
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
                <FormItem className="pt-6">
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
              className="mt-4 px-3 py-2 rounded-full bg-green-800"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
