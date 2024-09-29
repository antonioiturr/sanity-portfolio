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
      name: 'companyWebsite',
      title: 'Company Website',
      type: 'url',
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
      name: 'explicitDuration',
      title: 'Explicit Duration',
      type: 'string',
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
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: { required: () => string; }) => Rule.required(),
    },
  ],
}
