import EventItem from "../../components/eventItem";

const ListView = () => {

    return (
        <>
        <EventItem 
            title="Code Til' You Drop Party"
            location="164 Eglinton Ave E, Toronto, ON M4P 1A6"
            category="Entertainment"
            likes={520}
            dislikes={134}
            time={Date.now()}
            bookmark={true}
        />
        </>
    )

}
 
export default ListView;