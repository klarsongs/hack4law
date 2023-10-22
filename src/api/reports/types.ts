export interface GetReportResponse {
  data: Report;
}

export interface Report {
  id: string;
  slug: string;
  occurrence: string;
  description: string;
  relation_with_the_company: string;
  person_involved: string;
  full_name: string;
  additional_information: string;
  status: string;
  organization_id: string;
  created_at: string;
  files: File[];
  category: Category;
  subcategory: Subcategory;
  localization: string;
  already_reported: boolean;
  source_of_truth: any;
  comments: any[];
}

export interface File {
  name: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  description: any;
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
}
