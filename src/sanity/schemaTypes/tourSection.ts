export default {
    name: 'tourSection',
    type: 'object',
    title: 'Tour Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title'
        },
        {
            name: 'content',
            type: 'text',
            title: 'Content'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'imagePosition',
            type: 'string',
            title: 'Image Position',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio'
            }
        }
    ]
}
