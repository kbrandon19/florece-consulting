import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Heading",
  type: "document",
  fields: [
    defineField({
      name:'title',
      type:'string',
      title:'Page Title',
      readOnly:true,
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
