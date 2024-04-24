import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import LampDemo from "@/components/LampDemo";
import TeamCard from "@/components/TeamCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LampDemo />
      <GoogleGeminiEffectDemo />
      <TeamCard />
      <AnimatedTooltipPreview />
    </>
  );
}
