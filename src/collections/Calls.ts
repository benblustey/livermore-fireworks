import type { CollectionConfig } from 'payload'

export const Calls: CollectionConfig = {
  slug: 'calls',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'eventDate',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'eventDate',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
              displayFormat: 'd MMM yyyy',
            },
            width: '50%',
          },
        },
        {
          name: 'incidentNumber',
          type: 'number',
          admin: {
            readOnly: true,
            width: '50%',
          },
        },
      ],
    },
  ],
}
