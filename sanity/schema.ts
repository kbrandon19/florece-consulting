import { type SchemaTypeDefinition } from 'sanity'

import { header } from './schemaTypes/header'
import { hero } from './schemaTypes/hero'
import { businessType } from './schemaTypes/businessType'
import { aboutType } from './schemaTypes/aboutType'
import { portfolioType } from './schemaTypes/portfolioType'
import { featuredWorkType } from './schemaTypes/featuredWorkType'
import { contactType } from './schemaTypes/contactType'
import { footerType } from './schemaTypes/footerType'


//located in SubSchema
import { headerLinks } from './schemaTypes/subSchema/headerLinks'
import { servicesType } from './schemaTypes/subSchema/servicesType'
import { workType } from './schemaTypes/subSchema/workType'
import { featuredType } from './schemaTypes/subSchema/featuredType'
import { socialMediaType } from './schemaTypes/subSchema/socialMediaType'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,header,headerLinks,businessType,servicesType,aboutType,portfolioType,workType,featuredWorkType,featuredType,contactType,footerType,socialMediaType],
}
