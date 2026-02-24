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
      name: 'featuredProjects',
      label: 'Featured projects',
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
    }
  ],
};
