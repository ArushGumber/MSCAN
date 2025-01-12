import IntroPaper from "@/components/intro-paper";
import Abstract from "@/components/abstract";
import ImgCarousel from "@/components/image-caraousel";
import Footbar from "@/components/footbar";
import { Carousel } from "@/components/ui/carousel";
export default function Home() {
  return (
    <div>
      <IntroPaper name="Hello World"/>
      
      <Abstract/>
      <ImgCarousel/>
      <Footbar/>
    </div>
  );
}
