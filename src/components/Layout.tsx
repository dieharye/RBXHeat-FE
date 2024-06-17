"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ModalProvider } from "@/contexts/ModalProvider";
import SigninModal from "./SignInModal";
import ChatToggleButton from "./ChatToggleButton"

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (<>
    <ModalProvider>
      <Header />
      <main className="bg-primary-100 flex relative overflow-hidden">
        <div className="xl:w-[calc(100%-360px)] w-full duration-200">
          {children}
        </div>
        <ChatToggleButton />
        <SigninModal />
        <Sidebar />
      </main>
    </ModalProvider>
  </>
  );
}
