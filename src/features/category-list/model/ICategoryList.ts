export interface ICategoryList {
  categories: ICategory[];
  activeCategory?: string;
}

export interface ICategory {
  id: number;
  name: string; // типа подпараметр для получения
  title: string;
}
