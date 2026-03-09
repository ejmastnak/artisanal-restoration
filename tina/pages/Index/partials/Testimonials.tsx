import { tinaField } from "tinacms/dist/react";
import type { HomePage, } from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Testimonial from '@tina/components/Testimonial.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'

type Props = {
  homePage: HomePage;
};

export default function Testimonials({ homePage, }: Props) {
  return (
    <div>
      <h2 data-tina-field={tinaField(homePage, "testimonialsHeading")} className="text-center text-5xl font-['Latin_Modern_Roman']">{homePage.testimonialsHeading}</h2>

      <p data-tina-field={tinaField(homePage, "testimonialsDescription")} className="mt-10 prose">{homePage.testimonialsDescription}</p>

      <ul className="mt-10 ml-5 space-y-8">
        {homePage.featuredTestimonials.filter((testimonial) => !!testimonial.testimonial).map((testimonial, idx) => (
          <li data-tina-field={tinaField(testimonial, "testimonial")} key={testimonial.testimonial.id}>
            <Testimonial client={testimonial.testimonial.client} reverse={idx % 2 == 0 ? false : true}>
              <div className="prose">
                <TinaMarkdown content={testimonial.testimonial.testimonial} />
              </div>
            </Testimonial>
          </li>
        ))}
      </ul>

      <div className="mt-8 mx-auto w-fit">
        <LinkButton tinaField={tinaField(homePage, "testimonialsLinkText")} href="/testimonials">
          {homePage.testimonialsLinkText}
        </LinkButton>
      </div>

    </div>   
  );
}
