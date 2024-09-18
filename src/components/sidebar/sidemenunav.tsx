import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
