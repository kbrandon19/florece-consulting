import Hero from "../components/Hero/Hero";
import Business from "./Business/Business";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

import Services from "../components/Services/Services";
import FeaturedWork from "./FeaturedWork/FeaturedWork";
import Transition from "../transitions/transition";

function Page() {
  return (
    <div>
      <Transition>
        <Hero />
      </Transition>

      <Business />
      <Services />
      <About />

      <Portfolio />
      <FeaturedWork />
      <Contact />
    </div>
  );
}

export default Page;
