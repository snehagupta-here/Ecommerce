import { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    let [product, setProduct] = useState([]);

    useEffect(() => {
        if (products && products.length) {
            setProduct(products.slice(0,10));
        }
    }, []);

    return (
        <>
            <div className="mt-[4rem]">
                <div className="mx-auto w-[20rem]">
                    <Title text1={"LATEST "} text2={"COLLECTIONS"} />
                </div>
                <p className="text-[#868686] mx-auto font-400 w-[50%]">
                    Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>
            {/* Rendering latest collection products */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    product.map((el, index) => (
                        <ProductItem
                            key={index}
                            id={el._id}
                            image={el.image[0]}
                            name={el.name}
                            price={el.price}
                        />
                    ))}
            </div>
        </>
    );
};

export default LatestCollection;
