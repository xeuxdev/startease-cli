import { Cli, Contribution, Features, Hero, Installation } from "@/containers/home";
import Template from "./template";

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
