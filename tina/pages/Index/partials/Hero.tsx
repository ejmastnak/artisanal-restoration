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
      className="px-5 sm:px-8 pt-8 sm:pt-12 md:pt-24 pb-28 bg-[#46382f] w-full text-sc-white" 
    >

      {/* Mobile */}
      <div className="md:hidden mx-auto w-fit">
        <h1 className="text-center sm:text-left text-4xl font-['Latin_Modern_Roman']" data-tina-field={tinaField(homePage, "heroHeading")}>{homePage.heroHeading}</h1>
        <img src={homePage.heroImage} alt={homePage.heroImageAlt} data-tina-field={tinaField(homePage, "heroImage")} className="my-5 mx-auto sm:mx-0 w-full max-w-[200px] sm:max-w-[300px] h-64 rounded object-cover object-right" />
        <div className="max-w-lg text-center sm:text-left">
          <div data-tina-field={tinaField(homePage, "heroDescription")} className="mt-5 myprosedark myprose-condensed">
            <TinaMarkdown content={homePage.heroDescription} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "heroButtonText")} className="mt-5" href="/about">
            {homePage.heroButtonText}
          </LinkButton>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex max-w-6xl w-fit mx-auto gap-x-12 xl:gap-x-16">
        <img src={homePage.heroImage} alt={homePage.heroImageAlt} data-tina-field={tinaField(homePage, "heroImage")} className="h-80 rounded object-cover object-right" />
        <div className="max-w-lg">
          <h1 className="text-5xl font-['Latin_Modern_Roman']" data-tina-field={tinaField(homePage, "heroHeading")}>{homePage.heroHeading}</h1>
          <div data-tina-field={tinaField(homePage, "heroDescription")} className="my-10 myprosedark myprose-condensed">
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
