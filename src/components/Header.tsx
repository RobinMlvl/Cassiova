import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import gif from "../assets/giphy-star.gif"
import licorne from "../assets/licorne.gif"
import reward from "../assets/etoiledemer.gif"
import etoiledemer from "../assets/etoiledemer.gif"

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header76 = (props: Header76Props) => {
  const { heading, description, buttons, images } = {
    ...Header76Defaults,
    ...props,
  } as Props;
  return (
    <header className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header76Defaults: Header76Props = {
  heading: "Boost Your Revenue with CassioVa",
  description:
    "CassioVa is a powerful SaaS platform that helps local businesses improve their reviews and ranking on Google Maps. Increase your revenue and attract more customers today.",
  buttons: [{ title: "Try now" }],
  images: [
    {
      src: gif,
      alt: "Placeholder image 1",
    },
    {
      src: licorne,
      alt: "Placeholder image 2",
    },
    {
      src: etoiledemer,
      alt: "Placeholder image 3",
    },
    {
      src: reward,
      alt: "Placeholder image 4",
    },
    {
      src: licorne,
      alt: "Placeholder image 5",
    },
    {
      src: reward,
      alt: "Placeholder image 6",
    },
    {
      src: reward,
      alt: "Placeholder image 6",
    },
    {
      src: gif,
      alt: "Placeholder image 6",
    },
  ],
};

Header76.displayName = "Header76";
