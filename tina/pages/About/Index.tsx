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
        <h1 data-tina-field={tinaField(aboutPage, "h1")} className="text-5xl font-['Latin_Modern_Roman']">{aboutPage.h1}</h1>
        <div className="mt-10 max-w-2xl">
          <div data-tina-field={tinaField(aboutPage, "summary")} className="prose">
            <TinaMarkdown content={aboutPage.summary} />
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="md:hidden mt-6">
        <img
          data-tina-field={tinaField(aboutPage, "servicesImage")}
          src={aboutPage.servicesImage}
          alt={aboutPage.servicesImageAlt}
          className="h-60 w-full max-w-md mx-auto object-cover rounded-md"
        />
      </div>

      {/* Services */}
      <div className="mt-8 sm:mt-10 ">
        <h2 data-tina-field={tinaField(aboutPage, "servicesHeading")} className="text-4xl font-['Latin_Modern_Roman']">{aboutPage.servicesHeading}</h2>
        <div className="mt-3 md:flex md:flex-row-reverse gap-x-8">
          <img
            data-tina-field={tinaField(aboutPage, "servicesImage")}
            src={aboutPage.servicesImage}
            alt={aboutPage.servicesImageAlt}
            className="hidden md:block shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
          />
          <div className="mt-5 md:mt-2 text-gray-800 max-w-md">
            <div data-tina-field={tinaField(aboutPage, "servicesDescription")} className="prose">
              <TinaMarkdown content={aboutPage.servicesDescription} components={mdLinkComponents} />
            </div>
            <LinkButton data-tina-field={tinaField(aboutPage, "servicesLinkButtonText")} className="mt-5" href="/services">
              {aboutPage.servicesLinkButtonText}
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Area served */}
      <div className="mt-8 max-w-2xl">
        <h2 data-tina-field={tinaField(aboutPage, "areaServedHeading")} className="text-4xl font-['Latin_Modern_Roman']">{aboutPage.areaServedHeading}</h2>
        <div data-tina-field={tinaField(aboutPage, "areaServedDescription")} className="mt-4 prose">
          <TinaMarkdown content={aboutPage.areaServedDescription} />
        </div>
        <ul className="mt-5 ml-5 grid grid-cols-1 xxs:grid-cols-2 list-disc prose">
          {aboutPage.areasServed.map((area) => (
            <li key={area.area} data-tina-field={tinaField(area, "area")}>{area.area}</li>
          ))}
        </ul>
      </div>

      {/* Portfolio */}
      <div className="mt-12 pt-12 border-t border-gray-200 max-w-4xl">
        <h2 data-tina-field={tinaField(aboutPage, "portfolioHeading")} className="text-4xl font-['Latin_Modern_Roman'] text-center">{aboutPage.portfolioHeading}</h2>

        <div data-tina-field={tinaField(aboutPage, "portfolioText")} className="mt-5 prose max-w-xl mx-auto text-center">
          <TinaMarkdown content={aboutPage.portfolioText} components={mdLinkComponents} />
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
          {aboutPage.portfolioFeaturedProjects.map((project, idx) => (
            <a key={project.project.id} data-tina-field={tinaField(project, "project")} href={`/portfolio/${project.project._sys.filename}`} className={`rounded-md overflow-clip hover:outline hover:outline-2 hover:outline-orange-900 hover:shadow-lg ${idx > 0 ? 'hidden md:block' : ''}`}>
              <img
                src={project.project.featuredImage}
                alt={project.project.featuredImageAlt}
                className={`h-60 xxxs:h-72 md:h-60 w-full mx-auto max-w-md object-cover`} 
              />
            </a>
          ))}
        </div>

        <div className="w-fit mx-auto">
          <LinkButton data-tina-field={tinaField(aboutPage, "portfolioButtonText")} className="mt-10" href="/portfolio">
            {aboutPage.portfolioButtonText}
          </LinkButton>
        </div>

      </div>

    </PageWrapper>
  );
}
