import icon_bookmark_off from "../assets/images/icon-bookmark-off.svg"
import icon_bookmark_on from "../assets/images/icon-bookmark-on.svg"
import icon_location_logo from "../assets/images/icon-location-logo.svg"
import icon_thumb_down from "../assets/images/icon-thumb-down.svg"
import icon_thumb_up from "../assets/images/icon-thumb-up.svg"


interface EvenItemProps {
    title: string,
    image?: string,
    location: string,
    category: string,
    likes: number,
    dislikes: number,
    time: number, 
    bookmark: boolean
}



const EventItem = (props: EvenItemProps) => {
    return (
        <div className="w-full box-border flex flex-row p-4 bg-gray-900">
            <div className="w-1/3 h-24 bg-gray-500 me-2">
                <img src="https://www.torontorentals.com/blog/wp-content/uploads/new-years-eve.jpg" className="w-full h-24 object-cover" />
            </div>
            <div className="w-2/3 flex flex-col text-gray-900 relative">
                <div className="absolute top-0 right-0">
                    {
                    props.bookmark
                    ? <img src={icon_bookmark_on} /> 
                    :< img src={icon_bookmark_off} />
                    }
                </div>
                <div className="text-xs text-gray-200">{props.category}</div>
                <div className="font-bold text-gray-100">{props.title}</div>
                <div className="text-[8pt] text-gray-200">
                    <img className="h-4 mt-1 float-left me-1"  src={icon_location_logo} />
                    {props.location}
                </div>
                <div className="w-full h-full flex flex-row grow items-end">
                    <div className="flex flex-row items-center me-4">
                        <img className="h-3 w-3" src={icon_thumb_up} />
                        <div className="text-xs ms-1 text-gray-200" text-gray-200>{props.likes}</div>
                    </div>
                    <div className="flex flex-row items-center me-4">
                        <img className="h-3 w-3" src={icon_thumb_down} />
                        <div className="text-xs ms-1 text-gray-200">{props.dislikes}</div>
                    </div>
                    <div className="text-end text-sm grow text-gray-200">
                        {props.time}
                    </div>
                </div>
            </div>


        </div>
    )
}
 
export default EventItem;