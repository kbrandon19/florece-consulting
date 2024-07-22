import { defineType, defineField } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      readOnly: true,
    }),
    defineField({
      name: "footerquote",
      title: "Footer Quote",
      type: "string",
      description:'Optional'
    }),
    defineField({
      name: "quoteAuth",
      title: "Footer Quote Author",
      type: "string",
      description:'Optional'
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "socialMediaText",
      title: "Social Media Text",
      type: "string",
    }),

    //this will be an array and will reach out to subSchema
    defineField({
      name: "socialMedia",
      type: "array",
      of: [{ type: "social" }],
    }),
  ],
});
