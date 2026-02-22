import { tinaField } from "tinacms/dist/react";
import type { HomePage } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: HomePage
};

export default function About({ homePage }: Props) {
  return (
    <div>
      <h2 data-tina-field={tinaField(homePage, "aboutHeading")} className="text-center text-4xl md:text-5xl font-['Latin_Modern_Roman']">{homePage.aboutHeading}</h2>
      <div className="flex flex-col gap-y-5 md:flex-row-reverse mt-6 md:mt-10 px-6 text-gray-700">
        <img
          data-tina-field={tinaField(homePage, "aboutImage")}
          src={homePage.aboutImage}
          alt={homePage.aboutImageAlt}
          className="shrink-0 w-full max-w-xs h-64 xxs:h-72 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
        />
        <div className="md:px-8 mx-auto md:mx-0">
          <div data-tina-field={tinaField(homePage, "aboutDescription")} className="prose max-w-md text-center md:text-left">
            <TinaMarkdown content={homePage.aboutDescription} />
          </div>
          <div className="mt-6 w-fit mx-auto">
            <LinkButton data-tina-field={tinaField(homePage, "aboutLinkText")} tinaField={tinaField(homePage, "aboutLinkText")} href="/about">
              {homePage.aboutLinkText}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
