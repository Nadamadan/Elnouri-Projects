import { MapPin } from "lucide-react";
import { Link } from "@/i18n";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StyledCardProps {
  href: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  name: string;
  formattedAddress: string;
  className?: string;
  children?: React.ReactNode;
}
export const StyledCard = ({
  href,
  imageUrl,
  imageAlt,
  imageWidth = 230,
  imageHeight = 200,
  name,
  formattedAddress,
  className,
  children,
}: StyledCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "mt-4 sm:mt-6 lg:mt-8 h-[300px] sm:h-[350px] lg:h-[400px] max-w-full sm:max-w-xs lg:max-w-60 rounded-2xl lg:rounded-3xl bg-gradient-to-b from-orange-200 to-indigo-200 p-[4px] sm:p-[5px] lg:p-[6px]",
        className
      )} >
      <div
        className={cn(
          "group flex flex-col items-center gap-4 sm:gap-5 lg:gap-6 h-full rounded-2xl lg:rounded-3xl bg-background"
        )} >
        <div className="w-full overflow-hidden rounded-t-2xl lg:rounded-t-3xl">
          <Image
            src={imageUrl}
            width={imageWidth}
            height={imageHeight}
            className={cn(
              "h-44 sm:h-52 lg:h-60 w-full rounded-t-2xl lg:rounded-t-3xl transition-transform duration-300 ease-in-out group-hover:scale-105"
            )}
            alt={imageAlt}
          />
        </div>
        <div className={cn("text-sm sm:text-xl font-sans font-semibold text-foreground text-center")}>
         {name}
       </div>
     <div className={cn("flex items-center gap-2 sm:gap-3 lg:gap-4 pb-6 sm:pb-8 lg:pb-12")}>
      <MapPin className={cn("w-4 h-4 sm:w-6 sm:h-6 text-secondary-blue")} />
     <div className={cn("font-sans text-xs sm:text-base lg:text-lg text-muted-foreground")}>
       {formattedAddress}
    </div>
</div>
        {children}
      </div>
    </Link>
  );
};
