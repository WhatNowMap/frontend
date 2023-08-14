import logo from "../assets/images/logo-circle.svg";

interface SearchBarProps {
    sort?: boolean
}


const SearchBar = (props: SearchBarProps) => {


    return (
        <div className="w-full bg-primary-700 z-50 p-4">
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <img src={logo} className="w-7 h-7" />
            </div>
            <input type="text" id="search" className="bg-white border border-secondary-300 text-secondary-800 text-md rounded-3xl focus:ring-primary-300 focus:border-primary-300 block w-full pl-14 p-2.5" placeholder="Search" />
            </div>


        </div>
    )
}
 
export default SearchBar;