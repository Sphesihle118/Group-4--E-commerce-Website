import {SideBarmenu} from "../components/sidebar.jsx";
import {Storepage} from "../components/store.jsx";

export const HomePage = () => {
    return (
        <div className="flex grid-2 gap-8 bg-[#F3F3F3] grid-cols-[500px,_1fr]">
            <SideBarmenu />
            <Storepage />
        </div>
    )
}