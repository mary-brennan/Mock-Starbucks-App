/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const supabase = createClient();

  useEffect(() => {
    // Get initial user and profile
    const getUserAndProfile = async () => {
      // Use getSession() instead of getUser() to check cookies
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUser(session?.user ?? null);

      if (session?.user) {
        // Fetch user profile from accounts table
        const { data: profileData } = await supabase
          .from("accounts")
          .select("firstName, lastName, email")
          .eq("user_id", session.user.id)
          .single();

        setProfile(profileData);
      } else {
        setProfile(null);
      }

      setLoading(false);
    };

    getUserAndProfile();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);

      if (session?.user) {
        // Fetch profile when user signs in
        const { data: profileData } = await supabase
          .from("accounts")
          .select("firstName, lastName, email")
          .eq("user_id", session.user.id)
          .single();

        setProfile(profileData);
      } else {
        setProfile(null);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [pathname]); // Re-run when pathname changes

  return { user, profile, loading, isSignedIn: !!user };
}
