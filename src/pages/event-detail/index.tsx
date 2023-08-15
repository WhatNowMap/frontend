import TabBar from "../../components/tabBar";
import EventDetails from "../../components/eventDetail";


const EventDetail = () => {
    return(
        <div className="flex flex-col h-[100dvh] max-h-[100dvh]">

            <div className="flex-grow overflow-y-scroll no-scrollbar mt-24 mb-16">
                <EventDetails/>
            </div>
            <TabBar highlight="list"/>
        </div>
    )
}

export default EventDetail;