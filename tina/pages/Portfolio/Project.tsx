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

      <h1 data-tina-field={tinaField(project, "title")} className="text-5xl font-['Latin_Modern_Roman']">{project.title}</h1>

      {/* Overview */}
      <div className="mt-12 md:flex md:flex-row-reverse gap-x-8">
        <div className="">
          <img
            data-tina-field={tinaField(project, "overviewImage")}
            src={project.overviewImage}
            alt={project.overviewImageAlt}
            className="shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
          />
          <p data-tina-field={tinaField(project, "overviewImageCaption")} className="mt-1 text-sm text-gray-700 text-center mx-auto max-w-md">{project.overviewImageCaption}</p>
        </div>
        <div className="mt-5 md:mt-2 text-gray-800">
          <h2 data-tina-field={tinaField(project, "overviewHeading")} className="text-3xl font-['Latin_Modern_Roman']">{project.overviewHeading}</h2>
          <div data-tina-field={tinaField(project, "overviewText")} className="mt-4 prose">
            <TinaMarkdown content={project.overviewText} />
          </div>
        </div>
      </div>

      <h2 data-tina-field={tinaField(project, "bodyHeading")} className="mt-10 text-4xl font-['Latin_Modern_Roman'] text-center">{project.bodyHeading}</h2>

      {project.bodySections?.map((section, idx) => (
        <div key={section.image} className={`my-10 md:flex gap-x-8 ${idx % 2 == 0 ? 'md:flex-row-reverse' : ''}`}>
          <div>
            <img
              data-tina-field={tinaField(section, "image")}
              src={section.image}
              alt={section.imageAlt}
              className="shrink-0 w-full h-72 mx-auto max-w-md md:max-w-none md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
            />
            <p data-tina-field={tinaField(section, "imageCaption")} className="mt-1 text-sm text-gray-700 text-center mx-auto">{section.imageCaption}</p>
          </div>
          <div data-tina-field={tinaField(section, "text")} className="mt-5 md:mt-1 text-gray-800 prose text-center mx-auto md:text-left md:mx-0 max-w-xl">
            <TinaMarkdown content={section.text} />
          </div>
        </div>
      ))}

    </PageWrapper>
  );
}
