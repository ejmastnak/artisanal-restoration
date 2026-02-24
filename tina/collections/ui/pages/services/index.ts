import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const ServicesPageCollection: Collection = {

  name: "servicesPage",
  label: "Services Page",
  path: "tina/content/ui/pages/services",
  format: "json",

  ui: {
    router: () => "/services",
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "head",
      label: "HTML head",
      description: CMS_HTML_HEAD_FIELD_DESCRIPTION, 
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          description: CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION,
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          description: CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION,
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
          name: 'name',
          label: 'Name of service',
          type: 'string',
        },
        {
          name: 'description',
          label: 'Description of service',
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
