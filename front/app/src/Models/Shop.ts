import {Product} from "@/Models/Product";
import {Reduction} from "@/Models/Reduction";

export interface Shop {
    shopId: number;
    shopName: string;
    shopDescription: string;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
    products?: Product[];
    reductions?: Reduction[];
}

