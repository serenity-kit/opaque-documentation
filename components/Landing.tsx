import { Hero } from "./blocks/Hero";
import { Example } from "./blocks/Example";
import { FeatureList } from "./blocks/FeatureList";
import { FeatureDetail } from "./blocks/FeatureDetail";
import { Comparison } from "./blocks/Comparison";
import { Partners } from "./composites/Partners";
import { CTAArea } from "./composites/CTAArea";
import { BlockWrapper } from "./blocks/BlockWrapper";

export const Landing = () => {
  return (
    <>
      <Hero
        header="some header"
        text="Secure password based client-server authentication without the server ever obtaining knowledge of the password."
        cta={{
          text: "Call me",
          onClick: () => window.alert("clicked the cta"),
        }}
        secondaryButton={{
          text: "github",
          onClick: () => window.alert("clicked the secondary"),
        }}
        image={{ src: "", alt: "" }}
      />

      <Example
        header="Try it out yourself"
        text="How does it work, what do users get, central statement, Interactive Guide"
        image={{ src: "", alt: "" }}
      />

      <FeatureList
        header="Explaining important benefits or features"
        features={[
          {
            header: "Headline",
            text: "No need for users to rely on an external authority for key storage. Usually Apple, Google or Microsoft.",
            iconName: "gear",
          },
          {
            header: "Headline",
            text: "No need for users to rely on an external authority for key storage. Usually Apple, Google or Microsoft.",
            iconName: "gear",
          },
          {
            header: "Headline",
            text: "No need for users to rely on an external authority for key storage. Usually Apple, Google or Microsoft.",
            iconName: "gear",
          },
        ]}
      />

      <FeatureDetail
        header="Benefit two"
        text="No need for users to rely on an external authority for key storage. Usually Apple, Google or Microsoft."
        link={{ text: "blub", href: "https://google.com", external: true }}
        image={{ src: "", alt: "" }}
      />

      <FeatureDetail
        header="Benefit one"
        text="No need for users to rely on an external authority for key storage. Usually Apple, Google or Microsoft."
        image={{ src: "", alt: "" }}
        imagePosition="left"
      />

      <Comparison
        header="The problem opaque is solving"
        text="Secure password based client-server authentication without the server ever obtaining knowledge of the password."
        comparisonData={[
          { title: "opaque", points: ["point 1", "point 2", "point 3"] },
          { title: "others", points: ["other point 1", "other point 2"] },
        ]}
      />

      <BlockWrapper>
        <Partners
          header="Powering world class products"
          images={[
            { src: "/netidee.svg", alt: "fancy logo 1" },
            { src: "/netidee.svg", alt: "fancy logo 2" },
            { src: "/netidee.svg", alt: "fancy logo 2" },
            { src: "/netidee.svg", alt: "fancy logo 2" },
          ]}
        />
        <CTAArea
          header="Main CTA"
          text="Use it now - Be more specific in the copy what to expect when clicking and/or why"
          cta={{
            text: "Call to action",
            onClick: () => window.alert("clicked last CTA"),
          }}
        />
      </BlockWrapper>
    </>
  );
};
