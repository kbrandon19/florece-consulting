import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
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
  ],
});
