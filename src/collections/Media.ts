import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'center',
      },
      {
        name: 'small',
        width: 100,
        height: 100,
      },
      {
        name: 'medium',
        width: 400,
        height: 400,
      },
      {
        name: 'large',
        width: 800,
        height: 800,
      },
    ],

  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },

  ],

}
