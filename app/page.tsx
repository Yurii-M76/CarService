import {
  About,
  Advantages,
  Brands,
  Header,
  Services,
  Survey,
  Trust,
} from "../components";
import { SectionUI } from "../components/ui";

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
        <Services />
      </SectionUI>

      <SectionUI paddingX={false} pb={0} g={40}>
        <Advantages />
      </SectionUI>

      <SectionUI paddingX bgColor="gray" paddingY>
        <Survey />
      </SectionUI>

      <SectionUI paddingX bgColor="red" paddingY>
        <Trust />
      </SectionUI>
    </>
  );
}
