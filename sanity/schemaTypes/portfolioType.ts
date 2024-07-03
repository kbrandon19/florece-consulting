import { defineField, defineType } from "sanity";

export const portfolioType = defineType ({
    name:'portfolio',
    title:'Portfolio',
    type:'document',
    fields:[ defineField({
        name:'headingText',
        title:'Heading Text',
        type:'string'
    }),

    //this will be an array that will pull from WorkType in subSchema
    defineField({
        name:'workInfo',
        title:'Work History',
        type:'array',
        of:[{type:'work'}]
    })
]
}) 