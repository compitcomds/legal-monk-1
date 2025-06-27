import AboutSection from "./components/Home/AboutSection";
import FooterSection from "./components/Home/FooterSection";
import Navbar from "@/components/nav/Navbar";
import SubscriptionComponent from "./components/Home/SubscriptionComponent";
import VideoSlider from "./components/Home/VideoSlider";
import ComunityCourses from "./components/Home/CommunityCourses";

export default function Home() {
  return (
    <>
      <div className="bg-white px-5 pt-3 md:pt-5 2xl:px-60">
        <Navbar />
      </div>
      <div className="mb-16 min-h-screen space-y-10 bg-white px-5 lg:mb-28 lg:space-y-28 2xl:px-60">
        <SubscriptionComponent />
        <ComunityCourses />
        <AboutSection />
      </div>

      <VideoSlider />
      <FooterSection />
    </>
  );
}
