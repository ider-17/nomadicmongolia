import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import aboutSection from './aboutSection'
import slideCarousel from './slideCarousel'
import aboutContentBlock from './aboutContentBlock'
import aboutPage from './aboutPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, aboutSection, slideCarousel, aboutContentBlock, aboutPage],
}
