export default function Abstract() {
  return (
    <div>
      <div className="bg-gray-100  mx-10 rounded-xl mb-10 mt-10">
        <div className="px-10 py-3">
          <h1 className="text-2xl font-sans flex justify-center items-center font-bold mt-3">
            Abstract
          </h1>
          <p className="text-m font-sans text-justify pl-20 pr-20 mt-10 mb-20 leading-2">
            The increasing prevalence of lumbar spinal canalstenosis has resulted in a surge of MRI imaging, leading to labor-intensive interpretation and significant inter-reader variability,even among expert radiologists. This paper introduces a noveland efficient deep-learning framework that fully automates thegrading of lumbar spinal canal stenosis. We demonstrate state-of-the-art performance in grading spinal canal stenosis on adataset of 1,975 unique studies, each containing three distincttypes of 3D cross-sectional spine images: Axial T2, Sagittal T1,and Sagittal T2/STIR. Using a distinctive training strategy, ourproposed multistage approach effectively integrates Sagittal andAxial images. This strategy employs a multi-view model with asequence-based architecture, optimizing feature extraction andcross-view alignment to achieve superior predictive accuracy inspinal canal stenosis grading.
          </p>
        </div>
      </div>
    </div>
  );
}
