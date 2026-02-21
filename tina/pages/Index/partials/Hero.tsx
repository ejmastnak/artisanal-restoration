import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: HomePageQuery
};

export default function Hero({ homePage }: Props) {

  const components = {
    p: (props) => (
      <p className="mt-2">{props.children}</p>
    ),
  };

  return (
    <div
      className="px-5 sm:px-8 pt-8 sm:pt-12 md:pt-24 pb-32 md:pb-48 bg-theme-brown w-full text-white clip-wave-bottom-condensed md:clip-wave-bottom"
    >

      {/* Mobile */}
      <div className="md:hidden mx-auto w-fit">
        <h1 className="text-center text-4xl xs:text-5xl font-['Latin_Modern_Roman']" data-tina-field={tinaField(homePage, "heroHeading")}>{homePage.heroHeading}</h1>
        <img src={homePage.heroImage} alt={homePage.heroImageAlt} data-tina-field={tinaField(homePage, "heroImage")} className="my-8 mx-auto w-full max-w-md h-60 rounded object-cover" />
        <div className="max-w-lg text-center">
          <div data-tina-field={tinaField(homePage, "heroDescription")} className="mt-5 max-w-md">
            <TinaMarkdown content={homePage.heroDescription} />
          </div>
          <div className="w-fit mx-auto">
            <LinkButton tinaField={tinaField(homePage, "heroButtonText")} className="mt-6" href="/about">
              {homePage.heroButtonText}
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex max-w-6xl w-fit mx-auto gap-x-12 xl:gap-x-16 items-center">
        <img src={homePage.heroImage} alt={homePage.heroImageAlt} data-tina-field={tinaField(homePage, "heroImage")} className="h-80 rounded object-cover max-w-sm lg:max-w-md" />
        <div className="max-w-lg">
          <h1 className="text-5xl font-['Latin_Modern_Roman']" data-tina-field={tinaField(homePage, "heroHeading")}>{homePage.heroHeading}</h1>
          <div data-tina-field={tinaField(homePage, "heroDescription")} className="my-10">
            <TinaMarkdown content={homePage.heroDescription} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "heroButtonText")} href="/about">
            {homePage.heroButtonText}
          </LinkButton>
        </div>
      </div>

    </div>


  );

}
