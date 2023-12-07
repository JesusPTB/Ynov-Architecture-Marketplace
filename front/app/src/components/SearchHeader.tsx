import React from "react";

export const SearchHeader: React.FC = () => {
    return (
        <div className="join w-full ">
            <div className="w-full">
                <div>
                    <input className="input input-bordered join-item w-full" placeholder="Effectuer une recherche"/>
                </div>
            </div>
            <select className="select select-bordered join-item">
                <option disabled selected>Filtre</option>
                <option>Produit</option>
                <option>Boutique</option>
            </select>
            <div className="indicator">

                <button className="btn join-item">Chercher</button>
            </div>
        </div>
    );
};
