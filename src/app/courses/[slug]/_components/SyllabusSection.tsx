import { cn } from "@/lib/utils";

export default function SyllabusSection({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <section className={cn(className)}>
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
        Course Syllabus
      </h2>

      <div>
        {items.map((item, index) => {
          const [text, duration] = item.split("||");
          return (
            <div
              key={index}
              className="group -mx-4 flex items-center justify-between border-b border-gray-100 px-4 py-6 transition-all duration-300 last:border-b-0 hover:bg-gray-50/50"
            >
              <div className="flex items-center space-x-4">
                <span className="w-6 text-right font-mono text-xs text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-normal tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-yellow-600">
                  {text?.trim()}
                </span>
              </div>
              <span className="font-mono text-sm tabular-nums text-gray-500">
                {duration?.trim()}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
