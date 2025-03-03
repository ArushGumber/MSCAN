import IntroPaper from "@/components/intro-paper";
import Abstract from "@/components/abstract";
import { ImgCarousel } from "@/components/image-caraousel";
import Footbar from "@/components/footbar";
import Citation from "@/components/citation";
import Image from "next/image";

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
      <div className="grid cols-2">
        <div><Image width="100%" height="100%" alt="diagram1" src="/diagram1.jpg" layout="responsive"></Image></div>
        <div><Image width="100%" height="100%" alt="diagram3" src="/diagram3.jpg" layout="responsive"></Image></div>
      </div>
      <div>
        <Image width="100%" height="100%" alt="diagram2" src="/diagram2.jpg" layout="responsive"></Image>
      </div>
      {/* <ImgCarousel></ImgCarousel> */}
      {/* <Citation /> */}
      <Footbar />
    </div>
  );
}