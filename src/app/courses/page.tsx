import AllCourses from "./_components/AllCourses";
import fetchCourses from "./request";

export const revalidate = 300;

export default async function AllCoursesPage() {
  const courses = await fetchCourses();
  return (
    <>
      <div className="mb-16 flex items-center rounded-b-xl bg-[#f9f6f3] px-5 py-16 font-title md:px-20 lg:mb-28 lg:rounded-b-3xl lg:px-24 lg:py-28">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row-reverse">
          <div className="relative w-full lg:w-1/2">
            <img
              src="https://placehold.co/400x200"
              className="w-full"
              alt="All Courses Cover Image"
            />
          </div>
          <div className="flex w-full flex-col text-center md:text-start lg:w-1/2">
            <h1 className="mt-6 text-2xl font-bold uppercase text-black md:text-6xl">
              Our Courses
            </h1>
            <p className="mt-2 font-sans text-sm leading-5 text-black md:text-lg lg:mt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ad, eius!
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16 px-4 lg:mb-28">
        <h1 className="mb-4 text-3xl font-bold lg:my-10 lg:text-5xl 2xl:text-6xl">
          All Courses
        </h1>
        <AllCourses courses={courses} />
      </div>
    </>
  );
}
