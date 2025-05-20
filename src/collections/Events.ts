import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'length',
      type: 'number',
      required: true,
    },
    {
      name: 'src',
      type: 'text',
      required: true,
    },
    {
      name: 'friendlyDate',
      type: 'text',
      required: true,
    },
    {
      name: 'epoch',
      type: 'number',
      required: true,
    },
    {
      name: 'starred',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'approved',
      type: 'checkbox',
      required: true,
    },
  ],
}

// "length": 10.300011,
// "src": "front_yard-1732723278.mp4",
// "friendlyDate": "24-11-27--08-01-18",
// "epoch": 1732723278,
// "starred": false,
// "approved": false
