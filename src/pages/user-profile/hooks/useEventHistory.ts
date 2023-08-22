import { useState, useEffect } from 'react';
import { EventHistory } from '../../../../Model/EventHistory';

interface useEventHistoryProps {
    events: EventHistory[];
    loading: boolean;
    loadMoreEvents: () => void;
}

function useEventHistory(): useEventHistoryProps {
    const [events, setEvents] = useState<EventHistory[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchEvents() {
            setLoading(true);
            try {
                // const response = await request.get(`http://localhost:8080/event/host/64dc7949fc13ae0f69089f7d?page=${page}`);
                // setEvents(prevEvents => [...prevEvents, ...response.data]);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchEvents();
    }, [page]);

    function loadMoreEvents() {
        setPage(prevPage => prevPage + 1);
    }

    return { events, loading, loadMoreEvents };
}

export default useEventHistory;
