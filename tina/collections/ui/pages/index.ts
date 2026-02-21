import type { Collection } from "tinacms";

export const HomePageCollection: Collection = {

  name: "homePage",
  label: "Home Page",
  path: "tina/content/ui/pages/index",
  format: "json",

  ui: {
    router: () => "/",
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    // -------------------------------------------------------- //
    // Head
    // -------------------------------------------------------- //
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

    // -------------------------------------------------------- //
    // Hero
    // -------------------------------------------------------- //
    {
      name: "heroHeading",
      label: "Heading",
      type: "string",
    },
    {
      name: "heroDescription",
      label: "Description",
      type: "rich-text",
    },
    {
      name: 'heroImage',
      label: 'Main image',
      type: 'image',
    },
    {
      name: 'heroImageAlt',
      label: 'Main image alt text',
      type: 'string',
    },
    {
      name: 'heroButtonText',
      label: 'Button text',
      type: 'string',
    },


    // -------------------------------------------------------- //
    // About partial
    // -------------------------------------------------------- //
    {
      name: 'aboutHeading',
      label: 'About heading',
      type: 'string',
    },
    {
      name: 'aboutDescription',
      label: 'About description',
      type: 'rich-text',
    },
    {
      name: 'aboutImage',
      label: 'About section image',
      type: 'image',
    },
    {
      name: 'aboutImageAlt',
      label: 'About section image alt text',
      type: 'string',
    },
    {
      name: 'aboutLinkText',
      label: 'About page link text',
      type: 'string',
    },

    // -------------------------------------------------------- //
    // Services partial
    // -------------------------------------------------------- //
    {
      name: 'servicesHeading',
      label: 'Services heading',
      type: 'string',
    },
    {
      name: 'servicesSummary',
      label: 'Services summary text',
      type: 'rich-text',
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
      name: 'servicesLinkText',
      label: 'Services link text',
      type: 'string',
    },

    // -------------------------------------------------------- //
    // Testimonials partial
    // -------------------------------------------------------- //
    {
      name: 'testimonialsHeading',
      label: 'Testimonials heading',
      type: 'string',
    },
    {
      name: 'testimonialsDescription',
      label: 'Testimonials description',
      type: 'string',
    },
    {
      name: 'testimonialsLinkText',
      label: 'Testimonials page link text',
      type: 'string',
    },
    {
      name: 'featuredTestimonials',
      label: 'Featured testimonials',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.testimonial };
        },
      },
      fields: [
        {
          name: 'testimonial',
          label: 'Testimonial',
          type: 'reference',
          collections: ['testimonial'],
          // Display the `client` field of the referenced testimonial
          ui: {
            optionComponent: (
              props: {
                client: string,
              },
              _internalSys: { path: string }
            ) => {
              return props.client;
            }
          }
        }
      ],
    }

  ],
};
