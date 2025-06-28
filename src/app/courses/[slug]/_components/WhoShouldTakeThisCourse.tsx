import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhoShouldTakeThisCourseSection({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <>
      <section
        className={cn(
          "mx-auto grid grid-cols-1 gap-x-8 rounded-2xl border-2 border-yellow-600 p-8 lg:grid-cols-4",
          className,
        )}
      >
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
          Who should take this course?
        </h2>

        <div className="relative col-span-3 flex items-center">
          <div className="relative flex max-w-[100vw] overflow-hidden py-5">
            <div className="flex w-max animate-marquee gap-4 [--duration:60s] hover:[animation-play-state:paused]">
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="flex h-full min-w-fit items-center gap-2 text-nowrap rounded-2xl border bg-white/5 px-8 py-3 text-sm font-light lg:px-16 lg:text-base"
                >
                  <User className="w-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
