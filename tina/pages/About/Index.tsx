import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyAboutPageQuery, MyAboutPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyAboutPageQueryVariables;
  data: MyAboutPageQuery;
  query: string;
};

export default function AboutPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const aboutPage = data.aboutPage;

  const mdLinkComponents = {
    a: (props) => (
      <a href={props.url} className="text-blue-500 font-medium hover:underline hover:text-blue-600 hover:cursor-pointer">{props.children}</a>
    ),
  };

  return (
    <PageWrapper>
      <div>
        <h1 className="text-5xl font-['Latin_Modern_Roman']">{aboutPage.h1}</h1>
        <div className="mt-10 max-w-2xl">
          <div className="myprose">
            <TinaMarkdown content={aboutPage.summary} />
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="sm:hidden mt-6">
        <img
          src={aboutPage.servicesImage}
          alt={aboutPage.servicesImageAlt}
          className="h-60 w-full max-w-md mx-auto object-cover rounded-md"
        />
      </div>

      {/* Services */}
      <div className="mt-8 sm:mt-10 ">
        <h2 className="text-4xl font-['Latin_Modern_Roman']">{aboutPage.servicesHeading}</h2>
        <div className="mt-3 md:flex md:flex-row-reverse gap-x-8">
          <img
            src={aboutPage.servicesImage}
            alt={aboutPage.servicesImageAlt}
            className="hidden md:block shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
          />
          <div className="mt-5 md:mt-2 text-gray-800 max-w-md">
            <div className="myprose">
              <TinaMarkdown content={aboutPage.servicesDescription} components={mdLinkComponents} />
            </div>
            <LinkButton classes="mt-5" href="/services">
              {aboutPage.servicesLinkButtonText}
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-2xl">
        <h2 className="text-4xl font-['Latin_Modern_Roman']">{aboutPage.areaServedHeading}</h2>
        <div className="mt-4 myprose">
          <TinaMarkdown content={aboutPage.areaServedDescription} />
        </div>
        <ul className="mt-5 ml-5 grid grid-cols-1 xxs:grid-cols-2 list-disc">
          {aboutPage.areasServed.map((area) => (
          <li>{area.area}</li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}
