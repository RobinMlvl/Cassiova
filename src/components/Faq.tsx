import {
    Button,
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
  } from "@relume_io/relume-ui";
  
  import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
  import { RxPlus } from "react-icons/rx";
  
  type QuestionsProps = {
    title: string;
    answer: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    footerHeading: string;
    footerDescription: string;
    button: ButtonProps;
    questions: QuestionsProps[];
  };
  
  export type Faq4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Faq4 = (props: Faq4Props) => {
    const { heading, description, questions, footerHeading, footerDescription, button } = {
      ...Faq4Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-lg">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
          <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
            {questions.map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border-primary px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                  }
                  className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footerHeading}
            </h4>
            <p className="md:text-md">{footerDescription}</p>
            <div className="mt-6 md:mt-8">
              <Button {...button}>{button.title}</Button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Faq4Defaults: Faq4Props = {
    heading: "FAQs",
    description:
      "Find answers to commonly asked questions about our platform and services.",
    questions: [
      {
        title: "How does it work?",
        answer:
          "Our platform analyzes your Google Business profile and provides actionable insights to improve your ranking. We also offer a customizable review page template and AI-generated review analysis to help you make business improvements.",
      },
      {
        title: "Is it user-friendly?",
        answer:
          "Yes, our platform is designed to be intuitive and easy to navigate. We provide a comprehensive dashboard with key performance indicators and a customer reward system to incentivize positive reviews.",
      },
      {
        title: "Can I track my progress?",
        answer:
          "Absolutely! Our platform offers a KPI dashboard that displays important metrics such as the total number of reviews, percentage of good vs. bad reviews, and weekly comparison charts.",
      },
      {
        title: "How do I get started?",
        answer:
          "Getting started is easy. Simply sign up for an account, link your Google Business profile, and start utilizing our powerful features to improve your online reputation.",
      },
      {
        title: "Still have questions?",
        answer:
          "If you still have questions, feel free to reach out to our team. We're here to help!",
      },
    ],
    footerHeading: "Still have questions?",
    footerDescription: "Have more questions? Get in touch with us today.",
    button: {
      title: "Contact",
      variant: "secondary",
    },
  };
  
  Faq4.displayName = "Faq4";
  