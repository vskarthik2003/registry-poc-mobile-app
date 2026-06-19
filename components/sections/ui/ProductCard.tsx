import { Text, View } from "react-native";

type ProductCardProps = {
  name: string;
  price: string;
  color?: string;
};

export function ProductCard({ name, price, color = "#DC2626" }: ProductCardProps) {
  return (
    <View className="w-[47%]">
      <View
        className="h-36 rounded-lg mb-2"
        style={{ backgroundColor: color }}
      />
      <Text className="text-base font-medium text-gray-900">{name}</Text>
      <Text className="text-sm text-gray-500">{price}</Text>
    </View>
  );
}
