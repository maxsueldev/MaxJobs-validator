import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        "border rounded-sm px-4 py-1.5 md:w-105 outline-none",
        className
      )}
      {...props}
    />
  );
}
