import IconCard from "./IconCard";
import PolarChart from "./PolarChart";

import { getHasData } from "@/lib/helpers";

export default function Scorecard(props) {
  const {
    cardsConfig = [],
    polarChartData = [],
    polarChartConfig = {},
    axisDataKey = "",
    radarDataKey = "",
  } = props;

  const hasData = getHasData(cardsConfig),
    hasData1 = getHasData(polarChartData);

  return (
    <div
      className={`w-full grid grid-cols-${
        hasData ? cardsConfig.length : 1
      } grid-rows-[125px_minmax(250px,300px)] gap-2`}
    >
      {hasData &&
        cardsConfig.map((e, i) => (
          <IconCard
            key={i}
            icon={e.icon}
            message={e.message}
            tooltipTitle={e.tooltipTitle ?? ""}
          />
        ))}
      {hasData1 && (
        <div className="col-span-full">
          <PolarChart
            chartData={polarChartData}
            chartConfig={polarChartConfig}
            axisDataKey={axisDataKey}
            radarDataKey={radarDataKey}
          />
        </div>
      )}
    </div>
  );
}
