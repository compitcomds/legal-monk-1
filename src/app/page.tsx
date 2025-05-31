import AboutSection from "./components/Home/AboutSection";
import FooterSection from "./components/Home/FooterSection";
import HelpSection from "./components/Home/HelpSection";
import Navbar from "./components/Home/Navbar";
// import PodcastSection from "./components/Home/PodcastSection";
// import ProductShowcase from "./components/Home/ProductShowcase";
// import SubscribeSection from "./components/Home/SubscribeSection";
import SubscriptionComponent from "./components/Home/SubscriptionComponent";
import VideoSlider from "./components/Home/VideoSlider";
import ComunityCourses from "./components/Home/CommunityCourses";

export default function Home() {
  return (
    <>
    <div className="bg-white px-5 2xl:px-60  pt-3 md:pt-5">
    <Navbar /></div>
      <div className="bg-white px-5 2xl:px-60 min-h-screen space-y-10 lg:space-y-28 mb-16 lg:mb-28">
        
        <SubscriptionComponent />
        <ComunityCourses />
        {/* <HelpSection /> */}
        <AboutSection />        
      </div>
      
      <VideoSlider />

      {/* <div className="bg-white px-5 2xl:px-60">
        <PodcastSection />
        <SubscribeSection />
        <ProductShowcase />
      </div> */}
      <FooterSection />
    </>
  );
}
