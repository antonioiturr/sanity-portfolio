/*sanity about me me rich text schema*/

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  
  fields: [
    {
      //photo with hotspot and crop
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
    {
      //sanity rich text editor
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
}
