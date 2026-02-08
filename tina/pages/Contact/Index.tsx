import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyContactPageQuery, MyContactPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyContactPageQueryVariables;
  data: MyContactPageQuery;
  query: string;
};

export default function ContactPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const contactPage = data.contactPage;

  return (
    <PageWrapper>
      <h1 className="text-5xl font-['Latin_Modern_Roman']">{contactPage.h1}</h1>

      <div className="mt-8 prose">
        <p className="mt-4">{contactPage.text}</p>

        <ul className="mt-4 ml-5 list-disc">
          <li>{contactPage.phoneText} <a className="hover:text-blue-600" href={`tel:${contactPage.phoneMachineReadable}`}>{contactPage.phone}</a> </li>
          <li>{contactPage.emailText} <a className="hover:text-blue-600" href={`mailto:${contactPage.email}`}>{contactPage.email}</a></li>
        </ul>
      </div>

      {/* <p className="mt-8 text-gray-700 max-w-2xl"> */}
      {/*   Schedule a consultation or ask questions using the contact form below. */}
      {/*   We need either your email or phone so we can respond to you; leave whichever you prefer. */}
      {/* </p> */}

      {/* <p className="mt-2 text-lg text-gray-700 max-w-xl"> */}
      {/*   You can also contact us directly by phone or email—<a href="#contact-directly" className="text-blue-500 hover:underline hover:text-blue-500">see below</a>. */}
      {/* </p> */}

      {/* <div className="mt-8 relative rounded-xl p-5 -m-5 overflow-hidden"> */}
      {/**/}
      {/* Overlay */}
      {/*   <div className="bg-gray-50/70 absolute inset-0"></div> */}
      {/**/}
      {/*   <h2 className="text-3xl font-['Latin_Modern_Roman']" id="contact-directly">Contact form (in development)</h2> */}
      {/**/}
      {/*   <form className="mt-4" @submit.prevent="submitForm"> */}
      {/**/}
      {/*     <div className="w-full max-w-xl"> */}
      {/*       <InputLabel for="name" value="Name" /> */}
      {/*       <TextInput */}
      {/*       id="name" */}
      {/*       type="text" */}
      {/*       className="inline-block w-72" */}
      {/*       v-model="name" */}
      {/*       placeholder="Your name" */}
      {/*       required */}
      {/*     /> */}
      {/*     </div> */}
      {/**/}
      {/*     <div className="mt-4 w-full max-w-xl"> */}
      {/*       <InputLabel for="email" value="Email" /> */}
      {/*       <TextInput */}
      {/*       id="email" */}
      {/*       type="email" */}
      {/*       className="inline-block w-72" */}
      {/*       placeholder="Your email" */}
      {/*       v-model="email" */}
      {/*     /> */}
      {/*       <InputError className="max-w-xs" message={emailOrPhoneRequiredMessage} /> */}
      {/*     </div> */}
      {/**/}
      {/*     <div className="mt-4 w-full max-w-xl"> */}
      {/*       <InputLabel for="phone"> */}
      {/*         <p>Phone number</p> */}
      {/*         <p className="text-sm -mt-px text-gray-500 !font-normal">Format: (123) 456-7890</p> */}
      {/*       </InputLabel> */}
      {/*       <TextInput */}
      {/*       id="phone" */}
      {/*       type="tel" */}
      {/*       pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}" */}
      {/*       placeholder="(123) 456-7890" */}
      {/*       className="inline-block w-72" */}
      {/*       v-model="phone" */}
      {/*     /> */}
      {/*       <InputError className="max-w-xs" message={emailOrPhoneRequiredMessage} /> */}
      {/*     </div> */}
      {/**/}
      {/**/}
      {/*     <div className="mt-5 w-full max-w-xl"> */}
      {/*       <InputLabel for="message" value="Message" /> */}
      {/*       <TextArea */}
      {/*       id="message" */}
      {/*       placeholder="Your message" */}
      {/*       className="block w-full h-48 text-sm max-w-xl" */}
      {/*       v-model="message" */}
      {/*       required */}
      {/*     /> */}
      {/*     </div> */}
      {/**/}
      {/*     <PrimaryButton disabled={true} className="mt-5 !cursor-not-allowed" type="submit">Send Message</PrimaryButton> */}
      {/*   </form> */}
      {/**/}
      {/**/}
      {/**/}
      {/*   <div className="mt-6 max-w-2xl"> */}
      {/*       <p className="text-2xl font-['Latin_Modern_Roman']">What happens after I send the form?</p> */}
      {/*       <div> */}
      {/*         <p> */}
      {/*           Randall, the owner of Artisanal Restoration, will receive your message by email. */}
      {/*           Within a few days, he will respond to you by email or phone to answer any questions, discuss your project, and schedule an on-site consultation. */}
      {/*           Randall then visits your home, listens to your opinions and preferences, offers his own input and expertise, and together you agree on a plan of action. */}
      {/*         </p> */}
      {/**/}
      {/*         <p className="mt-2"> */}
      {/*           On small projects Randall may even perform the work on the day of the initial visit. On larger projects, you agree on a work schedule, budget, and estimated completion time. */}
      {/*           Randall then begins work, communicating with you on a case-by-case basis as the project evolves to inform you about progress and, as needed, changes or improvements to the original plan. */}
      {/*         </p> */}
      {/*       </div> */}
      {/*     </div> */}
      {/**/}
      {/*   </div> */}

      {/* <div className="mt-10"> */}
      {/*   <h2 className="text-3xl font-['Latin_Modern_Roman']" id="contact-directly">Contact us directly</h2> */}
      {/*   <p className="mt-4"> You can also contact Randall Basti of Artisanal Restoration directly:</p> */}
      {/*   <ul className="mt-4 ml-5 list-disc"> */}
      {/*     <li>By phone at <a className="hover:text-blue-600" href="tel:+19087872526">(908) 787 2526</a> </li> */}
      {/*     <li>By email at <a className="hover:text-blue-600" href="mailto:rbasti@comcast.net">rbasti@comcast.net</a></li> */}
      {/*   </ul> */}
      {/* </div> */}

    </PageWrapper>
  );
}
