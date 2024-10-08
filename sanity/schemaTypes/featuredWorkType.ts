import { defineType, defineField } from "sanity";

export const featuredWorkType = defineType({
  name: "featured",
  title: "Featured Work",
  type: "document",
  fields: [

    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      readOnly: true,
   
    }),
    defineField({
      name: "headlineText",
      title: "Headline Text",
      type: "string",
    }),
    defineField({
      name: "mediaSource",
      title: "Media Source",
      type: "array",
      of: [{ type: "featuredMedia" }],
    }),
  ],
});
