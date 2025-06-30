import Link from "next/link";
import { type CourseType } from "../request";
import CourseThumbnail from "./CourseThumbnail";

export default async function AllCourses({
  courses,
}: {
  courses: CourseType[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {courses.map((course) => (
        <div key={course.handle} className="relative rounded-lg border p-4">
          <Link href={`/courses/${course.handle}`}>
            <CourseThumbnail
              imageId={course.meta_data.thumbnail}
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />
          </Link>
          <Link href={`/courses/${course.handle}`} className="w-fit">
            <h2 className="mb-4 text-xl font-semibold w-fit hover:text-blue-500 lg:px-4 lg:text-2xl">
              {course.meta_data.title}
            </h2>
          </Link>
          <div className="group flex flex-col gap-3 overflow-clip sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/courses/${course.handle}`}
              className="z-50 bg-white py-2 pl-3 font-bold text-yellow-600 hover:text-yellow-800 sm:py-2.5 lg:text-xl"
            >
              View Course &rarr;
            </Link>
            <Link
              href={course.meta_data.checkout_url}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-yellow-600 px-4 py-2 text-sm font-semibold text-white transition duration-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:px-6 sm:py-2.5  lg:text-base"
            >
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
