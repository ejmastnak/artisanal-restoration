import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import Pillbox from '@tina/components/Pillbox.tsx'

import type { MyPortfolioPageQuery, MyPortfolioPageQueryVariables, Project } from "@tina/__generated__/types";
type Props = {
  variables: MyPortfolioPageQueryVariables;
  data: MyPortfolioPageQuery;
  query: string;
  projects: Array<Project>;
};

export default function PortfolioPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const portfolioPage = data.portfolioPage;

  return (
    <PageWrapper>

      <h1 data-tina-field={tinaField(portfolioPage, "h1")} className="text-5xl font-['Latin_Modern_Roman']">{portfolioPage.h1}</h1>

      <div data-tina-field={tinaField(portfolioPage, "summary")} className="mt-10 prose max-w-xl">
        <TinaMarkdown content={portfolioPage.summary} />
      </div>

      {/* List of projects */}
      <div className="mt-12 flex flex-col gap-y-24 md:gap-y-28 max-w-5xl mx-auto">
        {props.projects.map((project, idx) => (
          <div key={project.id} data-tina-field={tinaField(project, "project")} className={`md:flex gap-x-10 ${idx %2 == 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-gray-800 max-w-lg mx-auto">
              <h2 className="text-center text-3xl font-['Latin_Modern_Roman']"><a href={`/portfolio/${project._sys.filename}`} className="hover:underline">{project.title}</a></h2>

              {/* Mobile image */}
              <a href={`/portfolio/${project._sys.filename}`} className="w-full h-fit">
                <img
                  src={project.featuredImage}
                  alt={project.featuredImageAlt}
                  className="md:hidden my-8 shrink-0 w-full max-w-sm h-64 xs:h-72 mx-auto object-cover rounded-md hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md"
                />
              </a>

              <div className="mt-8 prose text-center md:text-left">
                <TinaMarkdown content={project.summary} />
              </div>

              {(project.writeUpSections || project.gallerySections) && 
                <p className="mt-2 font-semibold text-gray-700">
                  {(project.writeUpSections && project.gallerySections) && 
                    <Pillbox data-tina-field={tinaField(portfolioPage, "includesGalleryAndWriteUpText")}>{portfolioPage.includesGalleryAndWriteUpText}</Pillbox>
                  }
                  {(project.writeUpSections && !project.gallerySections) && 
                    <Pillbox data-tina-field={tinaField(portfolioPage, "includesWriteUpText")}>{portfolioPage.includesWriteUpText}</Pillbox>
                  }
                  {(project.gallerySections && !project.writeUpSections) && 
                    <Pillbox data-tina-field={tinaField(portfolioPage, "includesGalleryText")}>{portfolioPage.includesGalleryText}</Pillbox>
                  }
                </p>
              }

              <div className="mt-8 w-fit block mx-auto">
                <LinkButton data-tina-field={tinaField(portfolioPage, "linkButtonText")} href={`/portfolio/${project._sys.filename}`}>
                  {portfolioPage.linkButtonText}
                </LinkButton>
              </div>
            </div>
            <a href={`/portfolio/${project._sys.filename}`} className="w-full h-fit">
              <img
                src={project.featuredImage}
                alt={project.featuredImageAlt}
                className="mt-5 hidden md:block shrink-0 w-full max-w-md h-64 md:h-80 mx-auto md:max-w-xs lg:max-w-sm lg:h-80 object-cover rounded-md hover:outline hover:outline-2 hover:outline-gray-300 hover:shadow-md"
              />
            </a>
          </div>
        ))}
      </div>

    </PageWrapper>
  );
}
