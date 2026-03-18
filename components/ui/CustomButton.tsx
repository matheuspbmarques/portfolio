import fonts from "@/configs/fonts";

interface CustomButtonProps {
  children?: React.ReactNode;
}

export default function CustomButton({ children }: CustomButtonProps) {
  return (
    <button
      className={`w-max p-2 rounded-lg text-slate-100 text-sm ${fonts.kanitText.className} duration-300 custom-gradient`}
    >
      {children}
    </button>
  );
}
