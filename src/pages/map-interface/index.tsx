import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/searchBar";
import TabBar from "../../components/tabBar";
import { ChangeEvent, FormEvent, useState } from "react";
import * as defaults from "../../utils/constants";

const MapView = () => {
    let {keyword, category} = useParams();
    const [formKeyword, setFormKeyword] = useState(keyword);
    const [formCategory, setFormCategory] = useState(category);

    const navigate = useNavigate();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = (e.target as HTMLFormElement).keyword as HTMLInputElement;
        keyword = input.value;
        setFormKeyword(keyword);
        input.blur();
        performSearch(keyword!, formCategory!);
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
        performSearch(formKeyword!, category!);
    }

    const performSearch = (keyword: string, category: string) => {
        navigate("/map/" + 
            (defaults.Categories.includes(category as "Sport" | "Music" | "Entertainment" | "Art" | "Food" | "Party" | "Accident" | "Nerd") ? category.toLowerCase() : "all") + "/" + 
            encodeURIComponent(keyword ? keyword : ""), 
            { replace: true })
    }

    return (
        <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
            <SearchBar keyword={keyword} onSearch={handleSearch} onCategoryChange={handleCategoryChange} sort={false} />
            
            <div className="flex-grow overflow-y-scroll no-scrollbar mt-[5.5rem] mb-12 z-10">

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11543.990214614816!2d-79.3916043!3d43.6690207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1692111197447!5m2!1sen!2sca" 
                className="w-full h-full border-0" 
                loading="lazy"></iframe>

            </div>
            <TabBar highlight="map"/>
        </div>
    )

}
 
export default MapView;