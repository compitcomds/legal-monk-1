import { recoleta } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import orangeUnderline from "@/assets/underlines/orange.png";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <div className="relative mb-56 flex flex-col items-center justify-center gap-y-8 rounded-b-xl bg-[#f9f6f3] p-4 lg:pb-60 lg:pt-8">
        <div className="flex w-full max-w-4xl flex-col text-center md:text-start">
          <h1
            className={cn(
              "mt-6 text-center text-xl font-bold uppercase text-black md:text-5xl lg:text-6xl lg:leading-[1.1]",
              recoleta.className,
            )}
          >
            Legal Reasoning Course For CLAT UG Exam 2025
          </h1>
          <p className="mb-4 mt-2 text-center font-sans text-sm leading-5 text-black md:text-lg lg:mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad, eius!
          </p>

          <a
            href="#"
            target="_blank"
            className="mx-auto block w-full rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-black hover:bg-yellow-600 md:w-[40%] lg:text-xl"
          >
            Enroll Now
          </a>
        </div>
        <div className="absolute bottom-0 left-0 hidden translate-x-[20%] flex-col items-end justify-end lg:flex">
          <p className="translate-y-[100%] -rotate-[25deg] text-orange-400">
            Checkout The Course Trailer
          </p>
          <Image
            src={orangeUnderline}
            alt="Orange Underline | Title of the course | Legal Startup Wala"
            className="w-12 rotate-[270deg]"
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/6HUeVxHdM6Q?si=gNqs-6xJbhohw5M4"
          className="aspect-video w-full rounded-xl lg:absolute lg:bottom-0 lg:w-1/2 lg:translate-y-[45%]"
        ></iframe>
      </div>
    </>
  );
}
