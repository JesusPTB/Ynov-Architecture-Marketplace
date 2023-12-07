import {Shop} from "@/Models/Shop";
import {ProductReduction} from "@/Models/ProductReduct";

export interface Reduction {
    id: number;
    shopId: number;
    title: string;
    description: string;
    percentage: number;
    beginDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    shop?: Shop;
    productReductions?: ProductReduction[];
}