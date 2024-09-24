"use client";
import WelcomeText from "@/components/dev/WelcomeText";
import { Link } from "@/i18n";
const locale = "en";
export default function HeroSection() {
  return (
    <div className="ٍ h-screen w-full bg-[url('/herosectionpic.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-95">
        <div className="relative top-[90px]">
          <WelcomeText />
        </div>
        <div className="relative top-[303px] flex h-[120px] gap-x-0">
          <Link
            href=""
            className="flex-1 content-center bg-green-300 text-center text-2xl text-white"
          >
            تعرف عنا{" "}
          </Link>
          <Link
            href=""
            className="flex-1 content-center bg-green-800 text-center text-2xl text-white"
          >
            التقارير
          </Link>
          <Link
            href=""
            className="flex-1 content-center bg-green-300 text-center text-2xl text-white"
          >
            المشاريع الخيرية
          </Link>
          <Link
            href=""
            className="flex-1 content-center bg-green-800 text-center text-2xl text-white"
          >
            أوقاف النوري
          </Link>
        </div>
      </div>
    </div>
  );
}
