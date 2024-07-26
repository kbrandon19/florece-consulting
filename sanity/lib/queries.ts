// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;

//Include all the groq query from each page

//About
export const ABOUT_QUERY = groq`*[_type == 'about'][0]{title,blockText,'image':image.asset->url}`;

// Business

//Coming Soon

//Contact

//FeaturedWork

// Symbolism

// Banner

//Booking 

// Header

// Hero

//Services

// Footer
