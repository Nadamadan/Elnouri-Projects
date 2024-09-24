import { HeaderContainer } from "@/components/layout/HeaderContainer";
import { Navbar } from "@/components/layout/Navbar";
import { Logo } from "@/components/Logo";
import React from "react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-svh flex-col">
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
      {children}
    </div>
  );
};

export default Layout;
