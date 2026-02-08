import type { Collection } from "tinacms";

export const ServicesPageCollection: Collection = {

  name: "servicesPage",
  label: "Services Page",
  path: "tina/content/ui/pages/services",
  format: "json",

  ui: {
    // router: () => "/services",
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
      name: 'additionalServicesText',
      label: 'Additional services text',
      type: 'rich-text',
    },
    {
      name: 'contactButtonText',
      label: 'Contact button text',
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
      name: 'servicesListHeading',
      label: 'Services heading',
      type: 'string',
    },
    {
      name: 'servicesList',
      label: 'List of services',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.serviceHeading };
        },
      },
      defaultItem: {
        serviceHeading: "Example service",
        serviceDescription: "A description of the service",
      },
      fields: [
        {
          name: 'serviceHeading',
          label: 'Service heading',
          type: 'string',
        },
        {
          name: 'serviceDescription',
          label: 'Service description',
          type: 'rich-text',
        },
        {
          name: 'serviceImage',
          label: 'Service image',
          type: 'image',
        },
        {
          name: 'serviceImageAlt',
          label: 'Service image alt text',
          type: 'string',
        }
      ],
    },

    {
      name: 'workingWithUsHeading',
      label: 'Working with us heading',
      type: 'string',
    },
    {
      name: 'workingWithUsBody',
      label: 'Working with us main text',
      type: 'rich-text',
    },

  ],
};
