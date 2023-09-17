import Image from "next/image";
import { Banner } from "./components/banner";
import { Services } from "./components/services";
import { Widgets } from "./components/widgets/widgets";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Widgets />
    </main>
  );
}
