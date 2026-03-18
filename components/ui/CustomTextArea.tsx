import type { TextareaHTMLAttributes } from "react";

type CustomTextAreaProps = {
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function CustomTextArea({
  label,
  ...textareaProps
}: CustomTextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={textareaProps.id}>{label}</label>}
      <div className={`custom-gradient rounded-lg p-0.5`}>
        <textarea
          rows={6}
          {...textareaProps}
          className={`rounded-md p-2 text-slate-100 placeholder-slate-400 bg-slate-600 w-full outline-hidden resize-none`}
        />
      </div>
    </div>
  );
}
