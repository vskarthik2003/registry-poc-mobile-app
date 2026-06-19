import { ScrollView, Text, View } from "react-native";

type Category = {
  id: string;
  label: string;
  color: string;
};

type CategoryRowProps = {
  title: string;
  categories: Category[];
  sectionId?: string;
};

export function CategoryRow({ title, categories }: CategoryRowProps) {
  return (
    <View className="py-4">
      <Text className="px-5 pb-3 text-lg font-semibold text-gray-900">
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
      >
        {categories.map((category) => (
          <View key={category.id} className="items-center">
            <View
              className="w-20 h-20 rounded-full mb-2"
              style={{ backgroundColor: category.color }}
            />
            <Text className="text-sm text-gray-700">{category.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
