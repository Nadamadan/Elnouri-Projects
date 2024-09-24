// Dev page
import Year from "@/components/SelectYear";
import { setRequestLocale } from "@/i18n";
import { Suspense } from "react";
export default function Page({ params }: { params: { locale: Lang } }) {
  setRequestLocale(params.locale);

  return (
    <div className="h-screen flex-center">
      <Suspense fallback={null}>
        <Year />
      </Suspense>
    </div>
  );
}
