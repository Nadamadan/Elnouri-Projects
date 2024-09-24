import { Footer } from "@/components/layout/Footer";
import React, { Suspense } from "react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Suspense>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
