// Home.tsx

import React from "react";
import { Products } from "@/components/Products";

interface HomeProps {
    leftMenuProps: LeftMenuProps; // Utilisez le type approprié ici
}

interface LeftMenuProps {
    id: number;
    filter: string;
}

const Home: React.FC<LeftMenuProps> = ({ filter,id }) => {

    return (
        <main>
           
            <Products filter={filter} id={id} />
        </main>
    );
};

export default Home;
