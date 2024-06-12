"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the type for your modal context
interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isVisible: boolean;
}

// Create the modal context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the modal provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsVisible(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    return () => {
      // Cleanup function to remove class when component unmounts
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to access the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
