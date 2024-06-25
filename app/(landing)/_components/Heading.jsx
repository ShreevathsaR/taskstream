"use client"

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import React from "react";

const Heading = () => {

  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Write,Plan & Organize
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Turn ideas into action with Taskstream’s workspace.<br/>
        Welcome to <b className="underline cursor-pointer">Taskstream</b>
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg"/>
        </div>
      )}
      {isAuthenticated && !isLoading &&(
        <Button asChild>
          <Link href="/documents">
          Enter Taskstream
          <ArrowRight className="h-4 w-4 ml-2"/>
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading &&(
        <SignInButton mode="modal">
          <Button>
          Get Taskstream for free
          <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
export default Heading;
