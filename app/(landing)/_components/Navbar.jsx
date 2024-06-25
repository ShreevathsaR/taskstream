"use client"

import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/Spinner";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="z-50 bg-background fixed top-0 flex items-center w-full px-6 pt-3 pb-3 shadow-lg">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading &&(
        <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">
              Try Taskstream for free
            </Button>
          </SignInButton>
        </>
        )}
        {
          isAuthenticated && !isLoading &&(
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/documents">Enter Taskstream</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
