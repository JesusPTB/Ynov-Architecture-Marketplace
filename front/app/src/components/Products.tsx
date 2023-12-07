import React, {useEffect, useState} from "react";
import {
    getPaginatedByPrice,
    getPaginatedByShop,
    getPaginatedByType,
    getPaginatedProducts
} from "@/pages/api/ProductApi";
import PaginatedData from "@/Models/PaginatedData";
import {Product} from "@/Models/Product";

class PriceFilter{
    minValue: number =0;
    maxValue: number =1000000;
}

interface ProductProps{
    id: number,
    filter: string
}




export const Products: React.FC<ProductProps> = (productProps) => {

    const [products, setProducts] = useState<PaginatedData<Product>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const [priceFilter, setFilter] = useState<PriceFilter>(new PriceFilter());


    const formatPrice = (price: number) => {
        const truncatedPrice = price.toFixed(2);
        const formattedPrice = truncatedPrice.replace('.', ',');
        return `${formattedPrice} €`;
    };




    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            // Pause de 5 secondes
            await new Promise(resolve => setTimeout(resolve, 1000));
            try {
                let productsData;
                if(productProps.filter == 'type')
                {
                    productsData = await getPaginatedByType(productProps.id, pageNumber.toString(), "10");
                }
                else  if (productProps.filter == 'shop')
                {
                    productsData = await getPaginatedByShop(productProps.id, pageNumber.toString(), "10");
                }
                else
                {
                    productsData = await getPaginatedProducts(pageNumber.toString(), "10");
                }

                setProducts(productsData);
                setIsLoading(false)
            } catch (error) {
                //console.log(error);
                setIsLoading(false);
            }
        };

        fetchProducts().then();

    }, [pageNumber, productProps]);

    return (<div className="mt-5 p-2 mb-16  w-full bg-orange-50 rounded-b-box">


                   <div className="flex flex-col items-center justify-center">
                       <h2 className="text-3xl p-5 font-bold mb-8">Des fleurs à couper le souffle</h2>
                   </div>
        {isLoading?
            <div className="flex flex-col items-center justify-center h-48 mb-6">

                <span>
                    <span className="loading loading-spinner text-primary mr-2"></span>
                    <span className="loading loading-spinner text-secondary mr-2"></span>
                    <span className="loading loading-spinner text-accent mr-2"></span>
                    <span className="loading loading-spinner text-neutral mr-2"></span>
                    <span className="loading loading-spinner text-info mr-2"></span>
                    <span className="loading loading-spinner text-success mr-2"></span>
                    <span className="loading loading-spinner text-warning mr-2"></span>
                    <span className="loading loading-spinner text-error mr-2"></span>
                </span>

            </div>:
            <div/>
        }
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  justify-items-center ">

                        {isLoading?
                            <>

                            </>:
                            products && products.data?.map(item=>(
                        <div key = {item.productId} className="conte card mb-6 w-96 bg-green-100 shadow-xl ">
                            <figure className="w-fit">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-b-sm w-fit" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title underline">{item.name}</h2>
                                <p className="line-clamp-2">{item.description}</p>
                                <h2 className="card-title">Vendeur: {item.shop?.shopName}</h2>

                                <p className=" slashed-zero lining-nums"> {formatPrice(item.price)}<span className="badge ml-2"> -15%</span></p>
                                <p className="line-clamp-1">Ancien prix: <span className="line-through">55,77 €</span> </p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>




        <div className="join flex bg-white p-1">
            <button onClick={() =>setPageNumber(pageNumber - 1)} className={`join-item btn w-1/6 ${products.previousPage==null?'btn-disabled':''}`}>« Precédente</button>
            {isLoading?
                <div className="join-item btn  w-4/6 bg-white">
                    <span className="loading loading-dots loading-sm"></span>
                </div>:
                <button className="join-item btn  w-4/6 bg-white">Page {products.pageNumber}/{products.totalPages} </button>
            }
            <button onClick={() =>setPageNumber(pageNumber + 1)} className={`join-item btn w-1/6 ${products.nextPage==null?'btn-disabled':''}`}>Suivante »</button>
        </div>

    </div>);
}
