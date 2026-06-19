import { Text, View } from "react-native";

type Collection = {
  id: string;
  name: string;
  itemCount: number;
  color: string;
};

type CollectionGridProps = {
  title: string;
  collections: Collection[];
  sectionId?: string;
};

export function CollectionGrid({ title, collections }: CollectionGridProps) {
  return (
    <View className="py-4 px-5">
      <Text className="pb-3 text-lg font-semibold text-gray-900">{title}</Text>
      <View className="flex-row flex-wrap justify-between gap-y-4">
        {collections.map((collection) => (
          <View
            key={collection.id}
            className="w-[47%] h-36 rounded-xl p-4 justify-end"
            style={{ backgroundColor: collection.color }}
          >
            <Text className="text-white text-lg font-bold">{collection.name}</Text>
            <Text className="text-white/90 text-sm">
              {collection.itemCount} items
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
