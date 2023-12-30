//sanity work experience schema


export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
    //from date to date or present
    {
      name: 'fromDate',
      title: 'From Date',
      type: 'date',
      validation: (Rule: { required: () => Date; }) => Rule.required(),
    },
    {
      name: 'toDate',
      title: 'To Date',
      type: 'date',
    },
    {
      name: 'present',
      title: 'Present',
      type: 'boolean',
      validation: (Rule: { required: () => boolean; }) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
  ],
}