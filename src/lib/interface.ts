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
  name:string;
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
  image:Image;
}

//Banner
export interface Banner{
  text:string;
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
  serviceIcon: Image;
  serviceTitle: string;
  serviceDescription: string;
}

//Symbolism
export interface Symbol {
  title: string;
  text: string;
  image: Image;
}
// Footer //

export interface FooterSec {
  footerquote: string;
  quoteAuth: string;
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


// Booking Calendar

export interface  bookingCal{
  title:string;
  text:string;
  button:string;
}