import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  paragraph: string;
};

type Props = {
  heading: string;
  description: string;
  tagline: string;
  features: FeaturesProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout16 = (props: Layout16Props) => {
  const { tagline, heading, description, features, buttons, image } = {
    ...Layout16Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">{description}</p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                  </div>
                  <span>{feature.paragraph}</span>
                </li>
              ))}
            </ul>
            
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout16Defaults: Layout16Props = {
  tagline: "Rewards",
  heading: "Unlock Rewards and Maximize Customer Satisfaction",
  description:
    "Our Customer Reward System allows you to create and manage promotional codes or other rewards, incentivizing customers to leave positive reviews and engage with your business.",
  features: [
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 1" },

      paragraph: "Create Custom Promotions",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 2" },
      paragraph: "Manage Rewards Easily",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 3" },
      paragraph: "Incentivize Positive Interactions",
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};

Layout16.displayName = "Layout16";
