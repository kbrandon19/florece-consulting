import { defineType } from "sanity";

export const servicesType = defineType ({
    name:'services',
    title:'services',
    type:'object',
    fields:[
        {
            name:'serviceIcon',
            title:'Service Icon',
            type:'image'
        },
       {
            name:'serviceTitle',
            title:'Service Title',
            type:'string'
        },
        {
            name:'serviceDescription',
            title:'Service Description',
            type:'string'
        },
    ]
})