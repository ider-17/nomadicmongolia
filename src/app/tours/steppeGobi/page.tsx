import SteppeGobiClient from "./SteppeGobiClient";
import { getSteppeGobiPage } from "@/sanity/lib/queries";

export default async function SteppeGobiServerPage() {
  const data = await getSteppeGobiPage();
  if (!data) return <p>Loading ...</p>;

  return <SteppeGobiClient data={data} />;
}
