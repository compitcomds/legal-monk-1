import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import two from "../../../assets/pwp.png";
import yellowUnderline from "@/assets/underlines/yellow.png";
import { recoleta, poppins } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "CV FOR LAW INTERNSHIP || LAW INTERNSHIP CV FOR BEGINNERS",
    date: "June 18, 2024",
    image: two,
    link: "https://youtu.be/ufOEAI-Tuok",
  },
  {
    id: 2,
    title:
      "Work with Tech-Sustainable Startup I Apply for Off-campus Internships for college students I PWP",
    date: "March 1, 2024",
    image: two,
    link: "/",
  },
  {
    id: 3,
    title:
      "How to become Data Privacy & Technology Lawyer | Data Protection and Privacy Laws",
    date: "April 23, 2024",
    image: two,
    link: "/",
  },

  {
    id: 4,
    title: "CV FOR LAW INTERNSHIP || LAW INTERNSHIP CV FOR BEGINNERS",
    date: "June 18, 2024",
    image: two,
    link: "https://youtu.be/ufOEAI-Tuok",
  },
  {
    id: 5,
    title:
      "Work with Tech-Sustainable Startup I Apply for Off-campus Internships for college students I PWP",
    date: "March 1, 2024",
    image: two,
    link: "/",
  },
  {
    id: 6,
    title:
      "How to become Data Privacy & Technology Lawyer | Data Protection and Privacy Laws",
    date: "April 23, 2024",
    image: two,
    link: "/",
  },
];

export default function CourseCardCarousel() {
  return (
    <>
      <Carousel id="free-resources" className="mb-16 lg:mb-28">
        <div className="mb-6 flex flex-col px-5 md:flex-row md:items-center md:justify-between">
          <h2
            className={`${recoleta.className} text-[34px] font-bold lg:text-7xl 2xl:text-7xl`}
          >
            Dive Into These <br className="hidden md:block" />
            <span className="text-blue-600">Resourceful</span>
            <span className="relative">
              Videos
              <Image
                src={yellowUnderline}
                className="absolute left-2 right-0 top-5 w-60 lg:top-10"
                alt="Underline | Dive Into These Resourceful Videos | Legal Startup Wala"
              />
            </span>
          </h2>
          <div className="flex items-center gap-x-4">
            <CarouselPrevious className="static h-auto w-auto translate-x-0 translate-y-0 bg-yellow-400 px-3 py-3 text-2xl transition duration-300 hover:bg-blue-600 hover:text-white lg:px-6 lg:py-6">
              <MoveLeft className="h-6 w-6" strokeWidth={3} />
            </CarouselPrevious>
            <CarouselNext className="static h-auto w-auto translate-x-0 translate-y-0 bg-yellow-400 px-3 py-3 text-2xl transition duration-300 hover:bg-blue-600 hover:text-white lg:px-6 lg:py-6">
              <MoveRight className="h-6 w-6" strokeWidth={3} />
            </CarouselNext>
          </div>
        </div>

        <CarouselContent>
          {courses.map((course) => (
            <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="group mt-5 overflow-clip rounded-2xl bg-[#f9f6f3] p-2 transition-shadow duration-300 hover:bg-[#fd976d] hover:shadow-lg lg:my-10">
                <div className="flex flex-col transition duration-300">
                  <Link href={course.link} target="_blank">
                    <Image
                      src={course.image}
                      alt={course.title}
                      className="mb-4 rounded-2xl object-cover"
                    />
                  </Link>
                  <div className="flex flex-col p-4 lg:p-6">
                    <h3
                      className={`${poppins.className} font-poppins mb-2 text-lg font-semibold lg:text-2xl 2xl:text-3xl`}
                    >
                      {course.title}
                    </h3>
                    <p className="mb-4 text-gray-500 group-hover:text-gray-100">
                      {course.date}
                    </p>
                    <Link
                      href={course.link}
                      target="_blank"
                      className="inline-block text-blue-500 hover:underline group-hover:text-white"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
