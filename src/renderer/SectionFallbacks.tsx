import { Text, View } from "react-native";

type MissingSectionProps = {
  type: string;
};

export function MissingSection({ type }: MissingSectionProps) {
  return (
    <View className="mx-5 my-2 p-4 rounded-lg bg-amber-50 border border-amber-200">
      <Text className="text-amber-800 font-medium">
        Unknown section: {type}
      </Text>
    </View>
  );
}

type InvalidSectionProps = {
  type: string;
};

export function InvalidSection({ type }: InvalidSectionProps) {
  return (
    <View className="mx-5 my-2 p-4 rounded-lg bg-red-50 border border-red-200">
      <Text className="text-red-800 font-medium">
        Invalid props for section: {type}
      </Text>
    </View>
  );
}
