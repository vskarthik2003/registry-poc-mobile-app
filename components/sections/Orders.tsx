import { Text, View } from "react-native";

import { useTheme } from "@/src/providers/ThemeProvider";

type Order = {
  id: string;
  status: string;
  total: string;
  date: string;
};

type OrdersProps = {
  title: string;
  orders: Order[];
  sectionId?: string;
};

export function Orders({ title, orders }: OrdersProps) {
  const { theme } = useTheme();

  return (
    <View className="px-5 pb-6">
      <Text className="pb-3 text-lg font-semibold text-gray-900">{title}</Text>
      <View className="gap-3">
        {orders.map((order) => (
          <View
            key={order.id}
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-semibold text-gray-900">{order.id}</Text>
              <Text
                className="text-sm font-medium"
                style={{ color: theme.colors.primary }}
              >
                {order.status}
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-sm text-gray-500">{order.date}</Text>
              <Text className="font-semibold text-gray-900">{order.total}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
