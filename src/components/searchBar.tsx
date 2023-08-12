import logo from "../assets/images/logo-circle.svg";
import * as defaults from "../utils/constants";

interface SearchBarProps {
    sort?: boolean
}


const SearchBar = (props: SearchBarProps) => {


    return (
        <div className="z-50">
            <div className="w-full bg-primary-700 p-4">
                <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <img src={logo} className="w-7 h-7" />
                </div>
                <input type="text" id="search" className="bg-white border border-secondary-300 text-secondary-800 text-md rounded-3xl focus:ring-primary-300 focus:border-primary-300 block w-full pl-14 p-2.5" placeholder="Search" />
                </div>
            </div>

            <div className="w-full p-2 bg-secondary-700">
                <div className="flex flex-nowrap w-full overflow-x-scroll">
                {
                    defaults.Categories.map((category) => {
                        return <span className="inline-block mx-1 py-1 px-3 text-xs rounded-xl bg-primary-100 text-primary-700" key={category}>{category}</span>
                    })

                }
                </div>
            </div>


        </div>




    )
}
 
export default SearchBar;