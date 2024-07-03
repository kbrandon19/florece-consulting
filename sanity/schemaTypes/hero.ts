import { defineField, defineType } from "sanity";

export const hero = defineType({
    name:'hero',
    title:'Hero Heading',
    type:'document',
    fields:[ 
        defineField({
            name:'title',
            type:'string',
            readOnly:true,
            title:'Hero Landing'
          }),
        defineField({
        name:'text',
        title:'Text',
        type:'string'})]

})