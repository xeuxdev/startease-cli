import { Cli, Contribution, Hero, Installation } from "@/containers/home";
import Template from "./template";
import Features from "@/containers/home/Features";

export default function Page() {
  return (
    <Template showHeader={true} showFooter={true}>
      <main>
        <Hero />
        <Cli />
        <Installation />
        <Features />
        <Contribution />
      </main>
    </Template>
  );
}
