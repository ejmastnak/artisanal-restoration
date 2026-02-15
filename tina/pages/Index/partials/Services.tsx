import { tinaField } from "tinacms/dist/react";
import type { MyHomePageQuery, } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: MyHomePageQuery;
};

export default function Services({ homePage, }: Props) {
  return (
    <div>
      <h2 className="text-center text-4xl md:text-5xl font-['Latin_Modern_Roman']">{homePage.servicesHeading}</h2>
      <div className="md:flex mt-4 md:mt-12 px-6 text-gray-700">
        <img
          src={homePage.servicesImage}
          alt={homePage.servicesImageAlt}
          className="h-56 w-60 mx-auto md:w-96 md:h-96 object-cover rounded-md"
        />
        <div className="md:px-8">
          <div className="prose max-w-md">
            <TinaMarkdown content={homePage.servicesSummary} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "servicesLinkText")} classes="mt-5" href="/services">
            {homePage.servicesLinkText}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
