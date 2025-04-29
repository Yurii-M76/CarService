import { About, Brands, Header, Survey } from "../components";
import { AdvantagesUI, SectionUI, ServicesUI } from "../components/ui";

export default function HomePage() {
  return (
    <>
      <SectionUI bgColor="gray" bgImage="cover.jpg" h={680} paddingX pb={120}>
        <Header />
      </SectionUI>

      <SectionUI paddingX={false}>
        <About />
        <Brands />
      </SectionUI>

      <SectionUI paddingX={false} pb={0}>
        <ServicesUI />
      </SectionUI>

      <SectionUI paddingX={false} pb={0} g={40}>
        <AdvantagesUI />
      </SectionUI>

      <SectionUI paddingX bgColor="gray" paddingY>
        <Survey />
      </SectionUI>
    </>
  );
}
