import type { Collection } from "tinacms";

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
