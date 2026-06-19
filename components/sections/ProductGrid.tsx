import { Text, View } from "react-native";

import { ProductCard } from "@/components/sections/ui/ProductCard";

type Product = {
  id: string;
  name: string;
  price: string;
  color?: string;
};

type ProductGridProps = {
  title: string;
  columns?: number;
  products: Product[];
  sectionId?: string;
};

export function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <View className="py-4 px-5">
      <Text className="pb-3 text-lg font-semibold text-gray-900">{title}</Text>
      <View className="flex-row flex-wrap justify-between gap-y-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            color={product.color}
          />
        ))}
      </View>
    </View>
  );
}
