import * as defaults from "../utils/constants";
import logo from "../assets/images/logo-circle.svg";
import sort from "../assets/images/icon-sort.svg";
import { useState } from "react";

interface SearchBarProps {
    sort?: boolean
    onSort?: (e: React.ChangeEvent)=>{},
    onSearch?: (e: React.ChangeEvent)=>{}
}



const SearchBar = (props: SearchBarProps) => {
    const [sortMenuState, setSortMenuState] = useState("h-0 py-0 top-8 ");
    

    const toggleSortingMenu = () => {
        if (sortMenuState == "h-48 py-2 top-11 ")
            setSortMenuState("h-0 py-0 top-8 ");
        else 
            setSortMenuState("h-48 py-2 top-11 ");
    }

    return (
        <div className="fixed top-0 w-full z-40">
            <div className="w-full bg-primary-700 px-4 py-1.5">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <img src={logo} className="w-7 h-7" />
                    </div>
                    <input type="text" id="search" onChange={props.onSearch} className="h-11 bg-white text-secondary-800 text-md rounded-3xl focus:ring-primary-300 focus:border-primary-300 block w-full px-14 p-2.5" placeholder="Search" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
                        <img src={sort} className="w-10 h-10 p-2 hover:bg-primary-200 rounded-full" onClick={toggleSortingMenu} />
                    </div>

                    <div className={sortMenuState + " absolute right-0 z-50 overflow-hidden rounded-lg transition-all"}>
                        <div className="px-0 overflow-hidden rounded-md bg-secondary-100 border-2 border-secondary-300">
                            <div className="h-6 px-3 py-1 text-secondary-500 text-xs font-bold">
                                Sort by:
                            </div>
                            <fieldset>
                                <div className="flex items-center border-b-2 border-secondary-200">
                                    <input id="recommended" type="radio" onChange={props.onSort} name="sort" value="recommended" defaultChecked className="w-0 peer invisible" />
                                    <label htmlFor="recommended" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Recommended
                                    </label>
                                </div>

                                <div className="flex items-center border-b-2 border-secondary-200">
                                    <input id="distance" type="radio" onChange={props.onSort} name="sort" value="distance" className="w-0 peer checked invisible" />
                                    <label htmlFor="distance" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Distance
                                    </label>
                                </div>

                                <div className="flex items-center border-b-2 border-secondary-200">
                                    <input id="freshness" type="radio" onChange={props.onSort} name="sort" value="freshness" className="w-0 peer checked invisible" />
                                    <label htmlFor="freshness" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Freshness
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input id="attendees" type="radio" onChange={props.onSort} name="sort" value="attendees" className="w-0 peer checked invisible" />
                                    <label htmlFor="attendees" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Attendees
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>


                
            </div>


            <div className="w-full p-1.5 bg-secondary-700">
                <div className="flex flex-nowrap w-full overflow-x-scroll sm:overflow-x-auto no-scrollbar relative">
                    <div className="w-2 sticky left-0 top-0 z-10 inline-block bg-gradient-to-r from-secondary-700 before:content-['.'] before:invisible flex-shrink-0"></div>
                {
                    defaults.Categories.map((category) => {
                        return (
                            <div className="flex flex-row items-center justify-center mx-1 py-1.5 px-5 text-xs font-bold rounded-full bg-white text-secondary-700" key={category}>
                                <img src={"/src/assets/images/icon-cat-"+ category.toLowerCase() + ".svg"} alt={category} className="w-4 h-4 text-primary-700 fill-current"/>
                                <span className="ps-2">{category}</span>
                            </div>
                        )
                    })
                }
                    <div className="w-2 sticky right-0 top-0 z-10 inline-block bg-gradient-to-l from-secondary-700 before:content-['.'] before:invisible flex-shrink-0"></div>
                </div>
            </div>
        </div>
    )
}
 
export default SearchBar;