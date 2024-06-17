"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ModalProvider } from "@/contexts/ModalProvider";
import SigninModal from "./SignInModal";
import ChatToggleButton from "./ChatToggleButton"

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showChat, toggleChat] = useState(true)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1280) {
        toggleChat(false)
      } else {
        toggleChat(true)
      }
    }

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (<>
    <ModalProvider>
      <Header />
      <main className="bg-primary-100 flex relative overflow-hidden">
        <div className="xl:w-[calc(100%-360px)] w-full duration-200">
          {children}
        </div>
        <ChatToggleButton showChat={showChat} onClick={() => { toggleChat((prev) => !prev )}} />
        <SigninModal />
        <Sidebar showChat={showChat} />
      </main>
    </ModalProvider>
  </>
  );
}
