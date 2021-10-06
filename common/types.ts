export interface ExactProduct {
  id: number;
  name: string;
  developer: string;
  icon: string;
  vendor_identifier: string;
  ref_no: number;
  sku: string;
  package_name?: any;
  store_id: number;
  store: string;
  storefront: string;
  release_date: Date;
  added_date: Date;
  updated_date: Date;
  version: string;
  active: boolean;
  source?: any;
  type: string;
  devices: string[];
  bundle_identifier: string;
  storefronts: string[];
}

export interface App {
  monetization: {
    isFree: boolean;
    hasIaps: boolean;
    hasAds: boolean;
    price: number;
  };
  rating: {
    stars: number;
    count: number;
  };
  downloads?: any;
  updated_date: Date;
  release_date: Date;
  categories: {
    id: number;
    name: string;
    subCategories: {
      id: number;
      name: string;
    }[];
  }[];
  devices: string[];
  media: {
    type: string;
    url: string;
  }[];
  description: string;
  release_notes: string;
  countries: string[];
  langs: string[];
  localized_langs: string[];
  version: string;
  download_size: number;
  stores_id: number;
  content_rating: {
    field_name: string;
    value: string;
  };
  inferred_gender_classification: string;
  inferred_age_percentages: {
    "18-24": number;
    "25-34": number;
    "35-49": number;
    "50-64": number;
    "65+": number;
  };
  inferred_female_percent: number;
}
export interface AppsFigures {
  updated_date: Date;
  active: boolean;
  name: string;
  storefront: string;
  devices: string[];
  type: string;
  vendor_identifier: string;
  developer: string;
  price: number;
  exact_products: ExactProduct[];
  developer_id: number;
}

export interface AppsFiguresResponse {
  ios: App|null,
  icon:string,
  developer:string,
  name:string
  android: App|null
}
