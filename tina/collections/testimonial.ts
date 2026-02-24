import type { Collection } from "tinacms";

export const TestimonialCollection: Collection = {
  name: "testimonial",
  label: "Testimonials Collection",
  path: "tina/content/testimonials",
  format: "json",
  ui: {
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors. I suggest a format based on the reviewer's name like \"john-doe\", \"jane-smith\", etc..",
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
