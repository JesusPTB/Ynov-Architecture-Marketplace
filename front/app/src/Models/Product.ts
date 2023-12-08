import {ProductType} from "@/Models/ProductType";
import {Shop} from "@/Models/Shop";
import {ProductReduction} from "@/Models/ProductReduct";
import { UtilsService } from "@/Utils/utilsService";


export class Product {
    productId?: number;
    shopId?: number;
    productTypeId?: number;
    name?: string;
    stock?: number;
    price?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    productType?: ProductType;
    shop?: Shop;
    productReductions?: ProductReduction[];
    constructor(){}

    public getTotalReduction():number
    {
        if(!this.productReductions) {
            return 0;
        }
        let cpt = 0.0;
        this.productReductions.map(pr=>{

            if(pr.isActivated)
            {
                if(pr.reduction && UtilsService.includesToday(pr.reduction.beginDate, pr.reduction.endDate) ) {
                    cpt+=pr.reduction.percentage;
                }

            }
        })
        return cpt;
    }

}
