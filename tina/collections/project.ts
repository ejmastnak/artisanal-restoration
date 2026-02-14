import type { Collection } from "tinacms";

export const ProjectCollection: Collection = {

  name: "project",
  label: "Portfolio Projects",
  path: "tina/content/projects",
  format: "json",

  ui: {
    router({ document }) {
      return `/portfolio/${document._sys.filename}`;
    },

    // Use slugified title name as project filename
    filename: {
      readonly: true,
      slugify: (values) => {
        return values.title.toLowerCase().replace(/ /g, '-').replace(/\./g, '')
      },
    },

  },
  defaultItem: {
    overviewHeading: "About the project",
    bodyHeading: "The restoration",
  },
  fields: [
    {
      name: "head",
      label: "HTML head",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "string",
        },
      ],
    },
    {
      name: 'title',
      label: 'Project title',
      type: 'string',
    },
    {
      name: 'summary',
      label: "Summary",
      type: 'rich-text',
    },
    {
      name: 'featuredImage',
      label: 'Featured image',
      type: 'image',
    },
    {
      name: 'featuredImageAlt',
      label: 'Featured image alt text',
      type: 'string',
    },
    {
      name: 'overviewHeading',
      label: 'Overview heading',
      type: 'string',
    },
    {
      name: 'overviewText',
      label: 'Overview text',
      type: 'rich-text',
    },
    {
      name: 'overviewImage',
      label: 'Overview image',
      type: 'image',
    },
    {
      name: 'overviewImageAlt',
      label: 'Overview image alt text',
      type: 'string',
    },
    {
      name: 'overviewImageCaption',
      label: 'Overview image caption',
      type: 'string',
    },
    {
      name: 'bodyHeading',
      label: 'Body heading',
      type: 'string',
    },
    {
      name: 'bodySections',
      label: 'Body sections',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.imageCaption };
        },
      },
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'rich-text',
        },
        {
          name: 'image',
          label: 'Image',
          type: 'image',
        },
        {
          name: 'imageAlt',
          label: 'Image alt text',
          type: 'string',
        },
        {
          name: 'imageCaption',
          label: 'Image caption',
          type: 'string',
        },
      ],
    },
  ]
};
