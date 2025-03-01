"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import DependenTree from "@square/dependentree";

import Link from "next/link";

import { Separator } from "./ui/separator";

import ContentGrid from "./ContentGrid";
import BackButton from "./BackButton";
import SummaryTable from "./SummaryTable";
import Scorecard from "./Scorecard";
import IconCard from "./IconCard";
import ScrollContent from "./ScrollContent";

import {
  BookPlus,
  CircleDot,
  ClipboardList,
  GitFork,
  Scale,
  Star,
} from "lucide-react";
import { dateFormatOptions, treeID } from "@/lib/constants";
import { getDependencyGraphData } from "@/lib/helpers";

// Local Helper Components
const SectionSeparator = () => <Separator className="h-1 my-4 bg-blue-600" />;
const SectionHeader = ({ children }) => (
  <h2 className="my-4 text-2xl underline">{children}</h2>
);

// const treeID = "tree";

export default function PackageDetails(props) {
  const { data = [] } = props;

  const [state, setState] = useState({ display: false });
  const { packageName } = useParams();
  const treeRef = useRef(null);

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

      try {
        const graphData = getDependencyGraphData(dependencyGraph);

        if (treeRef?.current) treeRef.current.replaceChildren();

        const tree = new DependenTree("div#" + treeID, {
          containerWidthInPx: 400,
        });

        tree.addEntities(graphData);

        tree.setTree(packageName, "downstream");
      } catch {}
    }
  }, [currPackage]);

  if (!currPackage)
    return <h1 className="font-2xl text-center">No such package exists!</h1>;

  const {
      packageVersion: { version },
    } = currPackage,
    {
      dependencies,
      vulnerabilities,
      projectInsights,
      licenses,
      packagePublishedAt,
      registries,
      availableVersions,
      dependencyGraph,
    } = currPackage.insight,
    currProjectInsights = projectInsights[0];

  const contentGridConfig = dependencies.map((e) => ({
    name: e.package.name,
  }));

  const vulnTableData = vulnerabilities.map((e) => ({
      id: e.id.value,
      summary: e.summary,
      rank: e.aliases[0].value,
      severity: e.severities[0].risk,
      publishDate: e.publishedAt,
    })),
    vulnTableCols = [
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

  const polarChartData = currProjectInsights.scorecard.checks.map((e) => ({
      name: e.name,
      score: e.score ?? 0,
    })),
    polarChartConfig = {
      desktop: {
        label: "Score",
        color: "#2563eb",
      },
    };

  polarChartData.sort((a, b) => b.score - a.score);

  const iconSize = "40",
    iconColor = "black",
    scorecardStatsConfig = [
      {
        icon: <GitFork size={iconSize} color={iconColor} />,
        message: currProjectInsights.forks,
        tooltipTitle: "Github Forks",
      },
      {
        icon: <Star size={iconSize} color={iconColor} />,
        message: currProjectInsights.stars,
        tooltipTitle: "Github Stars",
      },
      {
        icon: <CircleDot size={iconSize} color={iconColor} />,
        message: currProjectInsights.issues.open,
        tooltipTitle: "Github Open Issues",
      },
    ];

  const formattedPublishedDate = new Date(packagePublishedAt).toDateString();

  const projDetailsIconSize = "30";

  const scrollConfigData = availableVersions.map((e) => ({
    name: (
      <div className="flex justify-between">
        <div>{"v-" + e.version}</div>
        <div>
          {new Date(e.publishedAt.substring(0, 10)).toLocaleDateString(
            "en-US",
            dateFormatOptions
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div
      className={`flex flex-col gap-2 ${
        state.display ? "" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <h1 className="w-full pt-4 text-center">
        You are viewing details of package:{" "}
        <span className="bg-gray-200 p-2 rounded">
          {packageName} v-{version}
        </span>
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
        columns={vulnTableCols}
        styleTableClass="vulnerability-table"
      />

      <SectionSeparator />

      {/* #3. Scorecard */}
      <SectionHeader>Scorecard</SectionHeader>
      <Scorecard
        cardsConfig={scorecardStatsConfig}
        polarChartData={polarChartData}
        polarChartConfig={polarChartConfig}
        axisDataKey="name"
        radarDataKey="score"
      />

      <SectionSeparator />

      {/* #4. Package Details */}
      <SectionHeader>Package Details</SectionHeader>
      <IconCard
        icon={<Scale size={projDetailsIconSize} />}
        message={licenses.licenses[0].licenseId}
        tooltipTitle="License"
      />
      <IconCard
        icon={<BookPlus size={projDetailsIconSize} />}
        message={formattedPublishedDate}
        tooltipTitle="Published Date"
      />
      <IconCard
        icon={<ClipboardList size={projDetailsIconSize} />}
        message={
          <Link href={registries[0]} target="_blank">
            {registries[0]}
          </Link>
        }
        tooltipTitle="Registry"
      />

      <SectionSeparator />

      {/* #5. Available Versions */}
      <SectionHeader>Available Versions</SectionHeader>
      <ScrollContent scrollConfig={scrollConfigData} />

      <SectionSeparator />

      {/* #6. Dependency Graph */}
      <SectionHeader>Dependency Graph</SectionHeader>
      <div className="w-full min-h-[300px]">
        <div id={treeID} ref={treeRef}></div>
      </div>

      <BackButton />
    </div>
  );
}
