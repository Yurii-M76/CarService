import {
  AboutUI,
  BrandsUI,
  HeaderUI,
  SectionUI,
  ServicesUI,
} from "../components/ui";

export default function HomePage() {
  return (
    <>
      <SectionUI bgColor="gray" bgImage="cover.jpg" h={680} paddingX pb={120}>
        <HeaderUI />
      </SectionUI>

      <SectionUI paddingX={false}>
        <SectionUI paddingX pb={0}>
          <AboutUI />
        </SectionUI>
        <BrandsUI />
      </SectionUI>

      <SectionUI paddingX={false} pb={0}>
        <ServicesUI />
      </SectionUI>
    </>
  );
}
