import React, {useEffect, useState} from "react";
import PaginatedData from "@/Models/PaginatedData";
import {ProductType} from "@/Models/ProductType";
import {getFiveProducts} from "@/pages/api/ProductTypeApi";

export default function Types(){
    const [productTypes, setProductTypes] = useState(new PaginatedData<ProductType>());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProductTypes = async () => {
            try {
                const productsData = await getFiveProducts();
                setProductTypes(productsData);
                console.log(`${productTypes}`);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchProductTypes().then();

    }, []);

    return (<div className="mt-5 p-2 mb-16  w-full bg-orange-50 rounded-b-box">
        <h2 className="text-3xl p-5 font-bold mb-8">Toutes sortes de fleurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  justify-items-center ">


            <div className="card mb-6 w-96 bg-green-100 shadow-xl">
                <figure className="w-fit">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-b-sm w-fit" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card mb-6 w-96 bg-green-100 shadow-xl">
                <figure className="w-fit">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-b-sm w-fit" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card mb-6 w-96 bg-green-100 shadow-xl">
                <figure className="">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-b-sm w-fit" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card mb-6 w-96 bg-green-100 shadow-xl">
                <figure className="">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-b-sm w-fit" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="join flex bg-white p-1">
            <button className="join-item btn w-1/6 ">« Precédente</button>
            <button className="join-item btn w-4/6 ">Page 22/50 </button>
            <button className="join-item btn w-1/6">Suivante »</button>
        </div>

    </div>);
}