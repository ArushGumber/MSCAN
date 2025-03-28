import { GithubBtn, ArxivBtn, GradioBtn } from "./ImageBtn";

export default function introPaper(props: { name: string }) {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="my-8 md:my-10">
        {/* Main title */}
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold font-sans">MSCAN</h1>
        </div>
        
        {/* Subtitle */}
        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-4xl font-bold font-sans px-2">
            Explainable Lumbar Spinal Stenosis Diagnosis
          </h2>
        </div>
        
        {/* Conference info */}
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-medium font-sans">
            CVPR&apos;25 Demo
          </h2>
        </div>
        
        {/* Authors section */}
        <div className="flex flex-wrap justify-center items-center mt-4 text-sky-600 gap-2 md:gap-4 px-2">
          <h2 className="text-lg md:text-xl font-regular font-sans">
            Arnesh Batra<sup>*</sup>
          </h2>
          <h2 className="text-lg md:text-xl font-regular font-sans">
            Arush Gumber
          </h2>
          <h2 className="text-lg md:text-xl font-regular font-sans">
            Anushk Kumar
          </h2>
        </div>

        {/* Institution */}
        <div className="text-center mt-3 md:mt-4">
          <h4 className="text-lg md:text-xl font-medium font-sans px-2">
            Indraprastha Institute of Information Technology, Delhi
          </h4>
        </div>
        
        {/* Equal contribution note */}
        <h3 className="text-xs md:text-sm font-medium font-sans mt-3 text-center text-gray-400">
          * Represents Equal Contribution
        </h3>
        
        {/* Buttons */}
        <div className="flex justify-center items-center mt-4 md:mt-6 gap-2 md:gap-3">
          <GithubBtn />
          <ArxivBtn />
          <GradioBtn />
        </div>
      </div>
    </div>
  );
}