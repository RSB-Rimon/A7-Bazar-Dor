export interface ItemType {
  id: number;
  nameBn: string;
  image: string;
  categoryIcon: string;
  categoryNameBn: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  unit: string;
  slug: string;
  category: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}