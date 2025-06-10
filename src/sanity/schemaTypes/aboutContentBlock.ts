import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutContentBlock',
    title: 'About Content Block',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 6,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'imagePosition',
            title: 'Image Position',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
            },
            initialValue: 'right',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
})
