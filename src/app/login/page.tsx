import LoginForm from "@/components/login/LoginForm";
import LottieAnimation from "@/components/shared/LottieAnimation";
import animationData from "../../../public/animation_lk7w5h5n.json";

const LoginPage = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center items-center h-[80vh]">
      <div className="md:w-1/2">
        <LottieAnimation animationData={animationData} />
      </div>
      <div className="md:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
