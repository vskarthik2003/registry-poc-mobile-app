import { Text, View } from "react-native";

import { useTheme } from "@/src/providers/ThemeProvider";

type UserProfileProps = {
  name: string;
  email: string;
  memberSince: string;
  sectionId?: string;
};

export function UserProfile({ name, email, memberSince }: UserProfileProps) {
  const { theme } = useTheme();

  return (
    <View
      className="mx-5 my-4 p-5 rounded-2xl"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <View
        className="w-16 h-16 rounded-full items-center justify-center mb-4"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <Text className="text-2xl font-bold text-white">
          {name.charAt(0).toUpperCase()}
        </Text>
      </View>
      <Text className="text-xl font-bold text-gray-900">{name}</Text>
      <Text className="text-sm text-gray-500 mt-1">{email}</Text>
      <Text className="text-sm text-gray-400 mt-3">
        Member since {memberSince}
      </Text>
    </View>
  );
}
