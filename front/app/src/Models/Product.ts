import {ProductType} from "@/Models/ProductType";
import {Shop} from "@/Models/Shop";
import {ProductReduction} from "@/Models/ProductReduct";


export interface Product {
    productId: number;
    shopId: number;
    productTypeId: number;
    name: string;
    stock: number;
    price: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    productType?: ProductType;
    shop?: Shop;
    productReductions?: ProductReduction[];
}
