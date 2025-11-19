import {SideBarmenu} from "../components/sidebar.jsx";
import {Storepage} from "../components/store.jsx";
import {Itempage} from "../components/ItemReview.jsx";

export const Productpage = () => {
    return (
        <div className="flex grid-2 gap-10 lg:gap-20 xl:gap-10 bg-[#F3F3F3] grid-cols-[500px,_1fr]">
            <SideBarmenu />
            <Itempage/>
        </div>
    )
}