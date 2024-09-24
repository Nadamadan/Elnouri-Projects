"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from "next-intl"; 

const startYear = 2010;
const currentYear = new Date().getFullYear();
const items = Array.from(
  { length: currentYear - startYear + 1 }, 
  (_, index) => ({
    value: (index + 1).toString(), 
    label: startYear + index 
  })
);

export default function Year() {
  const t = useTranslations("Select");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelectChange = (value: string) => {
    const selectedItem = items.find(item => item.value === value);
    if (selectedItem) {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set('year', String(selectedItem.label)); 
      router.push(`?${currentParams.toString()}`, { scroll: false });
    }
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Badge className="max-w-xs flex-1 justify-end rtl:flex-row-reverse text-sm px-4">
            <CalendarDays />
            {t("button")}
          </Badge>
        </PopoverTrigger>
        <PopoverContent>
          <Select onValueChange={handleSelectChange}>
            <div className="flex justify-center items-center gap-5">
              <div> {t("years")} </div>
              <SelectTrigger className="w-[144px] h-8">
                <SelectValue placeholder={t("choose")} className="text-center" />
              </SelectTrigger>
            </div>

            <SelectContent className="max-h-48 overflow-y-auto">
              {items.map((item, index) => (
                <SelectItem
                  key={index}
                  className="flex justify-center items-center"
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PopoverContent>
      </Popover>
    </div>
  );
}
