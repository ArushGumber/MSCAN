"use client";
import { FaGithub } from "react-icons/fa";
import { SiArxiv } from "react-icons/si";
import { Button } from "./ui/button";
import { BsFileEarmarkPdf } from "react-icons/bs";

export function GithubBtn() {
  const handleClick = () => {
    window.location.href = "https://github.com/your-repo";
  };

  return (
    <Button className={"bg-primary rounded-2xl"} onClick={handleClick}>
      <FaGithub size={100}/>
      <span className={"ml-2 font-bold font-sans"}>Code</span>
    </Button>
  );
}

export function ArxivBtn() {
  const handleClick = () => {
    window.location.href = "https://arxiv.org/abs/your-paper-id";
  };

  return (
    <Button className={"bg-primary rounded-2xl"} onClick={handleClick}>
      <SiArxiv />
      <span className={"ml-2 font-bold font-sans"}>arXiv</span>
    </Button>
  );
}

export function PDFBtn() {
  const handleClick = () => {
    window.location.href = "https://www.researchgate.net/publication/387368137_A_Multistage_Deep_Learning_Framework_for_Lumbar_Spinal_Canal_Stenosis_Diagnosis_Using_Multi-View_Cross_Attention";
  };

  return (
    <Button className={"bg-primary rounded-2xl"} onClick={handleClick}>
      <BsFileEarmarkPdf />
      <span className={"ml-2 font-bold font-sans"}>Paper</span>
    </Button>
  );
}
export function GradioBtn(){
  const handleClick = () => {
    window.location.href = "https://";
  };

  return (
    <Button className={"bg-primary rounded-2xl"} onClick={handleClick}>
      <span className={"mx-2 font-bold font-sans"}>Gradio Demo</span>
    </Button>
  );

}
