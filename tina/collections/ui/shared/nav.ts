import type { Collection } from "tinacms";

export const NavCollection: Collection = {

  name: "nav",
  label: "Nav",
  path: "tina/content/ui/shared/nav",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "navLinks",
      label: "Nav Links",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.text };
      },
      defaultItem: {
        href: "/example",
        text: "Example",
      },
      fields: [
        {
          name: "href",
          label: "href",
          type: "string",
          required: true,
        },
        {
          name: "text",
          label: "Text",
          type: "string",
          required: true,
        },
      ],
    }
  ],
};
