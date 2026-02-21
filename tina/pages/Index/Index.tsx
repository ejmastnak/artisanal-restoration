import { useTina, tinaField } from "tinacms/dist/react";
import Wrapper from '@tina/shared/Wrapper.tsx'
import Hero from './partials/Hero.tsx'
import About from './partials/About.tsx'
import Services from './partials/Services.tsx'
import Testimonials from './partials/Testimonials.tsx'

import type { MyHomePageQuery, MyHomePageQueryVariables, } from "@tina/__generated__/types";

type Props = {
  variables: MyHomePageQueryVariables;
  data: MyHomePageQuery;
  query: string;
};

export default function HomePage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const homePage = data.homePage;

  return (
    <div>
      <Hero homePage={homePage} />
      <Wrapper className="mt-4 md:mt-6 lg:mt-8">
        <div className="pt-10 py-16">
          <About homePage={homePage} />
        </div>
        <div className="pt-10 py-16 border-t border-gray-200">
          <Services homePage={homePage} />
        </div>
        <div className="pb-16 mb-12 md:pb-24 md:mb-20 pt-10 md:py-16 border-t border-gray-200">
          <Testimonials homePage={homePage} />
        </div>
      </Wrapper>
    </div>
  );
}
