// Add a type of all the data that will be passed from Sanity

import { Image } from "sanity";

//Coming Soon
export interface IntroComingSoon{
  title:string;
  headline:string;
  logo:Image;
}


//Header

export interface Navigation {
  title: string;
  logo: Image;
  contactBtn: string;
  navlinks: subNav[];
}

export interface subNav {
  linkname: string;
}

// Hero

export interface HeroLanding {
  title: string;
  text: string;
}

// Business //

export interface Consulting {
  image: Image;
  tagline: string;
  headline: string;
  bodyTextOne: string;
  bodyTextTwo: string;
  serviceHeadline: string;
  servicesInfo: servicesArr[];
}

export interface servicesArr {
  serviceTitle: string;
  serviceDescription: string;
}
// Footer //

export interface FooterSec {
  footerquote: string;
  tag: string;
  email: string;
  socialMediaText: string;
  socialMedia: socialAcc[];
}

export interface socialAcc {
  name: string;
  url: string;
  icon: Image;
}

// About //

export interface aboutSection {
  title: string;
  bodyTextOne: string;
  bodyTextTwo: string;
  image: Image;
}

// Portfolio //

export interface portfolioWork {
  portfolioArr: any;
  headingText: string;
  workInfo: portfolioArr[];
}

export interface portfolioArr {
  workTitle: string;
  publishDate: string;
  workDescription: string;
  workLink: string;
}

// Featured Media //

export interface featuredMediaSection {
  headlineText:string;
  mediaSource: media[];
}

export interface media {
  mediaName: string;
  mediaImage: Image;
  mediaLink: string;
}

// Contact //

export interface contactSection {
  contactTitle: string;
  contactHeading: string;
  contactImage: Image;
}