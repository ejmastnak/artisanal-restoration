import type { Collection } from "tinacms";

export const TestimonialsPageCollection: Collection = {

  name: "testimonialsPage",
  label: "Testimonials Page",
  path: "tina/content/ui/pages/testimonials",
  format: "json",

  ui: {
    router: () => "/testimonials",
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
      name: 'h1',
      label: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'rich-text',
    },
    // Note: no featuredTestimonials because all are featured by default
    {
      name: 'closingText',
      label: 'Closing text',
      type: 'rich-text',
    },
  ],
};
