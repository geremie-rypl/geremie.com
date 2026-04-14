import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Ventures } from "@/components/ventures";
import { Press } from "@/components/press";
import { CurrentFocus } from "@/components/current-focus";
import { Connect } from "@/components/connect";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Ventures />
      <Press />
      <CurrentFocus />
      <Connect />
    </>
  );
}
