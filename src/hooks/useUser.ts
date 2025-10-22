/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    // Get initial user and profile
    const getUserAndProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        // Fetch user profile from accounts table
        const { data: profileData } = await supabase
          .from("accounts")
          .select("firstName, lastName, email")
          .eq("user_id", user.id)
          .single();

        setProfile(profileData);
      }
      setLoading(false);
    };

    getUserAndProfile();

    // Listen for auth state changes
  }, []);

  return { user, profile, loading, isSignedIn: !!user };
}
