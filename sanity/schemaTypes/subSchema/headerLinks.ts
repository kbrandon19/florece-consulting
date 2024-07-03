import { defineType } from "sanity";


export const headerLinks = defineType({
    name:'link',
    title:'link',
    type:'object',
    fields:[ 
       {
            name:'linkname',
            title:'Link Name',
            type:'string'
        }
    ],


}) 