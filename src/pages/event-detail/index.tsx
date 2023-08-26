import TabBar from "../../components/tabBar";
import Header from "../../components/header";
import EventDetails from "../../components/eventDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL

interface EvenDetailsProps {
    attendance: number,
    category: string,
    description: string,
    lag: number,
    lng: number,
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

interface CommentProps {
    comment: any
}


const EventDetail = () => {
    const urlID = useParams();
    const eventID = urlID.event_id
    const [eventRanking, setEventRanking] = useState<RankingProps>({like: 0, dislike: 0})
    const [eventComment, setEventComment] = useState<CommentProps>()
    const [eventData, setEventData] = useState<EvenDetailsProps>({
        attendance: 0,
        category: "",
        description: "",
        lag: 0,
        lng: 0,
        location: "",
        name: "",
        like: 0,
        dislike: 0,
        time: 0,
    }); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = baseUrl + "event/" + eventID;
                const response = await axios.get(url, { withCredentials: true });
                setEventRanking((response.data.data).ranking);
                setEventData(response.data.data);
            } catch (error) {
                //console.log(error)
            }
        }
        const fetchComment = async () => {
            try {
                let url = baseUrl + "comment/event/" + eventID;
                const response = await axios.get(url, { withCredentials: true });
                setEventComment(response.data)
            } catch (error) {
                //console.log(error)
            }
        }
        fetchData();
        fetchComment();
    }, []);


    return(
         <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
            <Header 
            Header_title={""} 
            arrow={true}
            />
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
                    comment={eventComment}
                    time={1}
                />
            </div>
            <TabBar highlight="list"/>
        </div>
    )
}

export default EventDetail;