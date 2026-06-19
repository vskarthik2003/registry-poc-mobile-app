import type { ComponentType } from "react";
import { z } from "zod";

import { CategoryRow } from "@/components/sections/CategoryRow";
import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Header } from "@/components/sections/Header";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { Orders } from "@/components/sections/Orders";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { UserProfile } from "@/components/sections/UserProfile";

export type ComponentDefinition<TProps = Record<string, unknown>> = {
  type: string;
  version: number;
  displayName: string;
  category: "navigation" | "hero" | "product" | "marketing" | "account";
  propsSchema: z.ZodType<TProps>;
  defaultProps: TProps;
};

const HeaderPropsSchema = z.object({
  showSearch: z.boolean().default(true),
  showCart: z.boolean().default(true),
  showMenu: z.boolean().default(true),
});

const HeroBannerPropsSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  imageUrl: z.string().url(),
  ctaLabel: z.string().optional(),
});

const CategoryItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  color: z.string(),
});

const CategoryRowPropsSchema = z.object({
  title: z.string(),
  categories: z.array(CategoryItemSchema),
});

const CountdownTimerPropsSchema = z.object({
  title: z.string(),
  endDate: z.string(),
});

const ProductItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  color: z.string().optional(),
});

const FeaturedProductsPropsSchema = z.object({
  title: z.string(),
  products: z.array(ProductItemSchema),
});

const ProductGridPropsSchema = z.object({
  title: z.string(),
  columns: z.number().min(1).max(3).default(2),
  products: z.array(ProductItemSchema),
});

const CollectionItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  itemCount: z.number(),
  color: z.string(),
});

const CollectionGridPropsSchema = z.object({
  title: z.string(),
  collections: z.array(CollectionItemSchema),
});

const UserProfilePropsSchema = z.object({
  name: z.string(),
  email: z.string(),
  memberSince: z.string(),
});

const OrderItemSchema = z.object({
  id: z.string(),
  status: z.string(),
  total: z.string(),
  date: z.string(),
});

const OrdersPropsSchema = z.object({
  title: z.string(),
  orders: z.array(OrderItemSchema),
});

export const componentDefinitions = {
  Header: {
    type: "Header",
    version: 1,
    displayName: "Header",
    category: "navigation",
    propsSchema: HeaderPropsSchema,
    defaultProps: {
      showSearch: true,
      showCart: true,
      showMenu: true,
    },
  },
  HeroBanner: {
    type: "HeroBanner",
    version: 1,
    displayName: "Hero Banner",
    category: "hero",
    propsSchema: HeroBannerPropsSchema,
    defaultProps: {
      title: "Welcome",
      subtitle: "",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      ctaLabel: "Shop Now",
    },
  },
  CategoryRow: {
    type: "CategoryRow",
    version: 1,
    displayName: "Category Row",
    category: "product",
    propsSchema: CategoryRowPropsSchema,
    defaultProps: {
      title: "Categories",
      categories: [],
    },
  },
  CountdownTimer: {
    type: "CountdownTimer",
    version: 1,
    displayName: "Countdown Timer",
    category: "marketing",
    propsSchema: CountdownTimerPropsSchema,
    defaultProps: {
      title: "Sale ends in",
      endDate: new Date().toISOString(),
    },
  },
  FeaturedProducts: {
    type: "FeaturedProducts",
    version: 1,
    displayName: "Featured Products",
    category: "product",
    propsSchema: FeaturedProductsPropsSchema,
    defaultProps: {
      title: "Featured",
      products: [],
    },
  },
  ProductGrid: {
    type: "ProductGrid",
    version: 1,
    displayName: "Product Grid",
    category: "product",
    propsSchema: ProductGridPropsSchema,
    defaultProps: {
      title: "Products",
      columns: 2,
      products: [],
    },
  },
  CollectionGrid: {
    type: "CollectionGrid",
    version: 1,
    displayName: "Collection Grid",
    category: "product",
    propsSchema: CollectionGridPropsSchema,
    defaultProps: {
      title: "Collections",
      collections: [],
    },
  },
  UserProfile: {
    type: "UserProfile",
    version: 1,
    displayName: "User Profile",
    category: "account",
    propsSchema: UserProfilePropsSchema,
    defaultProps: {
      name: "Guest User",
      email: "guest@example.com",
      memberSince: "2026",
    },
  },
  Orders: {
    type: "Orders",
    version: 1,
    displayName: "Orders",
    category: "account",
    propsSchema: OrdersPropsSchema,
    defaultProps: {
      title: "Orders",
      orders: [],
    },
  },
} as const satisfies Record<string, ComponentDefinition>;

export type RegistryComponentType = keyof typeof componentDefinitions;

export const runtimeRegistry: Record<
  RegistryComponentType,
  ComponentType<any>
> = {
  Header,
  HeroBanner,
  CategoryRow,
  CountdownTimer,
  FeaturedProducts,
  ProductGrid,
  CollectionGrid,
  UserProfile,
  Orders,
};

export function getComponentDefinition(type: string) {
  return componentDefinitions[type as RegistryComponentType];
}

export function isRegisteredComponent(type: string): type is RegistryComponentType {
  return type in runtimeRegistry;
}
