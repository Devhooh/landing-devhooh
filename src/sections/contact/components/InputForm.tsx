import { useState } from "react";

interface ValuesInput {
  nameHtmlFor: string
  title: string;
  id: string;
  name: string;
  type: string;
  placeholder: string
}

export default function InputForm({placeholder, nameHtmlFor, title, id, name, type}:ValuesInput) {
  const [valor, setValor] = useState("");

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={nameHtmlFor}
        className="text-base font-semibold text-white mb-1"
      >
        {title}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className={`w-full rounded-xl border px-4 py-3 
        focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 outline-none transition
          ${
            valor.trim() === ""
            ? 
            "bg-gray-950 text-white placeholder-gray-400 border-gray-700" 
            : 
            "bg-gray-100 text-gray-900 border-gray-300"
          }`}
        required
      />
    </div>
  );
}