import type { Collection } from "tinacms";

export const AboutPageCollection: Collection = {

  name: "aboutPage",
  label: "About Page",
  path: "tina/content/ui/pages/about",
  format: "json",

  ui: {
    // router: () => "/about",
    allowedActions: {
      create: false,
      delete: false,
    },
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
      name: "h1",
      label: "Heading",
      type: "string",
    },
    {
      name: 'summary',
      label: 'Summary',
      type: 'rich-text',
    },
    {
      name: 'servicesHeading',
      label: 'Services heading',
      type: 'string',
    },
    {
      name: 'servicesDescription',
      label: 'Services description',
      type: 'rich-text',
    },
    {
      name: 'servicesLinkButtonText',
      label: 'Services link button text',
      type: 'string',
    },
    {
      name: 'servicesImage',
      label: 'Services image',
      type: 'image',
    },
    {
      name: 'servicesImageAlt',
      label: 'Services image alt text',
      type: 'string',
    },
    {
      name: 'areaServedHeading',
      label: 'Area served heading',
      type: 'string',
    },
    {
      name: 'areaServedDescription',
      label: 'Area served description',
      type: 'rich-text',
    },
    {
      name: 'areasServed',
      label: 'List of areas served',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.area };
        },
      },
      defaultItem: {
        area: "Example city, TN",
      },
      fields: [
        {
          name: 'area',
          label: 'Area',
          type: 'string',
        },
      ],
    },
  ],
};
