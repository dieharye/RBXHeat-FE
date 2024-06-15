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
  return (<>
    <ModalProvider>
      <Header />
      <main className="bg-primary-100 flex">
        <div className="w-[calc(100%-360px)]">
          {children}
        </div>
        <SigninModal />
        <Sidebar />
      </main>
    </ModalProvider>
  </>
  );
}
