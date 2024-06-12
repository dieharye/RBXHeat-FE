import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="bg-primary-100 flex">
      <Sidebar />
      <div className="w-[calc(100%-360px)]">
        <Header />
        {children}
      </div>
    </main>
  );
}
