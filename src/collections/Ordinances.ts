import type { CollectionConfig } from 'payload'

export const Ordinances: CollectionConfig = {
  slug: 'ordinances',
  orderable: true,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'location',
  },
  fields: [
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'boldText',
          type: 'checkbox',
          admin: {
            width: '25%',
          },
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          admin: {
            width: '25%',
          },
        },
      ],
    },
    {
      name: 'ordinance',
      type: 'group', // required
      interfaceName: 'Meta', // optional
      fields: [
        {
          name: 'ordinanceText',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'ordinanceLink',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'ordinanceLinkText',
          type: 'text',
          defaultValue: 'Ordinance',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'penalties',
      type: 'group', // required
      interfaceName: 'Meta', // optional
      fields: [
        {
          name: 'penaltiesTextRich',
          type: 'richText',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'penaltiesText',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'penaltiesLink',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'penaltiesLinkText',
              type: 'text',
              defaultValue: 'Source',
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}
