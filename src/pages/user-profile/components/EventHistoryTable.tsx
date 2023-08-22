
import { EventHistory } from "../../../../Model/EventHistory";
import EventItem from "../../../components/eventItem";

interface EventHistoryTableProps {
    eventHistoryList: EventHistory[];
    // loading: boolean;
    // loadMoreEvents: () => void;
}


const EventHistoryTable: React.FC<EventHistoryTableProps> = (EventHistoryTableProps) => {
    const { eventHistoryList } = EventHistoryTableProps;
    return (
        <>
            {eventHistoryList.length === 0 ?
                <div className='flex flex-col items-center w-screen absolute pt-20 z-20 gap-5 pb-14'>
                    <h2 className='text-xl font-medium text-secondary-200'>
                        No data found
                    </h2>
                </div>
                :
                <div className='flex-grow overflow-y-scroll shadow-inner shadow-secondary-700 no-scrollbar'>
                    {eventHistoryList.map((event: EventHistory, idx: number) => (
                        <EventItem
                            key={idx}
                            title={event.name}
                            location={event.location}
                            category={event.category}
                            likes={133}
                            dislikes={134}
                            time={Date.now() - Math.floor(Math.random() * 10000000)}
                            bookmark={false}
                        />
                    ))}
                    {/* {Object.entries(eventHistoryList).map((val, index) => (
                        <EventItem
                            key={index}
                            title="Code 'Til You Drop Party"
                            location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
                            category='Entertainment'
                            likes={520}
                            dislikes={134}
                            time={Date.now() - Math.floor(Math.random() * 10000000)}
                            bookmark={false}
                        />
                    ))} */}
                </div>
            }

        </>


    )
}

export default EventHistoryTable;
