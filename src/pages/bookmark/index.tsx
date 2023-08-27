// import  { useEffect, useState } from 'react';
import error from "../error";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { isodate2Timestamp } from "../../utils/helper";
import Header from "../../components/header";
import TabBar from "../../components/tabBar";
import EventItem from "../../components/eventItem";

const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;



interface bookmarkprops {
    attendance: number,
    category: string,
    createdAt: string,
    description: string,
    id: number,
    lag: string,
    lng: string,
    location: string,
    mediaIds: string[],
    name: string,
    ranking: {
        like: number, 
        dislike: number
    },
    updatedAt: string,
    userId: string,
    _id: string
}
// apiService.js





const BookmarkView = () => {
   
    const [bookmarkedEvents, setBookmarkedEvents] = useState<bookmarkprops[]>([]);
  
    // useEffect(() => {
    //     const fetchBookmarkedEvents = async () => {
    //         try {
    //             const response = await axios.get(`${baseUrl}user/bookmarks`, { withCredentials: true });
    //             console.log('setBookmarkedEvents', response.data);
    //             if (response.data && response.data.data) {
    //                 setBookmarkedEvents(response.data.data);
    //             } else {
    //                 throw new Error('Data format unexpected');
    //             }
    //         }
    //         catch (error) {
    //             console.error('Error details:', error);
    //         }
    //         console.log(error)
    //     }

    //     fetchBookmarkedEvents();
    // }, []);
    
    const bookmarkEvent = async (eventId, action) => {
        try {
            const url = `${baseUrl}user/bookmarks/${eventId}/${action === 'bookmark' ? 1 : 0}`;
            const response = await axios.post(url, {}, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error bookmarking event:", error);
            throw error;
        }
    };
    
    const getUserBookmarks = async () => {
        try {
            const url = `${baseUrl}user/bookmarks`;
            console.log("Bookmark details"+ url)
            const response = await axios.get(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error getting user bookmarks:", error);
            throw error;
        }
    };
    useEffect(() => {
        const fetchBookmarkedEvents = async () => {
            try {
                const events = await getUserBookmarks();
                setBookmarkedEvents(events);
            } catch (error) {
                console.error('Error fetching bookmarked events:', error);
            }
        };

        fetchBookmarkedEvents();
    }, []);

    const handleBookmarkToggle = async (eventId, action) => {
        try {
            await bookmarkEvent(eventId, action);
         
            const updatedEvents = await getUserBookmarks();
            setBookmarkedEvents(updatedEvents);
        } catch (error) {
            console.error('Error toggling bookmark:', error);
        }
    };




    return (
        <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
            <Header Header_title={"Bookmark"} arrow={false} />

            {bookmarkedEvents.length > 0 ? (
                <div className="flex-grow overflow-y-scroll no-scrollbar mt-[3.25rem] mb-12 z-10">
                    {bookmarkedEvents.map(event => (
                        <EventItem 
                          
                            key={event._id}
                            link={`/event/${event._id}`}
                            title={event.name}
                            location={event.location}
                            category={event.category}
                            likes={event.ranking.like}
                            dislikes={event.ranking.dislike}
                            time={isodate2Timestamp(event.createdAt)}
                            bookmark={true}
                          
                            // onBookmarkToggle={handleBookmarkToggle}
                           
                        />
                    ))}
                </div>
            ) : (
                <div className="flex-grow flex justify-center items-center">
                    <span>No bookmarked events found</span>
                </div>
            )}

            <TabBar highlight="bookmark" />
        </div>
    );
}
    export default BookmarkView;