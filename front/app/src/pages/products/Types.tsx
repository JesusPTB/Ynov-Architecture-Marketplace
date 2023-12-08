import React, {useEffect, useState} from "react";
import PaginatedData from "@/Models/PaginatedData";
import {ProductType} from "@/Models/ProductType";
import {getPaginatedProductTypes} from "@/pages/api/ProductTypeApi";

export default function Types(){
    const [productTypes, setProductTypes] = useState<PaginatedData<ProductType>>();
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchPaginatedProdTypes = async () =>{
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500));
            try{
                const productsData = await getPaginatedProductTypes(pageNumber.toString(), '10');
                setProductTypes(productsData);

                setIsLoading(false)
            }
            catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }
        fetchPaginatedProdTypes().then();

    }, [pageNumber]);

    return (<div className="mt-5 p-2 mb-16  w-full bg-orange-50 rounded-b-box">


        <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl p-5 font-bold mb-8">Découvrez nos types de fleurs</h2>
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
                productTypes && productTypes.data?.map(item=>(
                    <div key = {item.id} className="conte card mb-6 w-96 bg-green-100 shadow-xl ">
                        <figure >
                            <img className="rounded-b-sm w-full" src="https://th.bing.com/th/id/OIP.7WJdlpLoDZ9tnJO1aaB_AgHaE8?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title underline">{item.name}</h2>
                            <p className="line-clamp-2">{item.description}</p>
                            <div className="card-actions">
                            </div>
                        </div>
                    </div>
                ))}
        </div>

        {productTypes?.totalRecords==0?
            <div className="stats shadow">



                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-value">Aucune donnée disponible</div>

                </div>



            </div>:
            <div className="join flex bg-white p-1">
                <button onClick={() =>setPageNumber(pageNumber - 1)} className={`join-item btn w-1/6 ${productTypes?.previousPage==null?'btn-disabled':''}`}>« Precédente</button>
                {isLoading?
                    <div className="join-item btn  w-4/6 bg-white">
                        <span className="loading loading-dots loading-sm"></span>
                    </div>:
                    <button className="join-item btn  w-4/6 bg-white">Page {productTypes?.pageNumber}/{productTypes?.totalPages} </button>
                }
                <button onClick={() =>setPageNumber(pageNumber + 1)} className={`join-item btn w-1/6 ${productTypes?.nextPage==null?'btn-disabled':''}`}>Suivante »</button>
            </div>
        }




    </div>);
}