import React from "react";

type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type StatsProps = {
    title: string;
    description: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    stats: StatsProps[];
    image: ImageProps;
  };
  
  export type Layout27Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout27 = (props: Layout27Props) => {
    const { heading, description, image, stats } = {
      ...Layout27Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20" dir="rtl">
            <div>
              <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h2>
              <p className="mb-6 md:mb-8 md:text-md">{description}</p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">{stat.title}</h3>
                    <p>{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={image.src} className="w-full object-cover" alt={image.alt} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Layout27Defaults: Layout27Props = {
    heading: "Increase Customer Engagement with our Personalized Review Page Feature",
    description:
      "Our Personalized Review Page feature allows businesses to create a customizable review page template that can be sent to customers via email or QR code. This feature helps businesses gather valuable feedback and improve their online reputation",
    stats: [
      {
        title: "75%",
        description: "Increase your rate",
      },
      {
        title: "50%",
        description: "Increase your number of reviews",
      },
    ],
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
  };
  
  Layout27.displayName = "Layout27";
  