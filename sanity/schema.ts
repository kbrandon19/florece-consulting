import { type SchemaTypeDefinition } from 'sanity'

import { header } from './schemaTypes/header'
import { hero } from './schemaTypes/hero'
import { businessType } from './schemaTypes/businessType'
import { aboutType } from './schemaTypes/aboutType'

import { featuredWorkType } from './schemaTypes/featuredWorkType'
import { contactType } from './schemaTypes/contactType'
import { footerType } from './schemaTypes/footerType'
import { comingsoonType } from './schemaTypes/comingSoonType'
import {bannerType} from './schemaTypes/bannerType'
 import { symbolismType } from './schemaTypes/symbolismType'


//located in SubSchema
import { headerLinks } from './schemaTypes/subSchema/headerLinks'
import { servicesType } from './schemaTypes/subSchema/servicesType'

import { featuredType } from './schemaTypes/subSchema/featuredType'
import { socialMediaType } from './schemaTypes/subSchema/socialMediaType'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [comingsoonType,hero,bannerType,header,headerLinks,businessType,symbolismType,servicesType,aboutType,featuredWorkType,featuredType,contactType,footerType,socialMediaType],
}
