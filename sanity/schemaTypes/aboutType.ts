import { defineType, defineField } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "bodyTextOne",
      title: "Body Text One",
      type: "string",
    }),
    defineField({
      name: "bodyTextTwo",
      title: "Body Text Two",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
    }),
  ],
});
