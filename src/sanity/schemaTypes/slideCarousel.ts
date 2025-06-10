export default {
    name: 'carouselSlide',
    title: 'Carousel Slide',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'bgImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'btnText',
            title: 'Button Text',
            type: 'string',
        },
    ],
}
