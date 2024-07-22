import { defineField, defineType } from "sanity";

export const calendarType = defineType ({
    name:'calendar',
    title:'Calendar Info',
    type:'document',
    fields:[
        defineField({
            name:'title',
            type:'string',
            title:'Headline Title',
          }),
          defineField({
            name:'text',
            type:'string',
            title:'Body Text'
          }),
          defineField({
            name:'button',
            type:'string',
            title:'Button Text'
          })

]
})