import { ButtonHTMLAttributes } from "react";

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props} // permite type, onClick, className, etc.
      className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  );
}
