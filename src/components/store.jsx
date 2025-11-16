import {SearchBar} from "./blocks/searchbar.jsx";
import {ProductListing} from "./blocks/products.jsx";
import {ShoppingBag} from "./blocks/bagCart.jsx";
import {ItemPage} from "./blocks/itempage.jsx";


export const Storepage = () => {

    return (
        <div className=" md:block h-screen w-screen pt-30 md:pt-8">
            <div className="flex grid-2 gap-8 ">
                <div>
                    {/* Home page*/}
                    <div className="flex justify-center"><SearchBar/></div>
                    <ProductListing/>

                    {/* Item page*/}
                    <ItemPage/>
                </div>
                <div>
                    <ShoppingBag/>
                </div>
            </div>
        </div>
    )
}