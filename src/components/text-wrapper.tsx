import { Check } from "lucide-react";

export function LiTextWrapper({ text }: { text: string }) {
  return (
    <li className='flex gap-1.5 items-center text-left'>
      <Check className='h-5 w-5 shrink-0 text-green-600' />
      {text}
    </li>
  );
}
