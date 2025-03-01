"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Separator } from "./ui/separator";

import ContentGrid from "@/components/ContentGrid";
import BackButton from "./BackButton";
import SummaryTable from "./SummaryTable";

// Local Helper Components
const SectionSeparator = () => <Separator className="h-2 mt-4 bg-blue-600" />;
const SectionHeader = ({ children }) => (
  <h2 className="my-1 underline">{children}</h2>
);

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

  const vulnTableData = currPackage.insight.vulnerabilities.map((e) => ({
      id: e.id.value,
      summary: e.summary,
      rank: e.aliases[0].value,
      severity: e.severities[0].risk,
      publishDate: e.publishedAt,
    })),
    vlunTableCols = [
      {
        accessorKey: "serialNum",
        header: "Sl. No",
        cell: ({ row }) => <div>{row.index + 1}</div>,
      },
      {
        accessorKey: "summary",
        header: "Summary",
      },
      {
        accessorKey: "severity",
        header: "Severity",
        cell: ({ row }) => {
          const type = row.getValue("severity").toLowerCase();
          let typeVal = "-",
            styleClass = "";

          if (type.includes("high")) {
            typeVal = "high";
            styleClass = "severity-high";
          } else if (type.includes("medium")) {
            typeVal = "medium";
            styleClass = "severity-medium";
          } else if (type.includes("low")) {
            typeVal = "low";
            styleClass = "severity-low";
          }

          return <div className={styleClass}>{typeVal}</div>;
        },
      },
      {
        accessorKey: "rank",
        header: "CVE",
      },
    ];

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

      <SectionSeparator />

      {/* #1. Dependency libs */}
      <SectionHeader>Dependency Libraries</SectionHeader>
      <ContentGrid config={contentGridConfig} />

      <SectionSeparator />

      {/* #2. Vulnerability Table */}
      <SectionHeader>Vulnerability Table</SectionHeader>
      <SummaryTable
        data={vulnTableData}
        columns={vlunTableCols}
        styleTableClass="vulnerability-table"
      />

      <SectionSeparator />

      {/* #3. Next Section */}
      <BackButton />
    </div>
  );
}
