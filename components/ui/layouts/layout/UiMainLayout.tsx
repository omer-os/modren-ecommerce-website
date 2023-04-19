import React from "react";
import MainNav from "../nav/MainNav";

interface UiMainLayoutProps {
  children: React.ReactNode;
}

export default function UiMainLayout({ children }: UiMainLayoutProps) {
  return (
    <div>
      <MainNav />
      <div className="max-w-5xl mx-auto py-8 p-6">{children}</div>
    </div>
  );
}
