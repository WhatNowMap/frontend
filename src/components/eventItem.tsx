import { Link } from "react-router-dom"
import icon_bookmark_off from "../assets/images/icon-bookmark-off.svg"
import icon_bookmark_on from "../assets/images/icon-bookmark-on.svg"
import icon_location_logo from "../assets/images/icon-location-logo.svg"
import icon_thumb_down from "../assets/images/icon-thumb-down.svg"
import icon_thumb_up from "../assets/images/icon-thumb-up.svg"


interface EvenItemProps {
  id: string,
    title: string,
    image?: string,
    link?: string,
    location: string,
    category: string,
    likes: number,
    dislikes: number,
    time: number, 
    bookmark: boolean,
}



const EventItem = (props: EvenItemProps) => {
    const timediff:number = (Date.now()-props.time)/1000;
    let timelapse:string = "";

    if (timediff < 2*60) {
        timelapse = "a moment ago";
    }
    else if (timediff < 60*60) {
        timelapse = Math.floor(timediff/60) + " mins ago"
    }
    else {
        const hr = Math.floor(timediff/60/60);
        timelapse = hr == 1 ? "1 hr ago" : hr + " hrs ago";
    }
    
    const content = (
        <>
            <div className="w-1/3 h-24 bg-secondary-500 me-2">
                <img src={props.image ? props.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Toronto_Skyline_Summer_2020.jpg/320px-Toronto_Skyline_Summer_2020.jpg"} className="w-full h-24 object-cover" />
            </div>
            <div className="w-2/3 flex flex-col text-secondary-900 relative">
                <div className="absolute top-0 right-0">
                    {
                    props.bookmark 
                    ? <img src={icon_bookmark_on} />
                    : <img src={icon_bookmark_off} />
                    }
                </div>
                <div className="text-xs text-secondary-300">{props.category}</div>
                <div className="font-bold text-secondary-100">{props.title}</div>
                <div className="text-[8pt] text-secondary-300">
                    <img className="h-4 mt-1 float-left me-1"  src={icon_location_logo} />
                    {props.location}
                </div>
                <div className="w-full h-full flex flex-row grow items-end">
                    <div className="flex flex-row items-center me-4">
                        <img className="h-3 w-3" src={icon_thumb_up} />
                        <div className="text-xs ms-1 text-secondary-200">{props.likes}</div>
                    </div>
                    <div className="flex flex-row items-center me-4">
                        <img className="h-3 w-3" src={icon_thumb_down} />
                        <div className="text-xs ms-1 text-secondary-200">{props.dislikes}</div>
                    </div>
                    <div className="text-end text-sm grow text-secondary-200">
                        {timelapse}
                    </div>
                </div>
            </div>
        </>
    )

    return props.link 
        ? (
            <Link to={props.link} className="w-full box-border flex flex-row px-4 py-4 bg-secondary-700">
                {content}
            </Link>
        )
        : (
            <div className="w-full box-border flex flex-row px-4 py-4 bg-secondary-700">
                {content}
            </div>
        )

}
 
export default EventItem;