import { useModal } from "@/contexts/ModalProvider";
import { FC, useEffect } from "react";
import { CloseIcon } from "./SvgIcons";

const SigninModal: FC = () => {
  const { isVisible, closeModal } = useModal();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Esc") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);
  return (
    <div
      className="fixed left-0 top-0 h-screen w-screen bg-black/30 backdrop-blur-sm z-50 grid place-content-center duration-200"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "all" : "none",
      }}
    >
      <div
        className="hidden sm:block absolute left-0 top-0 w-full h-full z-10"
        onClick={closeModal}
      />
      <div
        className="w-screen sm:w-[440px] relative z-10 sm:rounded-2xl bg-primary-400 h-screen sm:min-h-[480px] p-2 sm:p-5 sm:max-h-[40vh] duration-300 delay-150 border border-white/10"
        style={{
          transform: `translateY(${!isVisible ? "-100vh" : 0})`,
        }}
      >
        <div className="flex items-center justify-between">
          <div />
          <button
            className="w-6 h-6 rounded-lg bg-white/10 grid place-content-center hover:opacity-80 duration-200 group"
            onClick={closeModal}
          >
            <CloseIcon
              className="w-4 h-4 group-hover:rotate-90 duration-200"
              fill="#FF4236"
            />
          </button>
        </div>
        <div className="">
          <p className="text-6xl text-white">Sign in content</p>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
