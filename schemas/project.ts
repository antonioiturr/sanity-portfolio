//sanity project schema
/*
* title
* date
* description
* image
* technologies used
* link
* */

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: { required: () => Date; }) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
}