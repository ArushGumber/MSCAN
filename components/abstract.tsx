export default function Abstract() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-gray-100 rounded-xl my-8 md:my-10">
        <div className="px-4 py-6 md:px-10 md:py-8">
          <h1 className="text-xl md:text-2xl font-sans text-center font-bold mb-4 md:mb-6">
            Abstract
          </h1>
          <p className="text-base md:text-lg font-sans text-justify px-4 md:px-12 lg:px-20 leading-7 md:leading-8 tracking-wide mb-6 text-semibold">
            The increasing prevalence of lumbar spinal canal stenosis has resulted in a surge of MRI imaging, leading to labor-intensive interpretation and significant inter-reader variability, even among expert radiologists. This paper introduces a novel and efficient deep-learning framework that fully automates the grading of lumbar spinal canal stenosis. We demonstrate state-of-the-art performance in grading spinal canal stenosis on a dataset of 1,975 unique studies, each containing three distinct types of 3D cross-sectional spine images: Axial T2, Sagittal T1, and Sagittal T2/STIR. Using a distinctive training strategy, our proposed multistage approach effectively integrates Sagittal and Axial images. This strategy employs a multi-view model with a sequence-based architecture, optimizing feature extraction and cross-view alignment to achieve superior predictive accuracy in spinal canal stenosis grading.
          </p>
        </div>
      </div>
    </div>
  );
}
