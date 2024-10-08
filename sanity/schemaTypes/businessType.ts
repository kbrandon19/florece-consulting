import { defineField, defineType } from "sanity";

export const businessType = defineType ({
    name:'business',
    title:'Business Info',
    type:'document',
    fields:[
        defineField({
            name:'title',
            type:'string',
            title:'Page Title',
            readOnly:true,
          }),
        defineField({
        name:'image',
        title:'Image',
        type:'image'
    }),
    defineField({
        name:'tagline',
        title:'Tagline',
        type:'string'
    }),
    defineField({
        name:'headline',
        title:'Headline',
        type:'string'
    }),
    defineField({
        name:'blockText',
        title:'Block Text',
        type:'array',
        of: [{type: 'block'}]
    }),
    defineField({
        name:'serviceHeadline',
        title:'Service Headline',
        type:'string'
    }),
    //this will be an array and reference the servicesType in subSchema

    defineField({
        name:'servicesInfo',
        title:'Services',
        type:'array',
      of:[{type:'services'}]
    })

]
})