import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { Project, ProjectQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyPortfolioPageQueryVariables;
  data: MyPortfolioPageQuery;
  query: string;
};

export default function Project(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const project = data.project;

  return (
    <PageWrapper>

      <h1 className="text-5xl font-['Latin_Modern_Roman']">{project.title}</h1>

      {/* Overview */}
      <div className="mt-12 md:flex md:flex-row-reverse gap-x-8">
        <div className="">
          <img
            src={project.overviewImage}
            alt={project.overviewImageAlt}
            className="shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
          />
          <p className="mt-1 text-sm text-gray-700 text-center mx-auto">{project.overviewImageCaption}</p>
        </div>
        <div className="mt-5 md:mt-2 text-gray-800">
          <h2 className="text-3xl font-['Latin_Modern_Roman']">{project.overviewHeading}</h2>
          <div className="mt-4 prose">
            <TinaMarkdown content={project.overviewText} />
          </div>
        </div>
      </div>

      <h2 className="mt-10 text-4xl font-['Latin_Modern_Roman'] text-center">{project.bodyHeading}</h2>

      {project.bodySections?.map((section, idx) => (
        <div className={`md:flex gap-x-8 ${idx % 2 == 0 ? 'md:flex-row-reverse' : ''}`}>
          <div>
            <img
              src={section.image}
              alt={section.imageAlt}
              className="shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
            />
            <p className="mt-1 text-sm text-gray-700 text-center mx-auto">{section.imageCaption}</p>
          </div>
          <div className="mt-5 md:mt-2 text-gray-800">
            <div className="prose">
              <TinaMarkdown content={section.text} />
            </div>
          </div>
        </div>
      ))}

    </PageWrapper>
  );
}
