import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import imgReviews from "../assets/customer-reviews-examples.jpg";
import Modal from './Modal.tsx';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header26Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;



export const Header26 = (props: Header26Props) => {
  const { heading, description, buttons, image } = {
    ...Header26Defaults,
    ...props,
  } as Props;

  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <Modal showModal={showModal}  setShowModal={setShowModal}/>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>
              <p className="md:text-md">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} onClick={() => setShowModal(true)}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img src={imgReviews} className="size-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header26Defaults: Header26Props = {
  heading: "Boost Your Revenue with Cassiova",
  description:
    "Cassiova is an AI-powered platform that helps worldwide businesses improve their ratings and ranking online on platforms such as Google. Increasing your online presence will attract more customers and help you generate more revenue.",
  buttons: [{ title: "Try for free now", className:"bg-yellow-400 text-black" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
    alt: "Placeholder image",
  },
};

Header26.displayName = "Header26";
