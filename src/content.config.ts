import { defineCollection, z } from "astro:content";
import client from "../tina/__generated__/client";

const projects = defineCollection({
  loader: async () => {
    const response = await client.queries.projectConnection();

    return response.data.projectConnection.edges
      ?.filter((edge) => !!edge?.node)
      .map((edge) => {
        const node = edge!.node!;

        return {
          ...node,
          id: node._sys.relativePath.replace(/\.json$/, ""),
          tinaInfo: node._sys,
        };
      });
  },

  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    head: z.object({
      title: z.string(),
      description: z.string(),
    }),
    title: z.string().nullish(),
    summary: z.any().nullish(),
    featuredImage: z.string().nullish(),
    featuredImageAlt: z.string().nullish(),
    overviewHeading: z.any().nullish(),
    overviewText: z.any().nullish(),
    overviewImage: z.string().nullish(),
    overviewImageAlt: z.string().nullish(),
    overviewImageCaption: z.string().nullish(),
    writeUpHeading: z.string().nullish(),
    writeUpSections: z.array(
      z.object({
        text: z.any().nullish(),
        image: z.string().nullish(),
        imageAlt: z.string().nullish(),
        imageCaption: z.string().nullish(),
      })
    ).nullish(),
  }),
});

export const collections = { projects, };
