import { useRef, useState, useEffect  } from "react"
import type { FormEvent } from "react"
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import TextInput from "@tina/components/TextInput.tsx"
import TextArea from "@tina/components/TextArea.tsx"
import RadioInput from "@tina/components/RadioInput.tsx"
import InputError from "@tina/components/InputError.tsx"
import InputLabel from "@tina/components/InputLabel.tsx"
import PrimaryButton from "@tina/components/PrimaryButton.tsx"

import type { MyContactPageQuery, MyContactPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyContactPageQueryVariables;
  data: MyContactPageQuery;
  query: string;
};

const mdLinkComponents = {
  a: (props) => (
    <a href={props.url} className="text-blue-500 font-medium hover:underline no-underline hover:text-blue-600 hover:cursor-pointer">{props.children}</a>
  ),
};

export default function ContactPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const contactPage = data.contactPage;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [emailRequiredMessage, setEmailRequiredMessage] = useState("")
  const [phoneRequiredMessage, setPhoneRequiredMessage] = useState("")

  const FEEDBACK_MESSAGE = "This is a message meant to show that the form is responsive to user input. However, the form is currently disabled from sending messages, and nothing happens when you submit the form besides this message appearing."
  const FEEDBACK_TIMEOUT_MS = 10000
  const [feedbackMessage, setFeedbackMessage] = useState(null)
  const timeoutRef = useRef(null)

  const CONTACT_METHOD_PHONE = "phone"
  const CONTACT_METHOD_EMAIL = "email"
  const [contactMethod, setContactMethod] = useState(CONTACT_METHOD_PHONE)

  function updateContactMethod(value: string) {
    setContactMethod(value)
    setEmailRequiredMessage("")
    setPhoneRequiredMessage("")
  }

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEmailRequiredMessage("")
    setPhoneRequiredMessage("")

    if (!email && contactMethod == CONTACT_METHOD_EMAIL) {
      setEmailRequiredMessage("Please input your email address.")
      return
    } else if (!phone && contactMethod == CONTACT_METHOD_PHONE){
      setPhoneRequiredMessage("Please input your phone number.")
      return
    }

    setFeedbackMessage(FEEDBACK_MESSAGE)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setFeedbackMessage(null);
      timeoutRef.current = null;
    }, FEEDBACK_TIMEOUT_MS);

  }

  // Clean up timeoutRef
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(contactPage, "h1")} className="text-5xl font-['Latin_Modern_Roman']">{contactPage.h1}</h1>

      {/* Intro message */}
      <div data-tina-field={tinaField(contactPage, "intro")} className="mt-8 prose text-gray-700 max-w-2xl">
        <TinaMarkdown content={contactPage.intro} components={mdLinkComponents}/>
      </div>

      {/* Contact form */}
      <div className="mt-5 relative rounded-xl bg-gray-50 p-5 border border-gray-100 -m-5 overflow-hidden">

        <h2 data-tina-field={tinaField(contactPage, "contactFormHeading")}className="text-3xl font-['Latin_Modern_Roman']">{contactPage.contactFormHeading}</h2>

        <form data-tina-field={tinaField(contactPage, "contactForm")} className="mt-4" onSubmit={submitForm}>
          <div className="w-full max-w-xl">
            <InputLabel htmlFor="name" value={contactPage.contactForm.contactFormNameLabel} />
            <TextInput
              id="name"
              type="text"
              className="inline-block w-72"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={contactPage.contactForm.contactFormNamePlaceholder}
              required
            />
          </div>

          <div className="mt-5 w-full max-w-xl">
            <InputLabel htmlFor="message" value={contactPage.contactForm.contactFormMessageLabel} />
            <TextArea
              id="message"
              className="block w-full h-48 text-sm max-w-xl"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={contactPage.contactForm.contactFormMessagePlaceholder}
              required
            />
          </div>

          {/* Contact method */}
          <div className="mt-5">
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700">{contactPage.contactForm.contactFormContactMethodLabel}</legend>
              <div className="mt-1 space-y-6 sm:flex sm:items-center sm:space-x-8 sm:space-y-0">
                <RadioInput
                  id="contact-method-phone"
                  name="contact-method"
                  value={CONTACT_METHOD_PHONE}
                  checked={contactMethod === CONTACT_METHOD_PHONE}
                  onChange={(e) => updateContactMethod(e.target.value)}
                  label={contactPage.contactForm.contactFormPhoneOptionLabel}
                />

                <RadioInput
                  id="contact-method-email"
                  name="contact-method"
                  value={CONTACT_METHOD_EMAIL}
                  checked={contactMethod === CONTACT_METHOD_EMAIL}
                  onChange={(e) => updateContactMethod(e.target.value)}
                  label={contactPage.contactForm.contactFormEmailOptionLabel}
                />

              </div>
            </fieldset>
          </div>

          {/* Email */}
          {contactMethod == CONTACT_METHOD_EMAIL && 
            <div className="mt-5 w-full max-w-xl">
              <InputLabel htmlFor="email" value={contactPage.contactForm.contactFormEmailLabel} />
              <TextInput
                id="email"
                type="email"
                className="inline-block w-72"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={contactPage.contactForm.contactFormEmailPlaceholder}
              />
              <InputError
                className="max-w-md mt-1"
                message={emailRequiredMessage}
              />
            </div>
          }

          {/* Phone */}
          {contactMethod == CONTACT_METHOD_PHONE && 
            <div className="mt-5 w-full max-w-xl">
              <InputLabel htmlFor="phone" value={contactPage.contactForm.contactFormPhoneLabel} />
              <TextInput
                id="phone"
                type="tel"
                className="inline-block w-72"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={contactPage.contactForm.contactFormPhonePlaceholder}
              />
              <InputError
                className="max-w-md mt-1"
                message={phoneRequiredMessage}
              />
            </div>
          }

          <PrimaryButton className="mt-8" type="submit" >
            {contactPage.contactForm.contactFormSubmitButtonText}
          </PrimaryButton>

          {feedbackMessage &&
            <p className="mt-1 max-w-md text-yellow-800 font-medium">
              {feedbackMessage}
            </p>
          }

        </form>

        {/* What happens next? */}
        <div className="mt-10">
          <h2 data-tina-field={tinaField(contactPage, "nextStepsHeading")} className="text-2xl font-['Latin_Modern_Roman']" id="contact-directly">{contactPage.nextStepsHeading}</h2>
          <div data-tina-field={tinaField(contactPage, "nextStepsBody")} className="mt-4 prose">
            <div className="text-sm">
              <TinaMarkdown content={contactPage.nextStepsBody} />
            </div>
          </div>
        </div>

      </div>

      {/* Direct contact data */}
      <div className="mt-8">
        <h2 data-tina-field={tinaField(contactPage, "contactDirectlyHeading")} className="text-3xl font-['Latin_Modern_Roman']" id="contact-directly">{contactPage.contactDirectlyHeading}</h2>
        <div className="mt-4">
          <div  data-tina-field={tinaField(contactPage, "contactDirectlyText")} className="prose">
            <TinaMarkdown content={contactPage.contactDirectlyText} />
          </div>
          <ul className="mt-4 ml-5 list-disc prose">
            <li data-tina-field={tinaField(contactPage, "phoneText")}>{contactPage.phoneText} <a className="hover:text-blue-600" href={`tel:${contactPage.phoneMachineReadable}`}>{contactPage.phone}</a> </li>
            <li data-tina-field={tinaField(contactPage, "emailText")}>{contactPage.emailText} <a className="hover:text-blue-600" href={`mailto:${contactPage.email}`}>{contactPage.email}</a></li>
          </ul>
        </div>
      </div>

    </PageWrapper>
  );
}
