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

      <div data-tina-field={tinaField(portfolioPage, "summary")} className="prose mt-10 max-w-xl mb-12 pb-12 border-b border-gray-300 ">
        <TinaMarkdown content={portfolioPage.summary} />
      </div>

      <div className="flex flex-col gap-y-32">
        {portfolioPage.featuredProjects.map((project, idx) => (
          <div key={project.project.id} data-tina-field={tinaField(project, "project")} className={`md:flex gap-x-8 ${idx %2 == 0 ? 'md:flex-row-reverse' : ''}`}>
            <a href={`/portfolio/${project.project._sys.filename}`} className="hover:shadow-md hover:outline hover:outline-1 hover:outline-gray-300 w-fit h-fit rounded-md overflow-clip">
              <img
                src={project.project.featuredImage}
                alt={project.project.featuredImageAlt}
                className="shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
              />
            </a>
            <div className="mt-8 text-gray-800 max-w-xl">
              <h2 className="text-center mb-5 text-3xl font-['Latin_Modern_Roman']"><a href={`/portfolio/${project.project._sys.filename}`} className="hover:underline">{project.project.title}</a></h2>
              <div className="prose">
                <TinaMarkdown content={project.project.summary} />
              </div>
              <div className="mt-5 w-fit block mx-auto">
                <LinkButton href={`/portfolio/${project.project._sys.filename}`}>
                  Read more
                </LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>

    </PageWrapper>
  );
}
