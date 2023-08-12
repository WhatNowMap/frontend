import * as defaults from "../utils/constants";
import logo from "../assets/images/logo-circle.svg";
import filter from "../assets/images/icon-filter.svg";
import cat_accident from "../assets/images/icon-cat-acident.svg"
import cat_art from "../assets/images/icon-cat-art.svg"
import cat_entertainment from "../assets/images/icon-cat-entertainment.svg"
import cat_food from "../assets/images/icon-cat-food.svg"
import cat_music from "../assets/images/icon-cat-music.svg"
import cat_nerd from "../assets/images/icon-cat-nerd.svg"
import cat_party from "../assets/images/icon-cat-party.svg"
import cat_sport from "../assets/images/icon-cat-sport.svg"

interface SearchBarProps {
    sort?: boolean
}


const SearchBar = (props: SearchBarProps) => {


    return (
        <div className="fixed w-full top-0 z-40">
            <div className="w-full bg-primary-700 p-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <img src={logo} className="w-7 h-7" />
                    </div>
                    <input type="text" id="search" className="bg-white border border-secondary-300 text-secondary-800 text-md rounded-3xl focus:ring-primary-300 focus:border-primary-300 block w-full px-14 p-2.5" placeholder="Search" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
                        <img src={filter} className="w-10 h-10 p-2" />
                    </div>
                </div>
            </div>

            <div className="w-full p-2 bg-secondary-700">
                <div className="flex flex-nowrap w-full overflow-x-scroll sm:overflow-x-auto no-scrollbar relative">
                    <div className="w-2 sticky left-0 top-0 z-50 inline-block bg-gradient-to-r from-secondary-700 before:content-['.'] before:invisible flex-shrink-0"></div>
                {
                    defaults.Categories.map((category) => {
                        return (
                            <div className="flex flex-row items-center justify-center mx-1 py-1.5 px-5 text-xs font-bold rounded-full bg-white text-secondary-700 hover:bg-primary-700 hover:text-white" key={category}>
                                <img src={"/src/assets/images/icon-cat-"+ category.toLowerCase() + ".svg"} alt={category} className="w-4 h-4 text-primary-700 fill-current"/>
                                <span className="ps-2">{category}</span>
                            </div>
                        )
                    })
                }
                    <div className="w-2 sticky right-0 top-0 z-50 inline-block bg-gradient-to-l from-secondary-700 before:content-['.'] before:invisible flex-shrink-0"></div>
                </div>
            </div>
        </div>
    )
}
 
export default SearchBar;