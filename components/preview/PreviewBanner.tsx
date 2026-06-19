import { Text, TouchableOpacity, View } from "react-native";

import { useAppConfig } from "@/src/providers/AppConfigProvider";

export function PreviewBanner() {
  const { config, reloadConfig, isLoading } = useAppConfig();

  return (
    <View className="bg-rose-600 px-4 py-2 flex-row items-center justify-between">
      <View>
        <Text className="text-white text-xs font-semibold uppercase tracking-wide">
          Preview Mode
        </Text>
        <Text className="text-white/90 text-xs">
          {config.branding.appName} · rev {config.revision}
        </Text>
      </View>
      <TouchableOpacity
        className="bg-white/20 px-3 py-1 rounded-full"
        onPress={reloadConfig}
        disabled={isLoading}
      >
        <Text className="text-white text-xs font-medium">
          {isLoading ? "Reloading..." : "Reload"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
