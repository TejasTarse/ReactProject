import React, { createContext, useState } from 'react';
import { products as productData } from "../assets/assets.js";  

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";

    const [products, setProducts] = useState(productData);

    const value = {
        currency,
        products
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
