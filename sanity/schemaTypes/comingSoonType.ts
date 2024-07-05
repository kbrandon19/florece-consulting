import { defineType, defineField } from "sanity";

export const comingsoonType = defineType({
  name: "comingsoon",
  title: "ComingSoon",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
        name: "logo",
        title: "Logo",
        type: "image",
      }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    })
  ],
});
