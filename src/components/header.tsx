
import arrow from "../assets/images/icon-arrow.svg"
import { Link } from "react-router-dom";

interface HeaderProps {
    
    Header_title: string,
    link?: string,
    arrow?: boolean
}


const header = (props: HeaderProps) => {


    return (
        <div className="fixed top-0 w-full z-40">
            <div className="w-full bg-primary-700 px-4 py-2">
                <div className="relative">
                {
                    props.arrow &&
                     <Link to="/list" className="absolute " >
                    <img src={arrow} className="w-7 h-7 relative top-[10px]" />
                    </Link>
                    }
    

                      <div className="block text-white px-14 p-2.5">
                    {props.Header_title}
                    </div>
                </div>
        
            </div>
        </div>
    )
}
 
export default header;