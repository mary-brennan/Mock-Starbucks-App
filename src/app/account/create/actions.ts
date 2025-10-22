"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  const supabase = await createClient();

  // Sign up the user with Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (authError) {
    return { error: authError.message };
  }

  if (!authData.user) {
    return { error: "Failed to create user account" };
  }

  // Store additional user data (WITHOUT password - Supabase Auth handles this securely)
  const { error: dbError } = await supabase.from("accounts").insert([
    {
      user_id: authData.user.id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      // DO NOT STORE PASSWORD - Supabase Auth already handles password hashing securely
    },
  ]);

  if (dbError) {
    return { error: `Database error: ${dbError.message}` };
  }

  revalidatePath("/", "layout");
  redirect("/account");
}
