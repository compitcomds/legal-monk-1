import React from "react";
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
import AllCourses from "@/app/courses/_components/AllCourses";
import fetchCourses from "@/app/courses/request";

export default async function HomeCourseCards() {
  const courses = await fetchCourses();
  return (
    <div className="" id="community">
      <div className="mb-6">
        <h2
          className={`${recoleta.className} font-serif text-[34px] font-semibold text-blue-600 lg:text-7xl 2xl:text-7xl`}
        >
          No Agency! No Commission!
        </h2>
        <p
          className={`${poppins.className} ml-2 mt-4 text-lg lg:text-xl 2xl:text-2xl`}
        >
          <span className="font-semibold">Community Courses –</span> I’m
          building a community of Indians studying abroad to support other
          Indian students on their journey. If you’d like to contribute or be
          part of this initiative, please get in touch.
        </p>
      </div>

      <AllCourses courses={courses} />
    </div>
  );
}
