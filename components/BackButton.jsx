"use client";

import Link from "next/link";

import { buttonVariants } from "./ui/button";

export default function BackButton() {
  return (
    <div className="fixed bottom-4 right-4">
      <Link href="/" className={buttonVariants({ variant: "ghost" })}>
        {" "}
        &lt;&lt;-- Back to Home
      </Link>
    </div>
  );
}
