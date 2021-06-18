export default {
  name: 'arts',
  title: 'Art',
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
          { value: 'Available', title: 'Available' },
          { value: 'Unavailable', title: 'Unavailable' },
          { value: 'Works in Progress', title: 'Works in Progress' },
          { value: 'Featured Artist', title: 'Featured Artist' },
        ],
      },
    },
  ],
};
