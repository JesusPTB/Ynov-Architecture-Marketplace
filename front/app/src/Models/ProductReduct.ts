import {Product} from "@/Models/Product";
import {Reduction} from "@/Models/Reduction";

export interface ProductReduction {
    id: number;
    productId: number;
    reductionId: number;
    isActivated: boolean;
    createdAt: Date;
    updatedAt: Date;
    product?: Product;
    reduction?: Reduction;
}
