import { Header, Survey } from "../components";
import {
  AboutUI,
  AdvantagesUI,
  BrandsUI,
  SectionUI,
  ServicesUI,
} from "../components/ui";

export default function HomePage() {
  return (
    <>
      <SectionUI bgColor="gray" bgImage="cover.jpg" h={680} paddingX pb={120}>
        <Header />
      </SectionUI>

      <SectionUI paddingX={false}>
        <AboutUI />
        <BrandsUI />
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
