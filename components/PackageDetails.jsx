"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Separator } from "./ui/separator";

import ContentGrid from "@/components/ContentGrid";
import BackButton from "./BackButton";

const sectionSeparator = <Separator className="h-2 mt-4 bg-blue-600" />;

export default function PackageDetails(props) {
  const { data = [] } = props;

  const [state, setState] = useState({ display: false });
  const { packageName } = useParams();

  const handleSetState = (key, value) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const currPackage = data.find(
    (e) => e.packageVersion.package.name === packageName
  );

  useEffect(() => {
    if (currPackage) {
      let timerId = setTimeout(() => {
        clearTimeout(timerId);
        handleSetState("display", true);
      }, 500);
    }
  }, [currPackage]);

  if (!currPackage)
    return <h1 className="font-2xl text-center">No such package exists!</h1>;

  const contentGridConfig = currPackage.insight.dependencies.map((e) => ({
    name: e.package.name,
  }));

  return (
    <div
      className={`flex flex-col gap-2 ${
        state.display ? "" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <h1 className="w-full pt-4 text-center">
        You are viewing details of package:{" "}
        <span className="bg-gray-200 p-2 rounded">{packageName}</span>
      </h1>

      {sectionSeparator}

      {/* #1. Dependency libs */}
      <h2 className="my-1 underline">Dependency Libraries</h2>
      <ContentGrid config={contentGridConfig} />

      {sectionSeparator}

      {/* #2. Next Section */}

      <BackButton />
    </div>
  );
}
