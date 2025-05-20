import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
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
              displayFormat: 'd MMM yyyy h:mm aa',
            },
            width: '50%',
          },
        },
        {
          name: 'epoch',
          type: 'number',
          required: true,
          admin: {
            readOnly: true,
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'length',
          type: 'number',
          admin: {
            readOnly: true,
            width: '50%',
          },
        },
        {
          name: 'src',
          type: 'text',
          required: true,
          admin: {
            readOnly: true,
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'starred',
          type: 'checkbox',
          required: true,
          admin: {
            width: '25%',
          },
        },
        {
          name: 'approved',
          type: 'checkbox',
          required: true,
          admin: {
            width: '25%',
          },
        },
      ],
    },
  ],
}

// "length": 10.300011,
// "src": "front_yard-1732723278.mp4",
// "friendlyDate": "24-11-27--08-01-18",
// "epoch": 1732723278,
// "starred": false,
// "approved": false
