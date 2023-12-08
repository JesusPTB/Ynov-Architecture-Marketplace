import React, {useEffect, useState} from "react";
import PaginatedData from "@/Models/PaginatedData";
import {getProdReductSwitchIsActivated} from "@/pages/api/ProductReductionApi";
import {ProductReduction} from "@/Models/ProductReduct";

export default function Reduction(){
    const [productReduct, setProductReduct] = useState<PaginatedData<ProductReduction>>();
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const formatPrice = (price: number | undefined) => {
        if(!price)
            return '0€'
        const truncatedPrice = price!.toFixed(2);
        const formattedPrice = truncatedPrice!.replace('.', ',');
        return `${formattedPrice} €`;
    };

    const calculatePrice = (price: number| undefined, percentage: number| undefined)=>{
        if(!price || !percentage)
            return '';
        return formatPrice(price - (price*percentage)/100);
    }

    useEffect(() => {


        const fetchProdReducts = async () =>{
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500));
            try{
                const shopsData = await getProdReductSwitchIsActivated(true, pageNumber.toString(), '10');
                setProductReduct(shopsData);
console.log(productReduct);
                setIsLoading(false)
            }
            catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }
        fetchProdReducts().then();
    }, [pageNumber]);

    return (<div className="mt-5 p-2 mb-16  w-full bg-orange-50 rounded-b-box">


        <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl p-5 font-bold mb-8">Découvrez nos Réductions courantes et à venir</h2>
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
                productReduct && productReduct.data?.map(item=>(
                    <div key = {item.id} className="conte card mb-6 w-96 bg-green-100 shadow-xl ">
                        <figure className="w-fit ">
                            <img className="rounded-b-2xl w-full" src="https://th.bing.com/th/id/OIP.wX3qGP6uBmAm7bO3udG61wHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title underline">{item.reduction?.title}</h2>
                            <p className="line-clamp-2">{item.reduction?.description}</p>
                            <h2 className="card-content ">Du {item.reduction?.beginDate.toString()} au {item.reduction?.endDate.toString()}</h2>
                            <p>Reduction de {item.reduction?.percentage}% sur {item.product?.name}</p>
                            <p className="line-clamp-1"> {calculatePrice(item.product?.price, item.reduction?.percentage)} <span className="line-through">{formatPrice(item.product?.price)} €</span> </p>
                            <div className="card-actions">
                            </div>
                        </div>
                    </div>
                ))}
        </div>


        {productReduct?.totalRecords==0?
            <div className="stats shadow">



                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-value">Aucune donnée disponible</div>

                </div>



            </div>
            :
            <div className="join flex bg-white p-1">
                <button onClick={() =>setPageNumber(pageNumber - 1)} className={`join-item btn w-1/6 ${productReduct?.previousPage==null?'btn-disabled':''}`}>« Precédente</button>
                {isLoading?
                    <div className="join-item btn  w-4/6 bg-white">
                        <span className="loading loading-dots loading-sm"></span>
                    </div>:
                    <button className="join-item btn  w-4/6 bg-white">Page {productReduct?.pageNumber}/{productReduct?.totalPages} </button>
                }
                <button onClick={() =>setPageNumber(pageNumber + 1)} className={`join-item btn w-1/6 ${productReduct?.nextPage==null?'btn-disabled':''}`}>Suivante »</button>
            </div>
        }




    </div>);
}