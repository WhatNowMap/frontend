import icon_thumb_up from "../assets/images/icon-thumb-up.svg";
import icon_thumb_down from "../assets/images/icon-thumb-down.svg";
import icon_bookmark from "../assets/images/icon-bookmark.svg";

import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./tabSelector";

const EventDetail = () => {
    const [selectedTab, setSelectedTab] = useTabs([
        "details",
        "comments",
      ]);

    return(
        <div>
            <div className="bg-white max-h-1/3 flex justify-center">
                Carousel
            </div>
            <div className="bg-secondary-700">
                <div className="w-full px-4 pt-4 grid grid-cols-3 gap-4 items-center">
                    <div className="text-white font-bold text-2xl col-span-2">
                        Event Name
                    </div>
                    <div className="justify-self-end">
                        <div><img src={icon_bookmark} className="w-5 h-5"/></div>
                        <div></div>
                    </div>
                </div>
                <div className="px-4 py-4 text-secondary-400 text-sm grid grid-cols-3 gap-4 items-center border-b border-white">
                    <div className="flex col-span-2 ">
                        <div className="px-2 py-1 bg-secondary-100 text-secondary-600 flex items-center border rounded-l-md">
                            <img src={icon_thumb_up} className="w-5 h-5 mr-2"/> 23
                        </div>
                        <div className="px-2 py-1 bg-secondary-100 text-secondary-600 flex items-center border rounded-r-md">
                            <img src={icon_thumb_down} className="w-5 h-5 mr-2"/> 3 
                        </div>
                        <div className="flex items-center px-4">
                            <img src={icon_thumb_down} className="w-5 h-5 mr-2"/> 3
                        </div>
                    </div>
                    <div className="justify-self-end">
                        Time
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-3 items-center text-sm">
                        <nav className="flex col-span-2 z-10">
                            <TabSelector
                            isActive={selectedTab === "details"}
                            onClick={() => setSelectedTab("details")}
                            >
                            Details
                            </TabSelector>
                            <TabSelector
                            isActive={selectedTab === "comments"}
                            onClick={() => setSelectedTab("comments")}
                            >
                            Comments
                            </TabSelector>
                        </nav>
                        <div className="justify-self-end px-4">
                            <div className="w-fit px-3 py-1 rounded-2xl bg-secondary-200 text-secondary-500">Report</div>
                        </div>
                    </div>
                    <div className="border-t-4 relative mt-[-4px] z-0"></div>
                    <div className="h-screen p-6 text-white">
                        <TabPanel hidden={selectedTab !== "details"}>
                            <div className="grid grid-cols-2 items-center mb-2">
                                <div className="text-xl font-semibold">About this event</div>
                                <div className="justify-self-end ">Cat</div>
                            </div>
                            <div className="font-thin text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ...more
                            </div>
                            <div className="text-xl font-semibold mt-4 mb-2">Location</div>
                            <div className="grid grid-cols-2 items-center mb-2 text-xs">
                                <div className="">777 Yonge Street, Toronto</div>
                                <div className="justify-self-end">
                                    10 mins
                                </div>
                            </div>
                            <div className="bg-white w-60 h-60 mt-4">

                            </div>
                        </TabPanel>
                        <TabPanel hidden={selectedTab !== "comments"}>
                            <div>
                                <div className="text-xl font-semibold">Reviews</div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;