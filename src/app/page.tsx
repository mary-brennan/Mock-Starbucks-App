import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard1";
import SlimFeatureCard from "@/components/slimFeatureCard1";
import SlimFeatureCard2 from "@/components/slimFeatureCard2";
import FeatureCard2 from "@/components/FeatureCard2";
import FeatureCard3 from "@/components/FeatureCard3";

export default function Home() {
  return (
    <main className=" -mt-1 flex flex-col   md:mx-12 lg:mx-16 xl:mx-50">
      <div className="bg-canvas text-white font-bold flex-col md:flex-row items-center text-xl flex justify-center py-8 gap-4">
        <h1>It&apos;s a great day for coffee</h1>
        <Button
          className="bg-transparent border-white rounded-full border-2"
          asChild
        >
          <Link href="/menu" className="px-4 py-2 text-xl font-bold">
            Start an order
          </Link>
        </Button>
      </div>
      <FeatureCard />
      <SlimFeatureCard />
      <SlimFeatureCard2 />
      <FeatureCard2 />
      <FeatureCard3 />
    </main>
  );
}
