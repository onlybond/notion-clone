"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Kotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Kotion is the Connected workspace <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <Button>
          <Spinner size="lg" />
        </Button>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Kotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>Get Kotion Free <ArrowRight className="h-4 w-4 ml-2" /></Button>
        </SignInButton>
      )}
    </div>
  );
};