export interface GetCategoryResponse {
  data: Category[];
}

export type IconType =
  | 'public'
  | 'finances'
  | 'transport'
  | 'environment'
  | 'nuclear'
  | 'food'
  | 'health'
  | 'consumer'
  | 'privacy'
  | 'home';

export interface Category {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  icon?: IconType; // icon type nie ma ikonki ale zeby typescript nie wywalal bledu
}
