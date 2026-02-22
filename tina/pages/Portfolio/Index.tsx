import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyPortfolioPageQuery, MyPortfolioPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyPortfolioPageQueryVariables;
  data: MyPortfolioPageQuery;
  query: string;
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

      <h1 data-tina-field={tinaField(portfolioPage, "heading")} className="text-5xl font-['Latin_Modern_Roman']">{portfolioPage.h1}</h1>

      <div data-tina-field={tinaField(portfolioPage, "summary")} className="mt-10 prose max-w-xl">
        <TinaMarkdown content={portfolioPage.summary} />
      </div>

      {/* List of projects */}
      <div className="mt-12 flex flex-col gap-y-24 md:gap-y-28 max-w-5xl mx-auto">
        {portfolioPage.featuredProjects.map((project, idx) => (
          <div key={project.project.id} data-tina-field={tinaField(project, "project")} className={`md:flex gap-x-10 ${idx %2 == 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-gray-800 max-w-lg mx-auto">
              <h2 className="text-center text-3xl font-['Latin_Modern_Roman']"><a href={`/portfolio/${project.project._sys.filename}`} className="hover:underline">{project.project.title}</a></h2>

              {/* Mobile image */}
              <img
                src={project.project.featuredImage}
                alt={project.project.featuredImageAlt}
                className="md:hidden my-8 shrink-0 w-full max-w-sm h-64 xs:h-72 mx-auto object-cover rounded-md"
              />

              <div className="my-8 prose text-center md:text-left">
                <TinaMarkdown content={project.project.summary} />
              </div>
              <div className="w-fit block mx-auto">
                <LinkButton href={`/portfolio/${project.project._sys.filename}`}>
                  Read more
                </LinkButton>
              </div>
            </div>
            <img
              src={project.project.featuredImage}
              alt={project.project.featuredImageAlt}
              className="mt-5 hidden md:block shrink-0 w-full max-w-md h-64 md:h-80 mx-auto md:max-w-xs lg:max-w-sm lg:h-80 object-cover rounded-md"
            />
          </div>
        ))}
      </div>

    </PageWrapper>
  );
}
