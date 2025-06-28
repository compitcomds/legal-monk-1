import { recoleta } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import orangeUnderline from "@/assets/underlines/orange.png";
import WhatWillYouGetSection from "./_components/WhatWillYouGet";
import SyllabusSection from "./_components/SyllabusSection";
import WhoShouldTakeThisCourseSection from "./_components/WhoShouldTakeThisCourse";
import fetchCourse from "./request";
import Custom404 from "@/components/404";

export const revalidate = 300;

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await fetchCourse(slug);
  if (!course) return <Custom404 />;

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
            {course.meta_data.title}
          </h1>
          <p className="mb-4 mt-2 text-center font-sans text-sm leading-5 text-black md:text-lg lg:mt-8">
            {course.meta_data.excerpt}
          </p>

          <a
            href={course.meta_data.checkout_url}
            target="_blank"
            className="mx-auto block w-full rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-black hover:bg-yellow-600 md:w-[40%] lg:text-xl"
          >
            Enroll Now For <br className="sm:hidden" /> ₹
            {course.meta_data.sale_price}
            <span className="ml-2 inline-block text-xs text-gray-700 line-through sm:text-sm">
              ₹{course.meta_data.price}
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
          src={course.meta_data.trailer_url}
          className="block aspect-video w-full rounded-xl dark:hidden lg:absolute lg:bottom-0 lg:w-1/2 lg:translate-y-[45%]"
        ></iframe>
      </section>

      <WhatWillYouGetSection
        items={course.meta_data.what_will_you_get}
        className="mb-8 lg:mb-16"
      />

      <SyllabusSection
        items={course.meta_data.course_syllabus}
        className="mb-8 lg:mb-16"
      />

      <WhoShouldTakeThisCourseSection
        items={course.meta_data.who_should_take_this_course}
      />
    </>
  );
}
