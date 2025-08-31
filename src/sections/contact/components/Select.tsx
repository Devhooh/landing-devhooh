import { SelectHTMLAttributes, ReactNode } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: ReactNode; // opciones
}

export function Select({ label, id, children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-base font-semibold text-gray-200 mb-1">
        {label}
      </label>
      <select
        id={id}
        className="
          w-full rounded-xl text-white px-4 py-4 border border-gray-700 text-sm bg-gray-950
          focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 outline-none transition"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
