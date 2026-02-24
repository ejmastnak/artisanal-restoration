import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const AboutPageCollection: Collection = {

  name: "aboutPage",
  label: "About Page",
  path: "tina/content/ui/pages/about",
  format: "json",

  ui: {
    router: () => "/about",
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
      name: 'servicesHeading',
      label: 'Services heading',
      type: 'string',
    },
    {
      name: 'servicesDescription',
      label: 'Services description',
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
      name: 'servicesLinkButtonText',
      label: 'Services link button text',
      type: 'string',
    },
    {
      name: 'areaServedHeading',
      label: 'Area served heading',
      type: 'string',
    },
    {
      name: 'areaServedDescription',
      label: 'Area served description',
      type: 'rich-text',
    },
    {
      name: 'areasServed',
      label: 'List of areas served',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.area };
        },
      },
      defaultItem: {
        area: "Example city, TN",
      },
      fields: [
        {
          name: 'area',
          label: 'Area',
          type: 'string',
        },
      ],
    },
    {
      name: 'portfolioHeading',
      label: 'Portfolio heading',
      type: 'string',
    },
    {
      name: 'portfolioText',
      label: 'Portfolio text',
      type: 'rich-text',
    },
    {
      name: 'portfolioFeaturedProjects',
      label: 'Featured projects',
      description: 'Pick three projects—the layout is designed with three columns to feature three projects.',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.project };
        },
      },
      fields: [
        {
          name: 'project',
          label: 'Project',
          type: 'reference',
          collections: ['project'],
          ui: {
            optionComponent: (
              props: {
                title: string,
              },
              _internalSys: { path: string }
            ) => {
              return props.title;
            }
          }
        }
      ],
    },
    {
      name: 'portfolioButtonText',
      label: 'Portfolio button text',
      type: 'string',
    },
  ],
};
