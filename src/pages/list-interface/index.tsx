import EventItem from "../../components/eventItem";
import SearchBar from "../../components/searchBar";
import TabBar from "../../components/tabBar";

const ListView = () => {

    return (
        <div className="">
            <SearchBar />

            <div className="overflow-y-scroll no-scrollbar">
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