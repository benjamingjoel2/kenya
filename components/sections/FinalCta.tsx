import { PlanCta } from "@/components/home/HomeSections";

/** Closing call to action used at the bottom of most pages. */
export function FinalCta(props: { title?: string; text?: string }) {
  return <PlanCta {...props} />;
}
