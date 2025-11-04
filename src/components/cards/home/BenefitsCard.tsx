import { BenefitItem } from "@/data/types";
import { IconMap } from "@/data/types";

export default function BenefitsCard({
icon,
title,
description,
}: BenefitItem) {
  const IconComponent = IconMap[icon];
  
  return (
    <div className="flex flex-col items-start text-left">
      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl md-tablet:text-2xl font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-colorHover5 leading-relaxed">
        {description}
      </p>
    </div>
  );
}