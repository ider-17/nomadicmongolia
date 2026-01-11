import { ImageIcon } from '@sanity/icons'
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'galleryGroup',
  title: 'Gallery Group',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Group Title',
      type: 'string',
      // description: 'Gallery бүлгийн гарчиг (optional)',
    }),
    defineField({
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      // description: 'Gallery-ийн зургуудын жагсаалт',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'singleImage',
          title: 'Single Image',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Зургийн тайлбар (accessibility)',
            }),
          ],
          preview: {
            select: {
              media: 'image',
              title: 'alt',
            },
          },
        }),
        defineArrayMember({
          type: 'object',
          name: 'doubleImage',
          title: 'Double Image',
          fields: [
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                defineField({
                  type: 'image',
                  name: 'image',
                  title: 'Image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alternative Text',
                      type: 'string',
                    }),
                  ],
                }),
              ],
              validation: (Rule) => Rule.length(2).error('Яг 2 зураг байх ёстой'),
            }),
          ],
          preview: {
            select: {
              image1: 'images.0',
              image2: 'images.1',
            },
            prepare({ image1, image2 }) {
              return {
                title: 'Double Image',
                media: image1 || image2,
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1).error('Хамгийн багадаа 1 item байх ёстой'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      const itemCount = items?.length || 0
      return {
        title: title || 'Gallery Group',
        subtitle: `${itemCount} items`,
      }
    },
  },
})
