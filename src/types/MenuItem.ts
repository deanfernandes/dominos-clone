export interface MenuItem {
  type: "pizza" | "side" | "dessert" | "drink";
  imgUrl: string;
  name: string;
  description: string;
  createdAt: string;
  pricing: Pricing;
}

export interface FoodMenuItem extends MenuItem {
  isVegetarian: boolean;
  isPlantBased: boolean;
  isGlutenFree: boolean;
  isSpicy: boolean;
  calories: number;
  minServes: number;
  maxServes?: number;
}

export interface PizzaItem extends FoodMenuItem {
  type: "pizza";
}

export interface SideItem extends FoodMenuItem {
  type: "side";
}

export interface DessertItem extends FoodMenuItem {
  type: "dessert";
}

export interface DrinkItem extends MenuItem {
  type: "drink";
  caloriesInfoLink: string;
  isSoftDrink: boolean;
}

export interface SizePriceOption {
  size: string;
  price: number;
}

export type Pricing =
  | { pricingType: "single"; price: number }
  | { pricingType: "multi"; sizePriceOptions: SizePriceOption[] };

export type AnyMenuItem = PizzaItem | SideItem | DessertItem | DrinkItem;
