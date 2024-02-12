import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge Web | Semaine 3",
  description: "Challenge web of first week",
};

const Page = () => (
  <div>
    <h1>Hello world ! 👋</h1>
    <Button>Click me</Button>
  </div>
);

export default Page;
