import Hero from "../components/Hero/Hero";
import Business from "./Business/Business";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import ComingSoon from "./ComingSoon/ComingSoon";

import Services from "../components/Services/Services";
import FeaturedWork from "./FeaturedWork/FeaturedWork";
import Transition from "../transitions/transition";

import SpacerMd from "../components/Spacer/Md";

function Page() {
  return (
    <div>
      <ComingSoon />

      {/*   <Hero />

     <SpacerMd/>
        <Business />
      <SpacerMd/>
      <Services />
      <SpacerMd/>
      <About />
      <SpacerMd/>
      <Portfolio />
      <SpacerMd/>
      <FeaturedWork />
      <SpacerMd/>
      <Contact /> */}
    </div>
  );
}

export default Page;
