import React from "react";

type Props = {
    heading: string;
    description: string;
  };
  
  export type Layout42Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout42 = (props: Layout42Props) => {
    const { heading, description } = {
      ...Layout42Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
          <p className="md:text-md">{description}</p>
        </div>
      </section>
    );
  };
  
  export const Layout42Defaults: Layout42Props = {
    heading: "Uncover valuable insights from AI-generated analysis of customer reviews.",
    description:
      "Thanks to our innovative platform, companies can better understand customer sentiment and make data-driven decisions to improve their products and services",
  };
  
  Layout42.displayName = "Layout42";
  