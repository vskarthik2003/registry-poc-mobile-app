import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PreviewBanner } from "@/components/preview/PreviewBanner";
import { useAppConfig } from "@/src/providers/AppConfigProvider";
import { DynamicTabBar } from "@/src/renderer/DynamicTabBar";
import { PageRenderer } from "@/src/renderer/PageRenderer";
import { useTheme } from "@/src/providers/ThemeProvider";

export default function PreviewScreen() {
  const { activePageId } = useAppConfig();
  const { theme } = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: theme.colors.background }}
      edges={["top"]}
    >
      <PreviewBanner />
      <View className="flex-1">
        <PageRenderer pageId={activePageId} />
      </View>
      <DynamicTabBar />
    </SafeAreaView>
  );
}
