import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { getHasData } from "@/lib/helpers";

export default function PolarChart(props) {
  const {
    chartConfig = {},
    chartData = [],
    axisDataKey = "",
    radarDataKey = "",
  } = props;

  const hasData = getHasData(chartData);

  return hasData ? (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square bg-zinc-800 w-full min-h-[250px] max-h-[300px]"
    >
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey={axisDataKey} />
        <PolarGrid />
        <Radar
          dataKey={radarDataKey}
          fill="var(--color-desktop)"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  ) : (
    <></>
  );
}
