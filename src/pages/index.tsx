
import ColorDetail from "@/component/ColorDetail";
import Navbar from "@/component/navbar/Navbar";
import Jumbotron from "@/component/navbar/jumbotron/Jumbotron";
import SectionColor from "@/component/section1/SectionColor";
import Banner from "@/component/section1/SectionColor";
import Typographsection from "@/component/section2/Typhographsection";
import Typographsection_new from "@/component/section2/Typographsection_new";
import Buttonsection from "@/component/section3/Buttonsection";
import IconPlacement from "@/component/section4/IconPlacement";
import BlockmixContact from "@/component/section5/BlockmixContact";
import CopyRight from "@/component/section6/CopyRight";
import Footer from "@/component/section6/Footer";
import { Cubeitteration } from "@/data/color";
import { text } from "@/data/text";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron/>
      <SectionColor colorlist={Cubeitteration}/>
      {/* <Typographsection texting={text}/> */}
      <Typographsection_new />
      <Buttonsection />
      <IconPlacement/>
      <BlockmixContact/>
      <Footer/>
      <CopyRight/>
      {/* <ColorDetail color='bg-black' title='tes' subtitle='subtes'/>
      <ColorDetail color='bg-red-700'   title='tis' subtitle='tas'/>
      <ColorDetail color='bg-blue-700' title='tus' subtitle='tes'/> */}
    </>
  );
}
