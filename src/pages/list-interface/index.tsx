import { useNavigate, useParams } from "react-router-dom";
import EventItem from "../../components/eventItem";
import SearchBar from "../../components/searchBar";
import TabBar from "../../components/tabBar";
import { ChangeEvent, FormEvent, useState } from "react";
import * as defaults from "../../utils/constants";

const ListView = () => {
    let {keyword, category, sort} = useParams();
    const [formKeyword, setFormKeyword] = useState(keyword);
    const [formCategory, setFormCategory] = useState(category);
    const [formSort, setFormSort] = useState(sort);

    const navigate = useNavigate();

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
            <SearchBar keyword={keyword} onSearch={handleSearch} onSort={handleSort} onCategoryChange={handleCategoryChange} />
            
            <div className="flex-grow overflow-y-scroll no-scrollbar mt-24 mb-12 z-10">
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={false}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={false}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
                    <EventItem 
                        title="Code 'Til You Drop Party"
                        location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
                        category="Entertainment"
                        likes={520}
                        dislikes={134}
                        time={Date.now() - Math.floor(Math.random()*10000000)}
                        bookmark={true}
                    />
            </div>
            <TabBar highlight="list"/>
        </div>
    )

}
 
export default ListView;