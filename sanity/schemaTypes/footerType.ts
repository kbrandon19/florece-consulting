import { defineType, defineField } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "",
      readOnly: true,
      initialValue: "Footer Section",
    }),
    defineField({
      name: "footerquote",
      title: "Footer Quote",
      type: "string",
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
