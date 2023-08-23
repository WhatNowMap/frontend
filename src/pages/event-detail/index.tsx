import TabBar from "../../components/tabBar";
import EventDetails from "../../components/eventDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL

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

interface RankingProps {
    like: number,
    dislike: number
}


const EventDetail = () => {
    const urlID = useParams();
    const eventID = urlID.event_id
    const [eventRanking, setEventRanking] = useState<RankingProps>({like: 0, dislike: 0})
    const [eventData, setEventData] = useState<EvenDetailsProps>({
        attendance: 0,
        category: "",
        description: "",
        lag: "",
        lng: "",
        location: "",
        name: "",
        like: 0,
        dislike: 0,
        time: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                var urlWithoutPort = baseUrl
                let url = urlWithoutPort + "event/" + eventID;
                const response = await axios.get(url, { withCredentials: true });
                setEventRanking((response.data.data).ranking);
                setEventData(response.data.data);
            } catch (error) {

            }
        }
        fetchData();
    }, []);


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
                    like={eventRanking.like}
                    dislike={eventRanking.dislike}
                    time={1}
                />
            </div>
            <TabBar highlight="list"/>
        </div>
    )
}

export default EventDetail;