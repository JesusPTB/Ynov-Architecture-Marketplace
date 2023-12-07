import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {HomeComponent} from "@/components/HomeComponent";
import React, {useState} from "react";
import {LeftMenu} from "@/components/LeftMenu";
import Home from "@/pages/index";

class LeftMenuProps {
    id: number;
    filter: string;
    constructor(id: number, filter:string) {
        this.id = id;
        this.filter = filter;
    }
}
export default function App({ Component, pageProps }: AppProps) {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };
    const[filterInfos, setFiltersInfo] = useState<LeftMenuProps>();
    const handleMenuClick = (id: number, type: string) => {
        // Faire quelque chose avec l'ID et le type dans App
        if(id!=undefined || type!=undefined)
        {
            setFiltersInfo(new LeftMenuProps(id, type));
        }

    };

    return (
        <>
            <Header/>
            <div className="h flex flex-col h-screen">
                <div className="m-5">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content" >
                            <div className="mb-auto flex w-full">
                                <label className="text-2xl btn btn-glass btn-md rotate-180 drawer-button" htmlFor="my-drawer" onClick={toggleFilters}>❮</label>
                                <div className="ml-1 w-full">
                                    <HomeComponent/>
                                    <Component {...pageProps} {...filterInfos} />
                                </div>
                            </div>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <LeftMenu onMenuClick={handleMenuClick}/>
                        </div>
                    </div>


                </div>
                <Footer/>
            </div>
        </>
    );
}