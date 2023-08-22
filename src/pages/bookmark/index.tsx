import EventItem from "../../components/eventItem";

import Header from "../../components/header";
import TabBar from "../../components/tabBar";

const ListView = () => {

    return (
        <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
            <Header 
            Header_title={"Bookmark"} 
            arrow={false}
            />
            <div className="flex-grow overflow-y-scroll no-scrollbar mt-24 mb-16">
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
            <TabBar highlight="bookmark"/>
        </div>
    )

}
 
export default ListView;