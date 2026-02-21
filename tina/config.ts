import { defineConfig } from "tinacms";

import { HomePageCollection } from "@tina/collections/ui/pages/index.ts";
import { AboutPageCollection } from "@tina/collections/ui/pages/about/index.ts";
import { ContactPageCollection } from "@tina/collections/ui/pages/contact/index.ts";
import { PortfolioPageCollection } from "@tina/collections/ui/pages/portfolio/index.ts";
import { ServicesPageCollection } from "@tina/collections/ui/pages/services/index.ts";
import { TestimonialsPageCollection } from "@tina/collections/ui/pages/testimonials/index.ts";

import { NavCollection } from "@tina/collections/ui/shared/nav.ts";
import { FooterCollection } from "@tina/collections/ui/shared/footer.ts";

import { ProjectCollection } from "@tina/collections/project.ts";
import { TestimonialCollection } from "@tina/collections/testimonial.ts";

import { TINA_MEDIA_ROOT, TINA_PUBLIC_FOLDER, TINA_SUPPORTED_IMAGE_MIMES } from "@src/assets/config.ts";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: TINA_PUBLIC_FOLDER,
      mediaRoot: TINA_MEDIA_ROOT,
    },
    accept: TINA_SUPPORTED_IMAGE_MIMES,
  },
  schema: {
    collections: [
      HomePageCollection,
      AboutPageCollection,
      ServicesPageCollection,
      PortfolioPageCollection,
      TestimonialsPageCollection,
      ContactPageCollection,

      NavCollection,
      FooterCollection,

      ProjectCollection,
      TestimonialCollection,
    ],
  },
});
