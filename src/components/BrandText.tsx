import { inter, interAr } from "@/lib/fonts";
import { Title } from "./Title";

export const BrandText = () => (
  <div className="space-y-2 text-center text-sm font-medium sm:text-lg">
    <h3 className={inter.className}>
      El-Nouri Charity Projects around the world
    </h3>
    <div className={interAr.className}>
      <Title text="مشاريع النوري الخيرية" className="mb-2" />
      <p>حول العالم</p>
    </div>
  </div>
);
