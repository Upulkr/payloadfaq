import type { CollectionConfig } from 'payload'

export const NewFaqs: CollectionConfig = {
  slug: 'new-faqs-collection',
  fields: [
    // You might want a slug or identifier for the FAQ itself
    {
      name: 'slug',
      type: 'text',
      label: 'FAQ Identifier',
      required: true,
      unique: true,
    },
    {
      name: 'translations',
      type: 'array',
      label: 'Translations for this FAQ',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'FAQ Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'FAQ Description',
          required: false,
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Steps',
          minRows: 1,
          required: false,
          fields: [
            {
              name: 'step',
              type: 'text',
              label: 'Step',
              required: false,
            },
          ],
        },

        {
          name: 'language',
          type: 'select',
          label: 'Language',
          required: true,
          options: [
            {
              label: 'English',
              value: 'en',
            },
            {
              label: 'Tamil',
              value: 'ta',
            },
            {
              label: 'Sinhala',
              value: 'si',
            },
          ],
        },
        {
          name: 'videoThumbnail',
          type: 'text',

          label: 'image url',
        },
        {
          name: 'videoUrl',
          type: 'text',
          label: 'Video URL',
        },
      ],
    },
  ],
}
