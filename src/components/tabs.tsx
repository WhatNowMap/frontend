import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./tabSelector";
import Comments from "./comment";
import Icon from "./icon";

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useTabs(["details","comments",]);

    return(
        <div>
            <div className="grid grid-cols-3 items-center text-sm">
                <nav className="flex col-span-2 z-10">
                    <TabSelector 
                        isActive={selectedTab === "details"}
                        onClick={() => setSelectedTab("details")}>
                    Details
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "comments"}
                        onClick={() => setSelectedTab("comments")}>
                    Comments
                    </TabSelector>
                </nav>
                <div className="justify-self-end px-4 mb-1">
                    <div className="w-fit px-3 py-1 rounded-2xl bg-secondary-200 text-secondary-700">
                        Report
                    </div>
                </div>
            </div>
            <div className="border-t-4 relative mt-[-4px] z-0"></div>
            <div className="h-fit pb-10 text-white">
                <TabPanel hidden={selectedTab !== "details"}>
                    <div className="p-6">
                        <div className="mb-8">
                            <div className="grid grid-cols-2 mb-2 items-center">
                                <div className="text-xl font-bold">About this event</div>
                                <div className="justify-self-end">
                                    Entertainment
                                </div>
                            </div>
                            <div className="font-thin text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ...more
                            </div>
                        </div>
                        <div className="text-xl font-semibold mt-4 mb-2">Location</div>
                        <div className="grid grid-cols-2 items-center text-xs">
                            <div className="">777 Yonge Street, Toronto</div>
                            <div className="justify-self-end flex items-center">
                            <Icon type={"car-fill"} className="w-5 h-5 mr-2 text-secondary-100 fill-current"/>
                                10 mins
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary-400 w-full h-60">
                        {/* Map */}
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "comments"}>
                        <div className="p-6">
                            <div className="text-xl font-bold">Reviews</div>
                                <Comments
                                    username="User"
                                    profileImg="../src/assets/images/icon-profile.svg"
                                    likes={4}
                                    time={123}
                                    comment="Test"
                                />
                            <div>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    )
}

export default Tabs;
                