export default {
  name: 'arts',
  title: 'Arts',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'medium',
      type: 'string',
    },
    {
      name: 'dimension',
      type: 'string',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'status',
      type: 'string',
      options: {
        list: [
          { value: 'Available Works', title: 'Available Works' },
          { value: 'Sold Work', title: 'Sold Work' },
          { value: 'Works in Progress', title: 'Works in Progress' },
          { value: 'Featured Artiste', title: 'Featured Artiste' },
        ],
      },
    },
  ],
};
