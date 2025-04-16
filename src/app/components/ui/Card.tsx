import { Card as NextUICard } from "@nextui-org/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  isPressable?: boolean;
  onPress?: () => void;
}

export function Card({
  children,
  className = "",
  isPressable = false,
  onPress,
}: CardProps) {
  return (
    <NextUICard
      isPressable={isPressable}
      onPress={onPress}
      className={`bg-[#0C0B0B] border-8 border-[#0C0B0B] rounded-lg ${className}`}
      shadow="sm"
    >
      {children}
    </NextUICard>
  );
}
