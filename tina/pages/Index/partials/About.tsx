import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: HomePageQuery
};

export default function About({ homePage }: Props) {
  return (
    <div>
      <h2 className="text-center text-4xl md:text-5xl font-['Latin_Modern_Roman']">{homePage.aboutHeading}</h2>
      <div className="md:flex md:flex-row-reverse mt-4 md:mt-10 px-6  text-gray-700">
        <img
          src={homePage.aboutImage}
          alt={homePage.aboutImageAlt}
          className="h-56 w-60 mx-auto md:w-96 md:h-96 object-cover rounded-md"
        />
        <div className="md:px-8">
          <div className="myprose max-w-md">
            <TinaMarkdown content={homePage.aboutDescription} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "aboutLinkText")} className="mt-5" href="/about">
            {homePage.aboutLinkText}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
