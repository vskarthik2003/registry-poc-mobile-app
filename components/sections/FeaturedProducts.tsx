import { ScrollView, Text, View } from "react-native";

import { ProductCard } from "@/components/sections/ui/ProductCard";

type Product = {
  id: string;
  name: string;
  price: string;
  color?: string;
};

type FeaturedProductsProps = {
  title: string;
  products: Product[];
  sectionId?: string;
};

export function FeaturedProducts({ title, products }: FeaturedProductsProps) {
  return (
    <View className="py-4">
      <Text className="px-5 pb-3 text-lg font-semibold text-gray-900">
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
      >
        {products.map((product) => (
          <View key={product.id} className="w-44">
            <ProductCard
              name={product.name}
              price={product.price}
              color={product.color}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
