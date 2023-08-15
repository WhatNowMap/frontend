import React from "react";
import TabBar from "../../components/tabBar";
import EventDetails from "../../components/eventDetail";


const EventDetail = () => {


    return(
         <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
            <div className="flex-grow overflow-y-scroll no-scrollbar mb-14">
                <EventDetails/>
            </div>
            <TabBar highlight="list"/>
        </div>
    )
}

export default EventDetail;