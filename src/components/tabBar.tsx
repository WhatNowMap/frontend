import icon_add from "../assets/images/icon-add.svg";
import icon_bookmark from "../assets/images/icon-bookmark.svg";
import icon_list from "../assets/images/icon-list.svg";
import icon_map from "../assets/images/icon-map.svg";
import icon_profile from "../assets/images/icon-profile.svg";


const TabBar = () => {
    return (
        <nav className="fixed bottom-0 h-20 w-full flex flex-row justify-around items-end bg-gray-800 pb-6">
            <div className="">
                <img src={icon_map} className="w-8 h-8" />
            </div>
            <div className="">
                <img src={icon_list} className="w-8 h-8" />
            </div>
            <div className="">
                <img src={icon_add} className="w-10 h-10" />
            </div>
            <div className="">
                <img src={icon_bookmark} className="w-8 h-8" />
            </div>
            <div className="">
                <img src={icon_profile} className="w-8 h-8" />
            </div>
        </nav>
    )
}
 
export default TabBar;