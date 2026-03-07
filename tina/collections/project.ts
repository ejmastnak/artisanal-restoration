import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const ProjectCollection: Collection = {
  name: "project",
  label: "Portfolio Projects Collection",
  path: "tina/content/projects",
  format: "json",
  ui: {
    router({ document }) {
      return `/portfolio/${document._sys.filename}`;
    },
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors. I suggest a format like \"evelyn-stairs\", \"sunroom\", \"anderson-rot-restoration\", etc.",
    },
  },
  defaultItem: {
    overviewHeading: "About the project",
    writeUpHeading: "The restoration",
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
      name: 'title',
      label: 'Project title',
      type: 'string',
    },
    {
      name: 'summary',
      label: "Summary",
      type: 'rich-text',
    },
    {
      name: 'featuredImage',
      label: 'Featured image',
      description: 'This is the image shown on the main Projects page listing all of your portfolio projects',
      type: 'image',
    },
    {
      name: 'featuredImageAlt',
      label: 'Featured image alt text',
      type: 'string',
    },
    {
      name: 'overviewHeading',
      label: 'Overview heading',
      type: 'string',
    },
    {
      name: 'overviewText',
      label: 'Overview text',
      type: 'rich-text',
    },
    {
      name: 'overviewImage',
      label: 'Overview image',
      description: 'This is the image shown at the top of this project\'s dedicated page. It can, but does not have to, be the same as the featured image shown on the main project page.',
      type: 'image',
    },
    {
      name: 'overviewImageAlt',
      label: 'Overview image alt text',
      type: 'string',
    },
    {
      name: 'overviewImageCaption',
      label: 'Overview image caption',
      type: 'string',
    },
    {
      name: 'galleryHeading',
      label: 'Gallery heading (optional)',
      description: 'Include this field only if this project will have a gallery',
      type: 'string',
    },
    {
      name: 'gallerySections',
      label: 'Gallery images',
      description: 'Include this field only if this project will have a gallery',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item ? item.imageAlt : "Gallery image item" };
        },
      },
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'image',
        },
        {
          name: 'imageAlt',
          label: 'Image alt text',
          type: 'string',
        },
        {
          name: 'imageCaption',
          label: 'Image caption (optional)',
          type: 'string',
        },
      ],
    },
    {
      name: 'writeUpHeading',
      label: 'Write-up heading (optional)',
      description: 'Include this field only if this project will have a write-up',
      type: 'string',
    },
    {
      name: 'writeUpSections',
      label: 'Write-up sections',
      description: 'Include this field only if this project will have a write-up',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.imageCaption };
        },
      },
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'rich-text',
        },
        {
          name: 'image',
          label: 'Image',
          type: 'image',
        },
        {
          name: 'imageAlt',
          label: 'Image alt text',
          type: 'string',
        },
        {
          name: 'imageCaption',
          label: 'Image caption',
          type: 'string',
        },
      ],
    },
  ]
};
