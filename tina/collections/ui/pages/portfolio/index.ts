import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const PortfolioPageCollection: Collection = {

  name: "portfolioPage",
  label: "Portfolio Page",
  path: "tina/content/ui/pages/portfolio",
  format: "json",

  ui: {
    router: () => "/portfolio",
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
      name: "includesGalleryText",
      label: "\"Includes gallery\" text",
      description: "Text shown to indicate a featured project includes an image gallery",
      type: "string",
    },
    {
      name: "includesWriteUpText",
      label: "\"Includes write-up\" text",
      description: "Text shown to indicate a featured project includes a detailed write-up",
      type: "string",
    },
    {
      name: "includesGalleryAndWriteUpText",
      label: "\"Includes gallery and write-up\" text",
      description: "Text shown to indicate a featured project includes both an image gallery and a detailed writeup",
      type: "string",
    },
    {
      name: "linkButtonText",
      label: "Link button text",
      description: "The text to display on links to see more about a featured project.",
      type: "string",
    },
    {
      name: 'featuredProjects',
      label: 'Featured projects',
      description: 'Use this field to add and rearrange featured projects',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.project?.replace(/^tina\/content\/projects\//, "") };
        },
      },
      fields: [
        {
          name: 'project',
          label: 'Project',
          type: 'reference',
          collections: ['project'],
          // Display the `title` field of the referenced project
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
  ],
};
