import { Category } from './category';

export interface Product {
  name: string;
  description: string;
  richDescription: string;
  image: string;
  images: string[];
  brand: string;
  price: number;
  category: Category;
  countInStock: number;
  dateCreated: Date;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
}
