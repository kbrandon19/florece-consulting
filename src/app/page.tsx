export const revalidate = 0;

import Hero from "../components/Hero/Hero";
import Business from "./Business/Business";
import About from "./About/About";
import Contact from "./Contact/Contact";
import ComingSoon from "./ComingSoon/ComingSoon";

import Services from "../components/Services/Services";
import FeaturedWork from "./FeaturedWork/FeaturedWork";
import Banner from "../components/Banner/banner";
import Booking from "../components/Booking/booking";

import SpacerLg from "../components/Spacer/Lg";
import SpacerMd from "../components/Spacer/Md";

function Page() {
  return (
    <div>
      {/* <ComingSoon />  */}

      <Hero />
      <Banner />
      <Business />
      <Services />
      <Booking />
      <About />
      <FeaturedWork />
      <SpacerLg />
      <Contact />
    </div>
  );
}

export default Page;
