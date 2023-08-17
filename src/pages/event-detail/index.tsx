import TabBar from "../../components/tabBar";
import EventDetails from "../../components/eventDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface EvenDetailsProps {
    attendance: number,
    category: string,
    description: string,
    lag: string,
    lng: string,
    location: string,
    name: string,
    ranking: any,
    like: number,
    dislike: number,
    time: number,
}


const EventDetail = () => {
    const urlID = useParams();
    const eventID = urlID.event_id
    const [eventData, setEventData] = useState<EvenDetailsProps>({
        attendance: 0,
        category: "",
        description: "",
        lag: "",
        lng: "",
        location: "",
        name: "",
        ranking: {},
        like: 0,
        dislike: 0,
        time: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                var hostname = window.location.hostname;
                var urlWithoutPort = `http://${hostname}`;
                let url = urlWithoutPort + ":8080/event/" + eventID;
                const response = await axios.get(url);
                setEventData(response.data.data);
                console.log((eventData))
            } catch (error) {

            }
        }
        fetchData();

    });


    return(
         <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
            <div className="flex-grow overflow-y-scroll no-scrollbar mb-14">
                <EventDetails
                    attendance={eventData.attendance}
                    category={eventData.category}
                    description={eventData.description}
                    lag={eventData.lag}
                    lng={eventData.lng}
                    location={eventData.location}
                    name={eventData.name}
                    like={eventData.like}
                    dislike={eventData.dislike}
                    time={1}
                />
            </div>
            <TabBar highlight="list"/>
        </div>
    )
}

export default EventDetail;