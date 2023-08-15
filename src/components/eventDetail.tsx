import Icon from "./icon"
import Carousel from "./carousel";
import Tabs from "./tabs";

const EventDetail = () => {

    return(
        <div>
            <Carousel/>
            <div className="bg-secondary-700">
                <div className="w-full px-4 pt-4 grid grid-cols-3 gap-4 items-center">
                    <div className="text-white font-bold text-2xl col-span-2">
                        Event Name
                    </div>
                    <div className="justify-self-end flex gap-2">
                        <div>
                            <Icon type={"bookmark"} className="w-8 h-8 mr-1 text-secondary-100 "/>
                        </div>
                        <div>
                            <Icon type={"share"} className="w-8 h-8 mr-1 text-secondary-100"/>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 text-secondary-400 text-sm grid grid-cols-3 gap-4 items-center border-b border-white">
                    <div className="flex col-span-2 ">
                        <div className="px-2 py-1 bg-secondary-100 text-secondary-600 flex items-center border rounded-l-md">
                            <Icon type={"like"} className="w-4 h-4 mr-1 text-secondary-700 fill-current"/>
                            23
                        </div>
                        <div className="px-2 py-1 bg-secondary-100 text-secondary-600 flex items-center border rounded-r-md">
                            <Icon type={"dislike"} className="w-4 h-4 mr-1 text-secondary-700 fill-current"/>
                            0
                        </div>
                        <div className="flex items-center px-4">
                            
                        </div>
                    </div>
                    <div className="justify-self-end flex">
                        10 mins ago
                    </div>
                </div>
                <Tabs/>
            </div>
        </div>
    )
}

export default EventDetail;