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
          <video 
            src="/video.mp4" 
            controls 
            className="w-full max-w-screen-lg" 
            loop
          >
          </video>
        </div>
      </div>
      <Abstract />
      
      {/* Diagrams section */}
      <div className="container mx-auto px-4 md:px-6 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src="/diagram1.jpg"
                alt="Diagram 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src="/diagram2.jpg"
                alt="Diagram 2"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <ImgCarousel></ImgCarousel> */}
      {/* <Citation /> */}
      <Footbar />
    </div>
  );
}