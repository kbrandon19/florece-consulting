import { defineType } from "sanity";

export const workType = defineType ({
    name:'work',
    title:'Work',
    type:'object',
    fields:[ 
        {
        name:'workTitle',
        title:'Work Title',
        type:'string'
    },
    {
        name:'publishDate',
        title:'Publish Date',
        type:'string'
    },
    {
        name:'workDescription',
        title:'Work Description',
        type:'string'
    },
    {
        name:'workLink',
        title:'Work Link',
        type:'url'
    }
]
}) 