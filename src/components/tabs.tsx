import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./tabSelector";
import Comments from "./comment";
import Icon from "./icon";
import { useState, useRef, useEffect } from "react";

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1Ijoid2hhdG5vd21hcCIsImEiOiJjbGw0Nnk1aTkwMXIxM2VwMGpiN3RmZ3Y5In0.O5vq93APpSPPQgPHc9VC6g';

interface EvenDetailsProps {
    category: string,
    description: string,
    lag: number,
    lng: number,
    location: string,
    comment: any,
    time: number,
}

const Tabs = (props:EvenDetailsProps) => {
    const [selectedTab, setSelectedTab] = useTabs(["details","comments",]);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(8);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        setComment(props.comment);
        (map.current! as mapboxgl.Map) = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [props.lng, props.lag],
            zoom: zoom,
            attributionControl: false
        }); 
        const marker = new mapboxgl.Marker({color: "#7958B0"})
        .setLngLat([props.lng, props.lag])
        .addTo(map.current!);
    },[props.lag, props.comment]);

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
                    <button className="w-fit px-3 py-1 rounded-2xl bg-secondary-200 text-secondary-700" onClick={togglePopup}>
                        Report
                    </button>
                    <>
                    {isOpen &&
                        <div className="fixed z-50 top-0 left-0 w-full h-[100vh] bg-[#61616184]">
                            <div className="box drop-shadow-2xl">
                                <h1 className='text-2xl font-bold mb-4'>Report</h1>
                                <form>
                                    <div>
                                        <button className='report-button'>Violence</button>
                                        <button className='report-button'>Hate speech</button>
                                        <button className='report-button'>Threats</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        }
                    </>
                </div>
            </div>
            <div className="border-t-4 relative mt-[-4px] z-0"></div>
            <div className="h-fit text-white">
                <TabPanel hidden={selectedTab !== "details"} className="pb-10">
                    <div className="p-6">
                        <div className="mb-8">
                            <div className="grid grid-cols-2 mb-2 items-center">
                                <div className="text-xl font-bold">About this event</div>
                                <div className="justify-self-end">
                                    {props.category}
                                </div>
                            </div>
                            <div className="font-thin text-sm">
                                {props.description}
                            </div>
                        </div>
                        <div className="text-xl font-semibold mt-4 mb-2">Location</div>
                        <div className="grid grid-cols-2 items-center text-xs">
                            <div className="">{props.location}</div>
                            <div className="justify-self-end flex items-center">
                            <Icon type={"car-fill"} className="w-5 h-5 mr-2 text-secondary-100 fill-current"/>
                                10 mins
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-60">
                            <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />

                            <div ref={mapContainer} className="map-container h-full w-full" />
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "comments"}>
                    <div className="p-6 border-b-[1px] border-white z-50">
                        <div className="text-xl font-bold">Reviews</div>
                        {comment != null &&
                            <div>
                            {Object.keys(comment).map((item, i) => (
                                <Comments
                                    key={i}
                                    username={comment[item].user}
                                    profileImg=""
                                    comment={comment[item].comment}
                                    time={0}
                                    likes={comment[item].mediaIds}
                                />
                            ))}
                            </div>
                        }
                    </div>
                    <form className="flex">
                        <input type="text" 
                            className="w-full py-4 px-3 text-secondary-400 bg-[#404040] rounded-none focus:outline-none" 
                            placeholder="Leave your thoughts here..."/>
                        <button className="flex items-center px-3 bg-[#404040]">
                            <Icon type={"photo"} className="w-7 h-7 text-secondary-100 fill-current"/>
                        </button>
                        <button type="submit" className="flex items-center px-3 bg-[#404040]">
                            <Icon type={"send"} className="w-7 h-7 text-secondary-100 fill-current"/>
                        </button>
                    </form>
                </TabPanel>
            </div>
        </div>
    )
}

export default Tabs;
