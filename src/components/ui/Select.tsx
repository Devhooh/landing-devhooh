import { SelectHTMLAttributes, ReactNode } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: ReactNode; // opciones
}

export function Select({ label, id, children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
