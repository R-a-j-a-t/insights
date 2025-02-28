"use client";

import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Link from "next/link";

export default function Landing(props) {
  const { data = [] } = props;

  const [state, setState] = useState({ data: [] });

  const handleSetState = (key, value) =>
    setState((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    handleSetState("data", data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-white min-h-screen">
        <Navbar />

        <main className="px-4">
          <h1 className="text-center font-semibold">Welcome</h1>
          <p>Here's a list of packages to explore!</p>
          {state.data.length > 0 && (
            <ol>
              {state.data.map((e, i) => (
                <li key={i}>
                  <Link href={"/package/" + e.packageVersion.package.name}>
                    {e.packageVersion.package.name}
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </main>
      </div>
      <div id="dependency" className="mt-[400px]">
        Route Success!
      </div>
    </>
  );
}
