import IntroPaper from "@/components/intro-paper";
import Abstract from "@/components/abstract";

import Footbar from "@/components/footbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <IntroPaper name="Hello World" />
      <div className="mt-10 bg-white shadow-sm">
        <div className="flex justify-center">
          <video src="/video.mp4" controls className="inline block" loop width="1040" height="648">
          </video>
        </div>
      </div>
      <Abstract />
      <div className="grid cols-2">
        <div className="px-32 py-10"><Image width={100} height={100} alt="diagram1" src="/diagram1.jpg" layout="responsive"></Image></div>
        
      </div>
      <div className="px-32">
        <Image width={100} height={100} alt="diagram2" src="/diagram2.jpg" layout="responsive"></Image>
      </div>
      {/* <ImgCarousel></ImgCarousel> */}
      {/* <Citation /> */}
      <Footbar />
    </div>
  );
}