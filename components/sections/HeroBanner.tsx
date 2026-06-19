import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "@/src/providers/ThemeProvider";

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaLabel?: string;
  sectionId?: string;
};

export function HeroBanner({
  title,
  subtitle,
  imageUrl,
  ctaLabel = "Shop Now",
}: HeroBannerProps) {
  const { theme } = useTheme();

  return (
    <View className="relative">
      <Image
        source={{ uri: imageUrl }}
        style={{ width: "100%", height: 280 }}
        contentFit="cover"
      />
      <View className="absolute inset-0 bg-black/30" />
      <View className="absolute bottom-8 left-5 right-5">
        <Text className="text-3xl font-bold text-white mb-2">{title}</Text>
        {subtitle ? (
          <Text className="text-base text-white/90 mb-4">{subtitle}</Text>
        ) : null}
        <TouchableOpacity
          className="self-start px-5 py-3 rounded-full"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <Text className="text-white font-semibold">{ctaLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
