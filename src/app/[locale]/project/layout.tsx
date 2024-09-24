import { Footer } from "@/components/layout/Footer";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-secondary-blue/15">
      {children}
      <Footer className="container !mt-0 pt-12 sm:pt-24" />
    </div>
  );
}

export default Layout;
