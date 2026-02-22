import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyServicesPageQuery, MyServicesPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyServicesPageQueryVariables;
  data: MyServicesPageQuery;
  query: string;
};

export default function ServicesPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const servicesPage = data.servicesPage;

  const mdLinkComponents = {
    a: (props) => (
      <a href={props.url} className="text-blue-500 font-medium hover:underline hover:text-blue-600 hover:cursor-pointer">{props.children}</a>
    ),
  };

  const mdListItemsLeft = {
    ul: (props) => (
      <ul className="text-left">{props.children}</ul>
    ),
  };

  return (
    <PageWrapper>

      <h1 data-tina-field={tinaField(servicesPage, "h1")} className="text-5xl font-['Latin_Modern_Roman']">{servicesPage.h1}</h1>

      <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:flex-row-reverse gap-y-8 md:gap-x-16">
        <div className="max-w-xl">
          <div data-tina-field={tinaField(servicesPage, "summary")} className="prose">
            <TinaMarkdown content={servicesPage.summary} />
          </div>
          {/* Desktop contact button */}
          <LinkButton data-tina-field={tinaField(servicesPage, "contactButtonText")} className="my-5 hidden md:inline-flex" href="/contact">{servicesPage.contactButtonText}</LinkButton>
        </div>
        <img 
          data-tina-field={tinaField(servicesPage, "servicesImage")}
          src={servicesPage.servicesImage}
          alt={servicesPage.servicesImageAlt}
          className="mx-auto object-cover rounded-md w-full max-w-md h-80 md:h-96"
        />
      </div>

      {/* Mobile contact button */}
      <div className="my-8 mx-auto w-fit md:hidden">
        <LinkButton data-tina-field={tinaField(servicesPage, "contactButtonText")} href="/contact">{servicesPage.contactButtonText}</LinkButton>
      </div>

      {/* Featured services */}
      <div className="mt-20">
        <h2 data-tina-field={tinaField(servicesPage, "servicesListHeading")} className="text-4xl text-center  font-['Latin_Modern_Roman']">{servicesPage.servicesListHeading}</h2>
        <div className="mt-12 flex flex-col gap-y-20 md:gap-y-28 max-w-5xl mx-auto">
          {servicesPage.servicesList.map((service, idx) => (
            <div key={service.name} className={`md:flex gap-x-10 ${idx %2 == 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="text-gray-800 max-w-lg mx-auto">
                <h3 data-tina-field={tinaField(service, "name")} className="text-center text-2xl font-['Latin_Modern_Roman']">
                  {service.name}
                </h3>
                <div data-tina-field={tinaField(service, "description")} className="mt-5 prose text-center md:text-left">
                  <TinaMarkdown content={service.description} components={mdListItemsLeft} />
                </div>
              </div>
              <img
                data-tina-field={tinaField(service, "image")}
                src={service.image}
                alt={service.imageAlt}
                className="mt-5 shrink-0 w-full max-w-md h-64 mx-auto md:max-w-xs lg:max-w-sm lg:h-80 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Working with Artisanal Restoration */}
      <div className="mt-20">
        <h2 data-tina-field={tinaField(servicesPage, "workingWithUsHeading")} className="text-4xl font-['Latin_Modern_Roman']">{servicesPage.workingWithUsHeading}</h2>
        <div data-tina-field={tinaField(servicesPage, "workingWithUsBody")} className="mt-10 prose">
          <TinaMarkdown content={servicesPage.workingWithUsBody} components={mdLinkComponents} />
        </div>
      </div>

    </PageWrapper>
  );
}
