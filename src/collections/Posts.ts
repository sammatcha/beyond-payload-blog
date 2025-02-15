import type { CollectionConfig } from 'payload'
import slugify from 'slugify'
import { Media } from './Media'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title', 'slug'],
  },

  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          hasMany: true,
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [
          ({ data }) => {
            console.log('BEFORE VALIDATE: Data before saving post:', data) // Debugging

            if (data && data.title && !data.slug) {
              data.slug = slugify(data.title, { lower: true, strict: true })
            }
            console.log('Generated slug:', data && data.slug) // Check if slug is created

            return data && data.slug // Return the data
          },
        ],
      },
    },
  ],
}
