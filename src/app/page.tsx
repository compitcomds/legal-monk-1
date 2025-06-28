import AboutSection from "./components/Home/AboutSection";
import SubscriptionComponent from "./components/Home/SubscriptionComponent";
import CourseCardCarousel from "./components/course/CardCarousel";
import ComunityCourses from "./components/Home/CommunityCourses";

export default function Home() {
  return (
    <>
      <div className="mb-16 min-h-screen space-y-10 bg-white lg:mb-28 lg:space-y-28">
        <SubscriptionComponent />
        <ComunityCourses />
        <AboutSection />
      </div>
      <CourseCardCarousel />
    </>
  );
}
