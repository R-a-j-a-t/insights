import { ScrollArea } from "@/components/ui/scroll-area";

import { Separator } from "@/components/ui/separator";

import { getHasData } from "@/lib/helpers";

export default function ScrollContent(props) {
  const { scrollConfig = [] } = props;

  const hasData = getHasData(scrollConfig);

  return hasData ? (
    <ScrollArea className="h-72 w-96 rounded-md border mx-auto">
      <div className="p-4">
        {scrollConfig.map((e, i) => (
          <div key={i}>
            <div>{e.name}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ) : (
    <></>
  );
}
