export default {
    name: 'aboutSection',
    title: 'About Section',
    type: 'document',
    fields: [
        {
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
        },
    ],
}
