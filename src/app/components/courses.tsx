import Link from "next/link";

const courses = [
  {
    id: "12",
    image: {
      url: "https://placehold.co/600x400",
      alternativeText: "Course Image",
    },
    title: "Course Title",
    handle: "slug",
  },
];

export default async function AllCourses() {
  return (
    <div className="mb-16 px-4 lg:mb-28">
      <h1 className="mb-4 text-3xl font-bold lg:my-10 lg:text-5xl 2xl:text-6xl">
        All Courses
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {courses.map((course) => (
          <div key={course.id} className="relative rounded-lg border p-4">
            <Link href={`/courses/${course.handle}`}>
              <img
                src={course.image.url}
                alt={course.image.alternativeText || course.title}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
            </Link>
            <h2 className="mb-2 text-xl font-semibold lg:px-4 lg:text-2xl">
              {course.title}
            </h2>
            <Link
              href={`/courses/${course.handle}`}
              className="font-bold text-yellow-600 hover:text-yellow-800 lg:px-4 lg:text-xl"
            >
              View Course &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
