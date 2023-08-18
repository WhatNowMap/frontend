import * as defaults from "../utils/constants";
import logo from "../assets/images/logo-circle.svg";
import sort from "../assets/images/icon-sort.svg";
import Icon from "./icon"
import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
    keyword?: string,
    sort?: boolean
    onSort?: (e: React.ChangeEvent)=> void,
    onCategoryChange?: (e: React.ChangeEvent)=> void,
    onSearch?: (e: FormEvent<HTMLFormElement>)=>void
}

const SearchBar = (props: SearchBarProps) => {
    const [sortMenuState, setSortMenuState] = useState({
        sortMenuVisible: false,
        sortIconStyle: "bg-white ",
        sortMenuStyle: "h-0 py-0 top-8 ",
        backdropStyle: "hidden z-[-10] bg-black/0 backdrop-blur-none "
    });
    
    const toggleSortingMenu = () => {
        if (sortMenuState.sortMenuVisible) {
            setSortMenuState({
                sortMenuVisible: false,
                sortIconStyle: "bg-white ",
                sortMenuStyle: "h-0 py-0 top-6 ",
                backdropStyle: "visible z-20 bg-black/0 backdrop-blur-none "
            });
            setTimeout(()=>{
                setSortMenuState((prev) => {return {
                    ...prev,
                    backdropStyle: "hidden z-20 bg-black/0 backdrop-blur-none "
                }});
            }, 300);
        }
        else {
            setSortMenuState({
                sortMenuVisible: true,
                sortIconStyle: "bg-primary-200 ",
                sortMenuStyle: "h-48 py-2 top-9 ",
                backdropStyle: "visible z-20 bg-black/0 backdrop-blur-none "
            });
            setTimeout(()=>{
                setSortMenuState((prev) => {return {
                    ...prev,
                    backdropStyle: "visible z-20 bg-black/50 backdrop-blur-sm "
                }});
            }, 50);
        }
    }

    const handleSortChange = (e: ChangeEvent) => {
        toggleSortingMenu();

        if (props.onSort) {
            props.onSort(e);
        }
    }

    const handleCategoryChange = (e: ChangeEvent) => {
        if (props.onCategoryChange) {
            props.onCategoryChange(e);
        }
    }

    return (
        <form className="fixed top-0 w-full z-50" onSubmit={props.onSearch}>
            <div className={sortMenuState.backdropStyle + "absolute top-0 w-screen h-screen transition-all duration-300"}></div>

            <div className="w-full z-50">
                <div className="relative z-50 bg-primary-700 px-4 py-1.5">
                    <div className="absolute inset-y-0 left-4 flex items-center pl-4 pointer-events-none">
                        <img src={logo} className="w-7 h-7" />
                    </div>
                    <input type="text" id="keyword" name="keyword" defaultValue={props.keyword} autoComplete="off" className="h-10 bg-white text-secondary-800 text-md rounded-3xl focus:ring-primary-300 focus:border-primary-300 block w-full px-14 p-2.5" placeholder="Search" />
                    {
                    props.sort && (
                        <div className="absolute inset-y-0 right-4 flex items-center pr-4 cursor-pointer">
                            <img src={sort} 
                                onClick={toggleSortingMenu} 
                                className={sortMenuState.sortIconStyle + "w-8 h-8 p-1 rounded-full"} />
                        </div>
                        )
                    }

                    <div className={sortMenuState.sortMenuStyle + " absolute right-4 z-50 overflow-hidden rounded-lg transition-all duration-300"}>
                        <div className="px-0 overflow-hidden rounded-md bg-secondary-100 border-[1px] border-secondary-300">
                            <div className="h-6 px-3 py-1 bg-secondary-800 text-white text-xs font-bold">
                                Sort by
                            </div>
                            <fieldset>
                                <div className="flex items-center border-b-2 border-secondary-200">
                                    <input id="recommended" type="radio" onChange={handleSortChange} name="sort" value="Recommended" defaultChecked className="w-0 peer invisible" />
                                    <label htmlFor="recommended" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Recommended
                                    </label>
                                </div>

                                <div className="flex items-center border-b-2 border-secondary-200">
                                    <input id="distance" type="radio" onChange={handleSortChange} name="sort" value="Distance" className="w-0 peer invisible" />
                                    <label htmlFor="distance" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Distance
                                    </label>
                                </div>

                                <div className="flex items-center border-b-2 border-secondary-200">
                                    <input id="freshness" type="radio" onChange={handleSortChange} name="sort" value="Freshness" className="w-0 peer invisible" />
                                    <label htmlFor="freshness" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Freshness
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input id="attendees" type="radio" onChange={handleSortChange} name="sort" value="Attendees" className="w-0 peer invisible" />
                                    <label htmlFor="attendees" className="block px-6 py-2 w-full bg-secondary-100 text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white text-sm font-medium">
                                    Attendees
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-2 z-10">
                <div className="flex flex-nowrap w-full overflow-x-scroll sm:overflow-x-auto no-scrollbar relative px-2">
                    {/* <div className="w-2 sticky left-0 top-0 z-10 inline-block bg-gradient-to-r from-secondary-700 before:content-['.'] before:invisible flex-shrink-0"></div> */}
                {
                    defaults.Categories.map((category) => {
                        return (
                            <div className="" key={category}>
                                <input 
                                    type="checkbox" 
                                    id={category} 
                                    name={category}
                                    value="1"
                                    onChange={handleCategoryChange}
                                    className="w-0 h-0 peer checked hidden" />
                                <label htmlFor={category} className="flex flex-row items-center py-1 px-3 mx-1 text-sm font-bold rounded-full bg-white/80 backdrop-blur-sm text-secondary-700 peer-checked:bg-primary-600 peer-checked:text-white">
                                    <Icon type={category.toLowerCase()} className="w-5 h-5 mr-1 text-inherit"/>
                                    {category}
                                </label>
                            </div>
                        )
                    })
                }
                    {/* <div className="w-2 sticky right-0 top-0 z-10 inline-block bg-gradient-to-l from-secondary-700 before:content-['.'] before:invisible flex-shrink-0"></div> */}
                </div>
            </div>
        </form>
    )
}
 
export default SearchBar;