import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
/* import { RxChevronRight } from "react-icons/rx";
 */
import number1 from "../assets/number-one (2).png"
import number2 from "../assets/number-2 (1).png"
import number3 from "../assets/number-3 (1).png"
import number4 from "../assets/number-four.png"



type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons: ButtonProps[];
};

export type Layout237Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout237 = (props: Layout237Props) => {
  const {
    tagline,
    heading,
    description,
    sections = [],
    buttons = [],
  } = { ...props, ...Layout237Defaults };
  return (
    <section id="how" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-bold text-xl md:mb-4 text-yellow-400">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
              </div>
              <p className="text-1xl font-bold">{section.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout237Defaults: Layout237Props = {
  tagline: "How does it work ?",
  heading: "Increase your Google rating by showcasing your best reviews and turning less favorable ones into 5-star ratings",
  description:
    "",
  sections: [
    {
      icon: {
        src: number1,
        alt: "Relume logo 1",
      },
      heading: "",
      description:
        "Use the power of our intuitive review system to gather valuable feedback from your customers",
    },
    {
        icon: {
          src: number2,
          alt: "Relume logo 1",
        },
        heading: "",
        description:
          "Automatically redirect your top reviews to Google, significantly improving your ranking and attracting more potential customers",
      },
    {
      icon: {
        src: number3,
        alt: "Relume logo 2",
      },
      heading: "",
      description:
        "Centralize all your reviews, both from the web and those you collect, in one easy-to-use smart dashboard,  providing  you a comprehensive overview of trend",
    },
    {
      icon: {
        src: number4,
        alt: "Relume logo 3",
      },
      heading: "",
      description:
        "Our advanced AI tools will recommend concrete actions for your less favorable reviews to turn them into 5 stars and outshine the competition",
    },
  ],
  buttons: [
    { title: "TRY NOW FOR FREE", variant: "primary", className:"bg-yellow-400 text-black" },
    /* {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    }, */
  ],
};

Layout237.displayName = "Layout237";
