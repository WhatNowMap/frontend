import icon_create from "../assets/images/icon-create.svg";
import icon_bookmark from "../assets/images/icon-bookmark.svg";
import icon_list from "../assets/images/icon-list.svg";
import icon_map from "../assets/images/icon-map.svg";
import icon_profile from "../assets/images/icon-profile.svg";
import { Link } from "react-router-dom";


interface TabBarProps {
    highlight?: string
}

const TabBar = (props: TabBarProps) => {
    return (
        <nav className="fixed bottom-0 h-20 w-full flex flex-row justify-around items-end bg-secondary-800 pb-6">
            <Link to="/map" className={"relative " + (props.highlight=="map" && "tab-highlight")}>
                <img src={icon_map} className="w-8 h-8" />
            </Link>
            <Link to="/list" className={"relative " + (props.highlight=="list" && "tab-highlight")}>
                <img src={icon_list} className="w-8 h-8" />
            </Link>
            <Link to="/create" className={"relative " + (props.highlight=="create" && "tab-highlight")}>
                <img src={icon_create} className="w-10 h-10" />
            </Link>
            <Link to="/bookmark" className={"relative " + (props.highlight=="bookmark" && "tab-highlight")}>
                <img src={icon_bookmark} className="w-8 h-8" />
            </Link>
            <Link to="/profile" className={"relative " + (props.highlight=="profile" && "tab-highlight")}>
                <img src={icon_profile} className="w-8 h-8" />
            </Link>
        </nav>
    )
}
 
export default TabBar;