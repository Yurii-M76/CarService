import { HeaderUI, SectionUI } from "../components/ui";

export default function HomePage() {
  return (
    <>
      <SectionUI bgColor="gray" bgImage="cover.jpg" h={680}>
        <HeaderUI />
      </SectionUI>

      <SectionUI bgColor="gray" h={680}>
        ...
      </SectionUI>
    </>
  );
}
