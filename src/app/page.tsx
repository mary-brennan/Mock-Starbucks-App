import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

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
    </main>
  );
}
