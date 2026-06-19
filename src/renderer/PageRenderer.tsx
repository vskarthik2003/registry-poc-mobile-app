import { ScrollView, Text, View } from "react-native";

import { useAppConfig } from "@/src/providers/AppConfigProvider";
import { SectionRenderer } from "@/src/renderer/SectionRenderer";
import { useTheme } from "@/src/providers/ThemeProvider";

type PageRendererProps = {
  pageId: string;
};

export function PageRenderer({ pageId }: PageRendererProps) {
  const { config } = useAppConfig();
  const { theme } = useTheme();
  const page = config.pages.find((entry) => entry.id === pageId);

  if (!page) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text style={{ color: theme.colors.textMuted }}>
          Page not found: {pageId}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: theme.colors.background }}
      showsVerticalScrollIndicator={false}
    >
      {page.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </ScrollView>
  );
}
