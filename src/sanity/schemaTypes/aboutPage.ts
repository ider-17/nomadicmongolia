import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
        }),
        defineField({
            name: 'sections',
            title: 'Content Sections',
            type: 'array',
            of: [{ type: 'aboutContentBlock' }],
        }),
    ],
})
