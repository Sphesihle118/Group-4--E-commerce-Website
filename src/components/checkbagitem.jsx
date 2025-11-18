import {BagComponents} from "./blocks/checkbagcomponent.jsx";
import {ShoppingBag2} from "./blocks/bagCart2.jsx";

export const CheckBagItems = () => {

    return (
        <div className=" md:block h-screen w-screen pt-30 md:pt-8">
            <div className="md:flex md:grid-2 md:gap-8">
                <div className="">
                    <BagComponents/>
                </div>
                <div>
                    <ShoppingBag2/>
                </div>
            </div>
        </div>
    )
}