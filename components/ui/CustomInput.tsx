import { InputHTMLAttributes } from "react";

type CustomInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function CustomInput({
  label,
  ...inputProps
}: CustomInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      <div className={`custom-gradient rounded-lg p-0.5`}>
        <input
          {...inputProps}
          className={`rounded-md p-2 text-slate-100 placeholder-slate-400 bg-slate-600 w-full outline-hidden`}
        />
      </div>
    </div>
  );
}
