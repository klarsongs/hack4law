export interface GetCategoryResponse {
  data: Category[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
}
