import IconCard from "./IconCard";
import PolarChart from "./PolarChart";

import { getHasData } from "@/lib/helpers";

const getGridCol = (value) => {
  switch (value) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
    default:
      return "grid-cols-1";
  }
};

export default function Scorecard(props) {
  const {
    cardsConfig = [],
    polarChartData = [],
    polarChartConfig = {},
    axisDataKey = "",
    radarDataKey = "",
  } = props;

  const hasData = getHasData(cardsConfig),
    hasData1 = getHasData(polarChartData),
    configLen = cardsConfig.length,
    gridColsStyle = getGridCol(configLen);

  return (
    <div
      className={`w-full grid ${gridColsStyle} grid-rows-[125px_minmax(250px,300px)] gap-2`}
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
