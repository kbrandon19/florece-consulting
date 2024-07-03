import { defineType, defineField } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      readOnly: true,
      initialValue: "Contact Section",
    }),
    defineField({
      name: "contactTitle",
      type: "string",
    }),
    defineField({
      name: "contactHeading",
      type: "string",
    }),
    defineField({
      name: "contactImage",
      type: "image",
    }),
  ],
});
