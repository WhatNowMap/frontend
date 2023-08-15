import { ChangeEvent, FormEvent, useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as defaults from "../../utils/constants";
import SearchBar from "../../components/searchBar";
import TabBar from "../../components/tabBar";

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken =
  'pk.eyJ1Ijoid2hhdG5vd21hcCIsImEiOiJjbGw0Nnk1aTkwMXIxM2VwMGpiN3RmZ3Y5In0.O5vq93APpSPPQgPHc9VC6g';

const MapView = () => {
    let {keyword, category} = useParams();
    const [formKeyword, setFormKeyword] = useState(keyword);
    const [formCategory, setFormCategory] = useState(category);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.367015);
    const [lat, setLat] = useState(43.669070);
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        (map.current! as mapboxgl.Map) = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        // (map.current! as mapboxgl.Map).setCenter([-79.367015, 43.669070]);
        // (map.current! as mapboxgl.Map).setZoom(11);
    });

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
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />

                <div ref={mapContainer} className="map-container h-full w-full" />
            </div>
            <TabBar highlight="map"/>
        </div>
    )

}
 
export default MapView;