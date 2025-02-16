"use client";

import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: unknown;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,

  loop = true,
}) => {
  return (
    <div className="flex justify-center">
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
};

export default LottieAnimation;
