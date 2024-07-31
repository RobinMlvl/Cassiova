"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { MotionValue, useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type Layout408Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const calculateScales = (totalSections: number, scrollYProgress: MotionValue<number>) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

export const Layout408 = (props: Layout408Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout408Defaults,
    ...props,
  } as Props;

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>

        <div ref={containerRef} className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0">
          {featureSections.map((featureSection, index) => (
            <FeatureSection key={index} {...featureSection} scale={scales[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  tagline,
  heading,
  description,
  buttons,
  image,
  scale,
  index,
}: {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  scale: MotionValue<number>;
  index: number;
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const Section = isMobile ? "div" : motion.div;

  const contentOrder = !isMobile && index % 2 === 0 ? "order-first" : "order-last";
  const imageOrder = !isMobile && index % 2 === 0 ? "order-last" : "order-first";

  return (
    <Section
      className="static mb-0 grid h-auto grid-cols-1 content-center items-stretch overflow-hidden border border-border-primary bg-background-primary md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
      style={{ scale: scale as never }}
    >
      <div className={clsx("flex flex-col justify-center p-6 md:p-8 lg:p-12", contentOrder)}>
        <p className="mb-2 font-semibold">{tagline}</p>
        <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
          {heading}
        </h2>
        <p>{description}</p>
      </div>
      <div className={clsx("flex flex-col items-center justify-center", imageOrder)}>
        <img src={image.src} alt={image.alt} />
      </div>
    </Section>
  );
};

export const Layout408Defaults: Layout408Props = {
  tagline: "Reviews",
  heading: "Track Your Business Performance",
  description: "Get actionable insights and analytics for your business",
  featureSections: [
    {
      tagline: "Analyze",
      heading: "Understand Your Reviews and Ratings",
      description:
        "Our KPI Dashboard provides a comprehensive overview of your business performance, including the total number of reviews, percentage of good vs. bad reviews, and weekly comparison charts. Gain valuable insights to improve your online reputation.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-4" />,
        },
      ],
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
      },
    },
    {
      tagline: "Optimize",
      heading: "Improve Your Business Ranking on Google",
      description:
        "Our AI-generated score reflects the optimization level of your Google Business profile. Receive specific recommendations for improvement to increase your visibility and attract more customers.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-4" />,
        },
      ],
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 2",
      },
    },
    {
      tagline: "AI",
      heading: "Unlock Insights from AI Review Analysis",
      description:
        "Our AI analyzes bad reviews to provide you with a synthesized summary. Discover recommendations to enhance your business and address customer concerns proactively.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-4" />,
        },
      ],
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
      },
    },
  ],
};

Layout408.displayName = "Layout408";
