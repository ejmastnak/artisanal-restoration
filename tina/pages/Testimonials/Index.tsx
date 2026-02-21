import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import TestimonialComponent from '@tina/components/Testimonial.tsx'

import type { MyTestimonialsPageQuery, MyTestimonialsPageQueryVariables, Testimonial } from "@tina/__generated__/types";
type Props = {
  variables: MyTestimonialsPageQueryVariables;
  data: MyTestimonialsPageQuery;
  query: string;
  testimonials: Array<Testimonial>,
};

export default function TestimonialsPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const testimonialsPage = data.testimonialsPage;

  const mdLinkComponents = {
    a: (props) => (
      <a href={props.url} className="text-blue-500 font-medium hover:underline no-underline hover:text-blue-600 hover:cursor-pointer">{props.children}</a>
    ),
  };

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(testimonialsPage, "h1")} className="text-5xl font-['Latin_Modern_Roman']">{testimonialsPage.h1}</h1>

      <div data-tina-field={tinaField(testimonialsPage, "description")} className="prose mt-10 max-w-3xl">
        <TinaMarkdown content={testimonialsPage.description} components={mdLinkComponents} />
      </div>

      <ul className="mt-12 ml-5 space-y-8">
        {props.testimonials.map((testimonial, idx) => (
          <li>
            <TestimonialComponent client={testimonial.client} reverse={idx % 2 == 0 ? false : true}>
              <div className="prose">
                <TinaMarkdown content={testimonial.testimonial} />
              </div>
            </TestimonialComponent>
          </li>
        ))}
      </ul>

      <div data-tina-field={tinaField(testimonialsPage, "closingText")} className="prose mt-8 max-w-3xl">
        <TinaMarkdown content={testimonialsPage.closingText} components={mdLinkComponents} />
      </div>

    </PageWrapper>
  );
}
