import type { Collection } from "tinacms";

export const TestimonialCollection: Collection = {

  name: "testimonial",
  label: "Testimonials",
  path: "tina/content/testimonials",
  format: "json",

  ui: {
    ui: {
      // Use slugified reviewer name as testimonial filename
      filename: {
        readonly: true,
        slugify: (values) => {
          return values.testimonialReviewer.toLowerCase().replace(/ /g, '-').replace(/\./g, '')
        },
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
