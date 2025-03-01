"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { buttonVariants } from "./ui/button";

import Navbar from "./Navbar";
import { getHasData } from "@/lib/helpers";

export default function Landing(props) {
  const { data = [] } = props;

  const [state, setState] = useState({ data: [] });

  const hasData = getHasData(state.data);

  const handleSetState = (key, value) =>
    setState((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    handleSetState("data", data);
  }, [data]);

  return (
    <div className="flex flex-col gap-4 bg-white min-h-screen">
      <Navbar />

      <main className="px-4">
        <h1 className="text-center font-semibold">Welcome</h1>
        <p className="my-4">Here's a list of packages to explore!</p>
        {hasData &&
          state.data.map((e, i) => (
            <Link
              key={i}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full",
              })}
              href={"/package/" + e.packageVersion.package.name}
            >
              {e.packageVersion.package.name}
            </Link>
          ))}
      </main>
    </div>
  );
}
