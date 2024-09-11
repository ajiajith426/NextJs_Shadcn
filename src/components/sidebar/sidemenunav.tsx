import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import {Link} from "lucide-react";

export default function SidemenuNav() {
  return (
    <nav className="grid items-start gap-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>User</span>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}
