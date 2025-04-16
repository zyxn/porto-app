"use client";

interface TimeProps {
  time: Date;
  showSeconds?: boolean;
  timeFormat?: "12h" | "24h";
}

export const Time = ({
  time,
  showSeconds = false,
  timeFormat = "12h",
}: TimeProps) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: timeFormat === "12h",
  };

  if (showSeconds) {
    options.second = "2-digit";
  }

  return (
    <span className="whitespace-nowrap">
      {time.toLocaleTimeString(undefined, options)}
    </span>
  );
};

export default Time;
