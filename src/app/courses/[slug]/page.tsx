import { recoleta } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import orangeUnderline from "@/assets/underlines/orange.png";
import WhatWillYouGetSection from "./_components/WhatWillYouGet";
import SyllabusSection from "./_components/SyllabusSection";
import WhoShouldTakeThisCourseSection from "./_components/WhoShouldTakeThisCourse";

const whatWillYouGet = [
  "Smart text support",
  "Detailed analysis of concepts",
  "Concepts visualized through infographics",
  "Recorded video lectures",
  "Practice assessments",
];
const courseSyllabus = [
  "Introduction to React||15 mins",
  "Components and Props||25 mins",
  "State Management||30 mins",
  "Event Handling||20 mins",
  "API Integration||35 mins",
];

const whoShouldTakeThisCourse = [
  "For teachers",
  "For students",
  "For people",
  "For everyone",
];

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <section className="relative mb-16 flex flex-col items-center justify-center gap-y-8 rounded-b-xl bg-[#f9f6f3] p-4 lg:mb-72 lg:pb-60 lg:pt-8">
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
            Enroll Now For <br className="sm:hidden" /> ₹2999
            <span className="ml-2 inline-block text-xs text-gray-700 line-through sm:text-sm">
              ₹4000
            </span>
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
          className="block aspect-video w-full rounded-xl dark:hidden lg:absolute lg:bottom-0 lg:w-1/2 lg:translate-y-[45%]"
        ></iframe>
      </section>

      <WhatWillYouGetSection items={whatWillYouGet} className="mb-8 lg:mb-16" />

      <SyllabusSection items={courseSyllabus} className="mb-8 lg:mb-16" />

      <WhoShouldTakeThisCourseSection items={whoShouldTakeThisCourse} />
    </>
  );
}
