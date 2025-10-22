"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/app/account/signOut/actions";
function SignOutButton() {
  async function onSignout() {
    const { success, error } = await signOut();
    if (error) {
      console.log("error signing out");
    }
    if (success) {
      window.location.href = "/";
    }
  }
  return (
    <Button
      onClick={() => onSignout()}
      className="px-3 hover:bg-red-800 bg-red-600/90 py-2 border-1 rounded-2xl font-semibold"
    >
      {" "}
      Log out
    </Button>
  );
}

export default SignOutButton;
