import { defineField, defineType } from "sanity";

export const symbolismType = defineType({
  name: "symbolism",
  title: "Florece Symbolism",
  type: "document",
  fields: [
    defineField({
      name:'title',
      type:'string',
      title:'Page Title',
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
