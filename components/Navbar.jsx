import Link from "next/link";

import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { AppName, navLinks } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="flex w-full justify-between items-center px-4 py-2 border-b-[2px] border-solid border-red-400">
      <div className="font-bold text-2xl tracking-tight">{AppName}</div>

      <div className="flex gap-2">
        {navLinks.map((e, i) => (
          <Link key={i} href={e.route}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar>
                    <AvatarFallback>{e.iconText}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>{e.label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </div>
    </header>
  );
}
