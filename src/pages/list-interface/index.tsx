import { useNavigate, useParams } from "react-router-dom";
import EventItem from "../../components/eventItem";
import SearchBar from "../../components/searchBar";
import TabBar from "../../components/tabBar";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from 'axios';
import * as defaults from "../../utils/constants";
import { isodate2Timestamp } from "../../utils/helper";
import { onEnterRoute } from "../../helpers/AuthHelper";
const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;

const ListView = () => {
  onEnterRoute();
  let { keyword, category, sort } = useParams();
  const [formKeyword, setFormKeyword] = useState(keyword);
  const [formCategory, setFormCategory] = useState(category);
  const [formSort, setFormSort] = useState(sort);
  const navigate = useNavigate();
  const [eventData, setEventData] = useState([]);
  const toggleBookmark = async (eventId: string, currentlyBookmarked: boolean) => {
    try {
        const endpoint = currentlyBookmarked ? `${baseUrl}user/bookmarks/{event_id}/` : `${baseUrl}user/bookmarks/`;
        const response = await axios.post(endpoint, { eventId }, { withCredentials: true });
        
        if (response.status === 200) {
            // Fetch updated list (or you can optimistically update the UI here)
            fetchData();
        }
    } catch (error) {
        console.error("Error toggling bookmark:", error);
    }
};

    useEffect(() => {

        const fetchData = async () => {
            try {
                const myUrlWithParams = new URL(baseUrl + "event");
                if (typeof keyword !== "undefined" && keyword.length > 0) {
                    myUrlWithParams.searchParams.append("keyword", keyword);
                }
                if (defaults.Categories.map((i:string)=>i.toLowerCase()).includes(category as any)) {
                    myUrlWithParams.searchParams.append("category", category!);
                }
                if (typeof sort !== "undefined" && sort.length > 0) {
                    if (sort == "freshness")
                        myUrlWithParams.searchParams.append("sort", "createdAt");
                    else if (sort == "attendees")
                        myUrlWithParams.searchParams.append("sort", "attendance");
                    
                }
                const response = await axios.get(myUrlWithParams.href, { withCredentials: true });
                //console.log("Hello: " + myUrlWithParams.href);

                setEventData(response.data.data);
            } catch (error) {
                //console.log(error);
            }
        }

        fetchData();

    }, [keyword, category, sort]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = (e.target as HTMLFormElement).keyword as HTMLInputElement;
        keyword = input.value;
        setFormKeyword(keyword);
        input.blur();
        performSearch(keyword!, formCategory!, formSort!);
    }

    const handleSort = (e: ChangeEvent) => {
        const radio = e.target as HTMLInputElement;
        sort = radio.value;
        setFormSort(sort);
        performSearch(formKeyword!, formCategory!, sort!);
    }

    const handleCategoryChange = (e: ChangeEvent) => {
        const checkbox = e.target as HTMLInputElement;

        for (const item of checkbox.form?.elements!) {
            if ((item as HTMLInputElement).type == "checkbox" && (item as HTMLInputElement).name != checkbox.name) {
                (item as HTMLInputElement).checked = false;
            }
        }

        if (checkbox.checked)
            category = checkbox.name;
        else
            category = "all";
        setFormCategory(category);
        performSearch(formKeyword!, category!, formSort!);
    }

    const performSearch = (keyword: string, category: string, sort: string) => {
        navigate("/list/" + 
            (defaults.Categories.includes(category as "Sport" | "Music" | "Entertainment" | "Art" | "Food" | "Party" | "Accident" | "Nerd") ? category.toLowerCase() : "all") + "/" + 
            (defaults.SortingCriteria.includes(sort as "Recommended" | "Distance" | "Freshness" | "Attendees") ? sort.toLowerCase() : "recommended") + "/" + 
            encodeURIComponent(keyword ? keyword : ""), 
            { replace: true })
    }

    return (
        <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
            <SearchBar keyword={keyword} onSearch={handleSearch} onSort={handleSort} onCategoryChange={handleCategoryChange} sort={true} />
            
            <div className="flex-grow overflow-y-scroll no-scrollbar mt-[3.25rem] pt-8 mb-12 z-10">
                {
                    eventData.map((event) => {
                        return (
                            <EventItem 
                                link={"/event/"+event["_id"]}
                                title={event["name"]}
                                location={event["location"]}
                                category={event["category"]}
                                likes={(event["ranking"])["like"]}
                                dislikes={(event["ranking"])["dislike"]}
                                time={isodate2Timestamp(event["createdAt"])}
                                bookmark={false}
                                key={event["_id"]}
                            />
                        )
                    })
                }
            </div>
            <TabBar highlight="list"/>
        </div>
    )
}
 
export default ListView;
function fetchData() {
  throw new Error("Function not implemented.");
}

