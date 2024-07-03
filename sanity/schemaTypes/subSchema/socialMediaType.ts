import { defineField, defineType } from "sanity";

export const socialMediaType = defineType({
        name:'social',
        title:'Social Media Icons',
        type:'object',
        fields: [
        {
            name:'name',
            title:'socialMediaPlatform',
            type:'string'
        },
       {
            name:'url',
            title:'SocialMediaLink',
            type:'string',
            description:'Format for url : websitename.com/username'
       },
        {
            name:'icon',
            title:'SocialMediaIcon',
            type:'image'
        }
    ]
})