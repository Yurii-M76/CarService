import { AboutUI, BrandsUI, HeaderUI, SectionUI } from "../components/ui";

export default function HomePage() {
  return (
    <>
      <SectionUI bgColor="gray" bgImage="cover.jpg" h={680} paddingX>
        <HeaderUI />
      </SectionUI>

      <SectionUI paddingX={false}>
        <SectionUI paddingX pb={0}>
          <AboutUI />
        </SectionUI>
        <BrandsUI />
      </SectionUI>
    </>
  );
}
