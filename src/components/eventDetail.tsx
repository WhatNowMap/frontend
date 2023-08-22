import Icon from "./icon"
import Carousel from "./carousel";
import Tabs from "./tabs";

interface EvenDetailsProps {
    attendance: number,
    category: string,
    description: string,
    lag: string,
    lng: string,
    location: string,
    name: string,
    like: number,
    dislike: number,
    time: number,
}

const EventDetail = (props:EvenDetailsProps) => {

    return(
        <div>
            <Carousel/>
            <div className="bg-secondary-700">
                <div className="w-full px-4 pt-4 grid grid-cols-3 gap-4 items-center">
                    <div className="text-white font-bold text-2xl col-span-2">
                        {props.name}
                    </div>
                    <div className="justify-self-end flex gap-3">
                        <div>
                            <Icon type={"bookmark"} className="w-7 h-7 mr-1 text-secondary-100 "/>
                        </div>
                        <div>
                            <Icon type={"share"} className="w-7 h-7 mr-1 text-secondary-100"/>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 text-secondary-400 text-sm grid grid-cols-3 gap-4 items-center border-b border-white">
                    <div className="flex col-span-2 ">
                        <button className="px-2 py-1 bg-secondary-100 text-secondary-600 flex items-center border rounded-l-md">
                            <Icon type={"like"} className="w-4 h-4 mr-1 text-secondary-700 fill-current"/>
                            {props.like}
                        </button>
                        <button className="px-2 py-1 bg-secondary-100 text-secondary-600 flex items-center border rounded-r-md">
                            <Icon type={"dislike"} className="w-4 h-4 mr-1 text-secondary-700 fill-current"/>
                            {props.dislike}
                        </button>
                        <div className="flex items-center px-4">
                            <Icon type={"people"} className="w-6 h-6 mr-2 text-secondary-300 fill-current"/>
                            <span className="text-secondary-200">{props.attendance}</span>
                        </div>
                    </div>
                    <div className="justify-self-end flex">
                        10 mins ago
                    </div>
                </div>
                <Tabs
                    category={props.category}
                    description={props.description}
                    lag={props.lag}
                    lng={props.lng}
                    location={props.location}
                    time={1}
                />
            </div>
        </div>
    )
}

export default EventDetail;