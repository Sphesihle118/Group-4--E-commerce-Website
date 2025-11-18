import {SideBarmenu} from "../components/sidebar.jsx";
import {CheckBagItems} from "../components/checkbagitem.jsx";

export const CheckItems = () => {
    return (
        <div className="flex grid-2 gap-10 bg-[#F3F3F3] grid-cols-[500px,_1fr]">
            <SideBarmenu />
            <CheckBagItems />
        </div>
    )
}