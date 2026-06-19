import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { useTheme } from "@/src/providers/ThemeProvider";

type CountdownTimerProps = {
  title: string;
  endDate: string;
  sectionId?: string;
};

function getTimeLeft(endDate: string) {
  const diff = new Date(endDate).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  const { theme } = useTheme();

  return (
    <View
      className="items-center px-3 py-2 rounded-lg min-w-[56px]"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <Text className="text-xl font-bold" style={{ color: theme.colors.text }}>
        {String(value).padStart(2, "0")}
      </Text>
      <Text className="text-xs" style={{ color: theme.colors.textMuted }}>
        {label}
      </Text>
    </View>
  );
}

export function CountdownTimer({ title, endDate }: CountdownTimerProps) {
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <View
      className="mx-5 my-4 p-4 rounded-2xl"
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: 1,
      }}
    >
      <Text
        className="text-center text-base font-semibold mb-3"
        style={{ color: theme.colors.text }}
      >
        {title}
      </Text>
      <View className="flex-row justify-center gap-2">
        <TimeBlock label="Days" value={timeLeft.days} />
        <TimeBlock label="Hrs" value={timeLeft.hours} />
        <TimeBlock label="Min" value={timeLeft.minutes} />
        <TimeBlock label="Sec" value={timeLeft.seconds} />
      </View>
    </View>
  );
}
