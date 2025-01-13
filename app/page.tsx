import IntroPaper from "@/components/intro-paper";
import Abstract from "@/components/abstract";
import {ImgCarousel} from "@/components/image-caraousel";
import Footbar from "@/components/footbar";
import Citation from "@/components/citation";


export default function Home() {
  return (
    <div>
      <IntroPaper name="Hello World"/>
      
      <Abstract/>
      <ImgCarousel></ImgCarousel>
      <Citation/>
      <Footbar/>
    </div>
  );
}
