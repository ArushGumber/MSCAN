import IntroPaper from "@/components/intro-paper";
import Abstract from "@/components/abstract";
import { ImgCarousel } from "@/components/image-caraousel";
import Footbar from "@/components/footbar";
import Citation from "@/components/citation";

export default function Home() {
  return (
    <div>
      <IntroPaper name="Hello World" />
      <div className="mt-40 bg-white shadow-sm">
        <div className="flex justify-center">
          <video src="/sample-video.mp4" controls className="inline block" loop width="1280" height="720">
          </video>
        </div>
      </div>
      <Abstract />
      <ImgCarousel></ImgCarousel>
      <Citation />
      <Footbar />
    </div>
  );
}
