import type { Collection } from "tinacms";

export const FooterCollection: Collection = {

  name: "footer",
  label: "Footer",
  path: "tina/content/ui/shared/footer",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
      required: true,
    },
    {
      name: "tagline",
      label: "Tagline",
      type: "string",
      required: true,
    },
    {
      name: "company",
      label: "Company name",
      type: "string",
      required: true,
    },
    {
      name: "address1",
      label: "Street address",
      type: "string",
      required: true,
    },
    {
      name: "address2",
      label: "City, state, zip",
      type: "string",
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'string',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string',
      required: true,
    },
    {
      name: 'phoneMachineReadable',
      label: 'Phone in machine-readable format',
      type: 'string',
      required: true,
    },
  ],
};
