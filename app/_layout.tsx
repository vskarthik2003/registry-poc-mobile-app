import "@/global.css";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppConfigProvider } from "@/src/providers/AppConfigProvider";
import { ThemeProviderBridge } from "@/src/providers/ThemeProviderBridge";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppConfigProvider>
          <ThemeProviderBridge>
            <Stack screenOptions={{ headerShown: false }} />
          </ThemeProviderBridge>
        </AppConfigProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
