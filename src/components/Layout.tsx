"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ModalProvider } from "@/contexts/ModalProvider";
import SigninModal from "./SignInModal";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="bg-primary-100 flex">
      <ModalProvider>
        <Sidebar />
        <div className="w-[calc(100%-360px)]">
          <Header />
          {children}
        </div>
        <SigninModal />
      </ModalProvider>
    </main>
  );
}
