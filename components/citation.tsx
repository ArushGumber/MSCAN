"use client";
import { CodeBlock } from "./ui/code-block";
export default function Citation() {
  const code = `@article{ku2024anyv2v,
  title={AnyV2V: A Tuning-Free Framework For Any Video-to-Video Editing Tasks},
  author={Ku, Max and Wei, Cong and Ren, Weiming and Yang, Harry and Chen, Wenhu},
  journal={arXiv preprint arXiv:2403.14468},
  year={2024}
}`;
  return (
    <div className="bg-gray-100 p-4 mx-20 mt-10 rounded-2xl mb-20">
      <div>
        <h1 className="text-2xl font-sans font-bold flex justify-center items-center">
          Citation
        </h1>
        <h2 className="text-lg font-sans font-regular flex justify-center items-center">Please kindly cite our paper if you use our code, data, models or results:</h2>
      </div>
      <div className="mt-4 ml-20 mr-20 flex justify-center items-center pb-10">
        <CodeBlock
          language="latex"
          filename="citation.bib"
          highlightLines={[9, 13, 14, 18]}
          code={code}
        />
      </div>
    </div>
  );
}
