export type MenuItem = {
  name: string;
  description: string;
  imgUrl: string;
  isVegetarian: boolean;
  isPlantBased: boolean;
  isGlutenFree: boolean;
  isSpicy: boolean;
  calories?: number;
  minServes?: number;
  maxServes?: number;
};
