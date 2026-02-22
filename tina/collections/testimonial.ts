import type { Collection } from "tinacms";

export const TestimonialCollection: Collection = {

  name: "testimonial",
  label: "Testimonials Collection",
  path: "tina/content/testimonials",
  format: "json",

  ui: {
    filename: {
      readonly: true,
      slugify: (values) => {
        const client = values?.client ?? '';
        return client
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      },
    },
  },


  fields: [
    {
      name: 'testimonial',
      label: 'Testimonial text',
      type: 'rich-text',
      required: true,
    },
    {
      name: 'client',
      label: "Name of client",
      type: 'string',
      required: true,
    },
  ]
};
