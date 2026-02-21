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
      <div className="flex flex-col gap-y-5 md:flex-row-reverse mt-6 md:mt-10 px-6 text-gray-700">
        <img
          src={homePage.servicesImage}
          alt={homePage.servicesImageAlt}
          className="shrink-0 w-full max-w-xs h-64 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
        />
        <div className="md:px-8 mx-auto md:mx-0">
          <div className="prose max-w-md text-center md:text-left">
            <TinaMarkdown content={homePage.servicesSummary} />
          </div>
          <div className="mt-8 w-fit mx-auto">
            <LinkButton tinaField={tinaField(homePage, "servicesLinkText")} href="/services">
              {homePage.servicesLinkText}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
