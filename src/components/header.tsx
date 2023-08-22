import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

interface HeaderProps {
    Header_title: string;
    link?: string;
    arrow?: boolean;
}

const header = (props: HeaderProps) => {
    return (
        <div className="static top-0 w-full z-40">
            <div className="w-full bg-primary-700 px-4 py-2 flex items-center">
                {props.arrow && (
                    <Link to="/list">
                        <MdOutlineArrowBackIosNew size={30} color={"white"} />
                        {/* <img src={arrow} className="w-7 h-7 relative top-[10px]" /> */}
                    </Link>
                )}

                <div className="block text-white w-full text-center p-2.5">{props.Header_title}</div>
            </div>
        </div>
    );
};

export default header;
