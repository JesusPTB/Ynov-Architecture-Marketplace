import {Product} from "@/Models/Product";


export interface ProductType {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    products?: Product[];
}