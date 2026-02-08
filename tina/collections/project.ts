import type { Collection } from "tinacms";

export const ProjectCollection: Collection = {

  name: "project",
  label: "Projects",
  path: "tina/content/projects",
  format: "json",

  ui: {
    // router: () => "/portfolio",
    ui: {
      // Use slugified title name as project filename
      filename: {
        readonly: true,
        slugify: (values) => {
          return values.title.toLowerCase().replace(/ /g, '-').replace(/\./g, '')
        },
      },
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Project title',
      type: 'string',
      required: true,
    },
    {
      name: 'summary',
      label: "Summary",
      type: 'rich-text',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Featured image',
      type: 'image',
      required: true,
    },
    {
      name: 'featuredImageAlt',
      label: 'Featured image alt text',
      type: 'string',
      required: true,
    },
  ]
};
