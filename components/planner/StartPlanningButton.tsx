"use client";

import { Button } from "@/components/ui/Button";
import { usePlanner } from "./PlannerProvider";

type Props = Omit<React.ComponentProps<typeof Button>, "onClick" | "children"> & { children?: React.ReactNode };

/** Opens the trip planner modal. Falls back to /plan-your-safari via the modal's own link. */
export function StartPlanningButton({ children = "Start planning", ...rest }: Props) {
  const { openPlanner } = usePlanner();
  return (
    <Button {...rest} onClick={openPlanner} aria-haspopup="dialog">
      {children}
    </Button>
  );
}
