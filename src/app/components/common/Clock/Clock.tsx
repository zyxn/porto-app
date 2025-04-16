// components/common/Clock/Clock.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Time = dynamic(() => import("./Time"), {
  ssr: false,
  loading: () => (
    <span className="inline-block w-20 h-6 bg-gray-700 rounded animate-pulse"></span>
  ),
});

// Pastikan menggunakan 'export interface' bukan hanya 'interface'
export interface ClockProps {
  initialTime?: number;
  className?: string;
  showSeconds?: boolean;
  timeFormat?: "12h" | "24h";
}

export const Clock = ({
  initialTime = Date.now(),
  className = "",
  showSeconds = false,
  timeFormat = "12h",
}: ClockProps) => {
  const [time, setTime] = useState(new Date(initialTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`text-2xl tabular-nums font-bold ${className}`}>
      <Time time={time} showSeconds={showSeconds} timeFormat={timeFormat} />
    </div>
  );
};
