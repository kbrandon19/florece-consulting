import { defineField, defineType } from "sanity";


export const header = defineType({
  name:'header',
  title:'Header',
  type:'document',
  fields:[
    defineField({
      name:'title',
      type:'string',
      title:'Page Title',
      readOnly:true,

    }),
    defineField({
      name:'logo',
      title:'Brand Logo',
      type:'image'
    }),
    defineField({
      name:'name',
      title:'Brand Name',
      type:'string'
    }),
    
    //this section will be an array and reference headerlinks.ts
    defineField({
      name:'navlinks',
      title:'Navigation Links',
      type:'array',
      of:[{type:'link'}]

    }),
    defineField({
      name:'contactBtn',
      title:'Contact Button',
      type:'string'
    })
  ]
})