import type { Collection } from "tinacms";

export const ContactPageCollection: Collection = {

  name: "contactPage",
  label: "Contact Page",
  path: "tina/content/ui/pages/contact",
  format: "json",

  ui: {
    // router: () => "/contact",
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
      name: 'text',
      label: 'Text',
      type: 'string',
    },
    {
      name: 'phoneText',
      label: 'Phone text',
      type: 'string',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string',
    },
    {
      name: 'emailText',
      label: 'Email text',
      type: 'string',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'string',
    },
    {
      name: 'phoneMachineReadable',
      label: 'Machine-readable phone',
      type: 'string',
    },
    {
      name: 'nextStepsText',
      label: 'Next steps text',
      type: 'string',
    },
    {
      name: 'nextStepsBody',
      label: 'Next steps body',
      type: 'rich-text',
    },
  ],
};
