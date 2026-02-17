import { tinaField } from "tinacms/dist/react";
import type { MyHomePageQuery, } from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Testimonial from '@tina/components/Testimonial.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'

type Props = {
  homePage: MyHomePageQuery;
};

export default function Testimonials({ homePage, }: Props) {
  return (
    <div>
      <h2 className="text-center text-5xl font-['Latin_Modern_Roman']">{homePage.testimonialsHeading}</h2>

      <p className="mt-10">{homePage.testimonialsDescription}</p>

      <ul className="mt-10 ml-5 space-y-8">
        {homePage.featuredTestimonials.map((testimonial, idx) => (
          <li>
            <Testimonial client={testimonial.testimonial.client} reverse={idx % 2 == 0 ? false : true}>
              <div className="myprose">
                <TinaMarkdown content={testimonial.testimonial.testimonial} />
              </div>
            </Testimonial>
          </li>
        ))}
      </ul>

      <LinkButton tinaField={tinaField(homePage, "testimonialsLinkText")} className="mt-5" href="/testimonials">
        {homePage.testimonialsLinkText}
      </LinkButton>

    </div>   
  );
}
