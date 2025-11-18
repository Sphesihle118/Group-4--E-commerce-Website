import {SearchBar} from "./blocks/searchbar.jsx";
import {ProductListing} from "./blocks/products.jsx";
import {ShoppingBag} from "./blocks/bagCart.jsx";
import {ItemBlock} from "./blocks/itemBlock.jsx";


export const Storepage = () => {

    return (
        <div className=" md:block h-screen w-screen pt-30 md:pt-8">
            <div className="md:flex md:grid-2 md:gap-8">
                <div className="">
                    {/* Home page*/}
                    <div className="flex justify-center"><SearchBar/></div>
                    <ProductListing/>
                </div>
                <div>
                    <ShoppingBag/>
                </div>
            </div>
        </div>
    )
}