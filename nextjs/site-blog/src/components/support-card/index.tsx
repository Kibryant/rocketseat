import type { ElementType } from "react";

interface SupportCardProps {
  Icon: ElementType;
  title: string;
  description: string;
  color: "blue" | "cyan" | "indigo";
}

export function SupportCard({ Icon, title, description, color }: SupportCardProps) {
  const rootBgColorClasses = {
    blue: "bg-blue-400",
    cyan: "bg-cyan-300",
    indigo: "bg-indigo-400/10"
  };

  const iconBgColorClasses = {
    blue: "bg-blue-300",
    cyan: "bg-cyan-200",
    indigo: "bg-indigo-300/20"
  };

  return (
    <div className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${rootBgColorClasses[color]}`}>
      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBgColorClasses[color]} mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <strong className="text-heading-sm text-gray-100">
        {title}
      </strong>
      <p className="text-body-sm text-gray-200">
        {description}
      </p>
    </div>
  )
}