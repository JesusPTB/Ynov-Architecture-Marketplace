import React from "react";
import Link from "next/link";
// @ts-ignore
import logo from "../../public/logo.png";
import Image from  "next/image"
import {SearchHeader} from "@/components/SearchHeader";

export const Header:React.FC = () => {
    return <header className="p-4">
        <div className="navbar color p-2 md:p-6 lg:p-8 flex items-center justify-between">
            <div className="flex-1">
                <div className="w-24">
                    <Image src={logo} alt="logo"/>
                </div>
                <div className="btn btn-ghost text-xl">
                    <Link href='/'>Louidacount</Link>
                </div>
            </div>
            <div className="flex-none">
                <SearchHeader/>
                <a href="/contact" className="btn btn-ghost text-xl mx-2">Nous contacter</a>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator tooltip-bottom" data-tip="Panier">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 produit</span>
                            <span className="text-info">Total: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">Mon panier</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profil

                            </a>
                        </li>
                        <li><a>Paramètre<span className="badge">indisponible</span></a></li>
                        <li><Link href="http://localhost:8000">Se connecter</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="divider divider-accent"/>
    </header>
}
