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

  return (
    <PageWrapper>

      <h1 data-tina-field={tinaField(servicesPage, "h1")} className="text-5xl font-['Latin_Modern_Roman']">{servicesPage.h1}</h1>

      <div className="mt-16 md:mt-20 md:flex md:flex-row-reverse md:gap-x-16">
        <div className="mt-5 max-w-xl">
          <div data-tina-field={tinaField(servicesPage, "summary")} className="prose">
            <TinaMarkdown content={servicesPage.summary} />
          </div>
          <LinkButton data-tina-field={tinaField(servicesPage, "contactButtonText")} className="my-5" href="/contact">{servicesPage.contactButtonText}</LinkButton>
        </div>
        <img 
          data-tina-field={tinaField(servicesPage, "servicesImage")}
          src={servicesPage.servicesImage}
          alt={servicesPage.servicesImageAlt}
          className="mx-auto object-cover rounded-md w-full max-w-md h-80 md:h-96"
        />
      </div>

      <div className="mt-24">
        <h2 data-tina-field={tinaField(servicesPage, "servicesListHeading")} className="text-4xl text-center  font-['Latin_Modern_Roman']">{servicesPage.servicesListHeading}</h2>
        <div className="mt-12">
          {servicesPage.servicesList.map((service, idx) => (
            <div className={`my-12 md:flex gap-x-8 ${idx %2 == 0 ? 'md:flex-row-reverse' : ''}`}>
              <img
                data-tina-field={tinaField(service, "serviceImage")}
                src={service.serviceImage}
                alt={service.serviceImageAlt}
                className="shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
              />
              <div className="mt-8 text-gray-800">
                <h3 data-tina-field={tinaField(service, "serviceHeading")} className="text-center mb-5 text-3xl font-['Latin_Modern_Roman']">
                  {service.serviceHeading}
                </h3>
                <div data-tina-field={tinaField(service, "serviceDescription")} className="max-w-xl prose">
                  <TinaMarkdown content={service.serviceDescription} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Working with Artisanal Restoration */}
      <div className="mt-20">
        <h2 data-tina-field={tinaField(servicesPage, "workingWithUsHeading")} className="text-4xl font-['Latin_Modern_Roman']">{servicesPage.workingWithUsHeading}</h2>
        <div data-tina-field={tinaField(servicesPage, "workingWithUsBody")} className="mt-5 prose">
          <TinaMarkdown content={servicesPage.workingWithUsBody} components={mdLinkComponents} />
        </div>
      </div>

    </PageWrapper>
  );
}
