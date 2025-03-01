import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function IconCard(props) {
  const { icon, message, tooltipTitle = "" } = props;

  return (
    <Card className="flex flex-col justify-center items-center bg-zinc-300">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <CardHeader>{icon}</CardHeader>
          </TooltipTrigger>
          <TooltipContent>{tooltipTitle}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <CardContent>{message}</CardContent>
    </Card>
  );
}
