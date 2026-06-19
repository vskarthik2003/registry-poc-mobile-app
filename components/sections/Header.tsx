import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "@/src/providers/ThemeProvider";

type HeaderProps = {
  showSearch?: boolean;
  showCart?: boolean;
  showMenu?: boolean;
  sectionId?: string;
};

export function Header({
  showSearch = true,
  showCart = true,
  showMenu = true,
}: HeaderProps) {
  const { theme, branding } = useTheme();

  return (
    <View
      className="flex-row items-center justify-between px-5 py-4"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Text
        className="text-xl font-bold"
        style={{ color: theme.colors.primary }}
      >
        {branding.appName}
      </Text>

      <View className="flex-row items-center gap-4">
        {showSearch ? (
          <TouchableOpacity accessibilityLabel="Search">
            <Ionicons name="search" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        ) : null}
        {showMenu ? (
          <TouchableOpacity accessibilityLabel="Menu">
            <Ionicons name="menu" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        ) : null}
        {showCart ? (
          <TouchableOpacity accessibilityLabel="Cart">
            <Ionicons name="cart-outline" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
