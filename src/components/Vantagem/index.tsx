import { Check } from "lucide-react";

interface IVatagemProps {
  text: string;
}

export default function Vantagem({ text }: IVatagemProps) {
  return (
    <div className="flex gap-2">
      <Check />
      <p>{text}</p>
    </div>
  );
}
