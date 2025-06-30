import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";

export default function WhatWillYouGetSection({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <section className={cn(className)}>
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
        What will you get?
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 rounded-2xl border-2 border-yellow-600 bg-gradient-to-br from-yellow-50/60 via-amber-50/40 to-orange-50/30 p-8 py-16">
        <div className="flex flex-col gap-y-8">
          {items
            .filter((_, index) => index % 2 === 0)
            .map((item, index) => (
              <h3 className="flex items-center gap-2 text-lg" key={index}>
                <CircleCheckBig className="w-4 text-yellow-600" />
                {item}
              </h3>
            ))}
        </div>
        <div className="flex flex-col gap-y-8">
          {items
            .filter((_, index) => index % 2 !== 0)
            .map((item, index) => (
              <h3 className="flex items-center gap-2 text-lg" key={index}>
                <CircleCheckBig className="w-4 text-yellow-600" />
                {item}
              </h3>
            ))}
        </div>
      </div>
    </section>
  );
}
