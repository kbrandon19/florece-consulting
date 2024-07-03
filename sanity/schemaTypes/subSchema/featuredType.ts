import { defineType } from "sanity";

export const featuredType = defineType ({
    name:'featuredMedia',
    title:'Featured Media',
    type:'object',
    fields:[
        {
            name:'mediaName',
            title:'Media name',
            type:'string'
        },
       {
            name:'mediaImage',
            title:'Media Image',
            type:'image',
            description:'Recommended minimum width of 100px.'
        },
        {
            name:'mediaLink',
            title:'Media Link',
            type:'string'
        }
    ]
})