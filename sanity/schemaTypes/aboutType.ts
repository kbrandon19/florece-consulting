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
      name:'blockText',
      title:'Block Text',
      type:'array',
      of: [{type: 'block'}]
  }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
    }),
  ],
});
