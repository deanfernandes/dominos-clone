import type { MenuItemType } from "./MenuItem";

export type Deal = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  types: MenuItemType[];
  popularity: number;
};
