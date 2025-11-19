import {ShoppingBag} from "./blocks/bagCart.jsx";
import {ItemBlock} from "./blocks/itemBlock.jsx";


export const Itempage = () => {

    return (
        <div className=" md:block h-screen w-screen pt-30 md:pt-8">
            <div className="flex grid-2 gap-8">
                <div>
                    {/* Item page*/}
                    <ItemBlock/>
                </div>
                <div>
                    <ShoppingBag/>
                </div>
            </div>
        </div>
    )
}