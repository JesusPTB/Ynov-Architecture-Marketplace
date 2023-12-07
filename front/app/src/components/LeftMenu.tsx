import Link from "next/link";
import React, {useEffect, useState} from "react";
import {getFiveProducts} from "@/pages/api/ProductTypeApi";
import {getFiveProdReductions} from "@/pages/api/ProductReductionApi";
import {getFiveShops} from "@/pages/api/ShopApi";
import PaginatedData from "@/Models/PaginatedData";
import {Product} from "@/Models/Product";
import {ProductType} from "@/Models/ProductType";

interface LeftMenuProps {
    onMenuClick: (id: number, filtre: string) => void;
}
export const LeftMenu: React.FC<LeftMenuProps> = ({ onMenuClick }) => {
    const handleItemClick = (id: number, filtre: string) => {
        // Déclencher la fonction de rappel avec l'ID et le type
        console.log(filtre);
        console.log('abcdefghi');
        console.log(id);
        if(id || filtre)
        {
            onMenuClick(id, filtre);
        }

    };
    const [productTypes, setProductTypes] = useState<PaginatedData<ProductType>>({});
    const [shops, setShops] = useState([]);
    const [reductions, setReductions] = useState([]);
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
                                    {/*{productTypes &&*/}
                                    {/*    productTypes.map(item =>(*/}
                                    {/*            <li onClick={() => handleItemClick(item.id, 'type')} key={item.id}><Link href="">{item.name}</Link></li>*/}
                                    {/*        )*/}

                                    {/*    )}*/}
                                </div>
                            )
                        }
                    </ul>
                </li>
                <li>
                    <Link href="/Shops">Nos boutiques</Link>
                    <ul>
                        {isLoading? (
                                <span className="loading loading-infinity loading-md"></span>
                            ):
                            (
                                <div>
                                    {/*{shops &&*/}
                                    {/*    shops.map(item =>(*/}
                                    {/*            <li onClick={() => handleItemClick(item.shopId, 'shop')} key={item.shopId}><Link href="">{item.shopName}</Link></li>*/}
                                    {/*        )*/}

                                    {/*    )}*/}
                                </div>
                            )
                        }
                    </ul>
                </li>
                <li>
                    <a>Nos réductions</a>
                    <ul>
                        {isLoading? (
                                <span className="loading loading-infinity loading-md"></span>
                            ):
                            (
                                <div>
                                    {/*{reductions &&*/}
                                    {/*    reductions.map(item =>(*/}
                                    {/*        <li onClick={() => handleItemClick(item.id, 'reduction')} key={item.id}><Link href="">{item.reduction.title}<span className="badge">{item.reduction.percentage} %</span></Link></li>*/}
                                    {/*                )*/}

                                    {/*    )}*/}
                                </div>
                            )}
                    </ul>
                </li>
            </ul>
        </div>
    );

}
