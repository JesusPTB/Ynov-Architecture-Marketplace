import Link from "next/link";
import React, {useEffect, useState} from "react";
import {getFiveProducts} from "@/pages/api/ProductTypeApi";
import {getFiveProdReductions} from "@/pages/api/ProductReductionApi";
import {getFiveShops} from "@/pages/api/ShopApi";
import {ProductType} from "@/Models/ProductType";
import {Shop} from "@/Models/Shop";
import {ProductReduction} from "@/Models/ProductReduct";

interface LeftMenuProps {
    onMenuClick: (id: number, filtre: string) => void;
}
export const LeftMenu: React.FC<LeftMenuProps> = ({ onMenuClick }) => {
    const handleItemClick = (id: number, filtre: string) => {
        // Déclencher la fonction de rappel avec l'ID et le type

        if(id || filtre)
        {
            onMenuClick(id, filtre);
        }

    };
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [shops, setShops] = useState<Shop[]>([]);
    const [reductions, setReductions] = useState<ProductReduction[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchProductTypes = async () => {
            try {
                const productsData = await getFiveProducts();
                setProductTypes(productsData);
                setIsLoading(false)
                console.log('abcdefghi');
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        const fetchShops = async () => {
            try {
                const shopsData = await getFiveShops();
                setShops(shopsData);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        const fetchReduction = async () => {
            try {
                const ReductionsData = await getFiveProdReductions();
                setReductions(ReductionsData);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        fetchProductTypes().then();
        fetchShops().then();
        fetchReduction().then();

    }, []);
    return (
        <div>

            <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                <li>

                    <Link href="/products/Types">Nos types de produits</Link>

                    <ul>

                        {isLoading? (
                                <span className="loading loading-infinity loading-md"></span>
                            ):
                            (
                                <div>
                                    {productTypes &&
                                       productTypes.map(item =>(
                                               <li onClick={() => handleItemClick(item.id, 'type')} key={item.id}><Link href="/">{item.name}</Link></li>
                                    )

                                        )}
                                </div>
                            )
                        }
                    </ul>
                </li>
                <li>
                    <Link href="/products/Shop">Nos boutiques</Link>
                    <ul>
                        {isLoading? (
                                <span className="loading loading-infinity loading-md"></span>
                            ):
                            (
                                <div>
                                    {shops &&
                                        shops.map(item =>(
                                                <li onClick={() => handleItemClick(item.shopId, 'shop')} key={item.shopId}><Link href="/">{item.shopName}</Link></li>
                                            )

                                        )}
                                </div>
                            )
                        }
                    </ul>
                </li>
                <li>
                    <Link href="/products/Reduction">Nos réductions</Link>
                    <ul>
                        {isLoading? (
                                <span className="loading loading-infinity loading-md"></span>
                            ):
                            (
                                <div>
                                    {reductions &&
                                        reductions.map(item =>(
                                            <li onClick={() => handleItemClick(item.id, 'reduction')} key={item.id}><Link href="">{item.reduction?.title}<span className="badge">{item.reduction?.percentage.toFixed(2)} %</span></Link></li>
                                                    )

                                        )}
                                </div>
                            )}
                    </ul>
                </li>
            </ul>
        </div>
    );

}
