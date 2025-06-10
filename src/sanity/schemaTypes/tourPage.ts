export default {
    name: 'tourPage',
    type: 'document',
    title: 'Tour Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Page Title'
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Sections',
            of: [{ type: 'tourSection' }]
        }
    ]
}
