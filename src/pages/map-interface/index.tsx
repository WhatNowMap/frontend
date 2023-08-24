import { ChangeEvent, FormEvent, useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as defaults from "../../utils/constants";
import SearchBar from "../../components/searchBar";
import TabBar from "../../components/tabBar";
import axios from 'axios';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { onEnterRoute } from "../../helpers/AuthHelper";
const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL

mapboxgl.accessToken =
  'pk.eyJ1Ijoid2hhdG5vd21hcCIsImEiOiJjbGw0Nnk1aTkwMXIxM2VwMGpiN3RmZ3Y5In0.O5vq93APpSPPQgPHc9VC6g';

let mapMarkers: mapboxgl.Marker[] = [];

const MapView = () => {
    onEnterRoute();
    let {keyword, category} = useParams();
    const [formKeyword, setFormKeyword] = useState(keyword);
    const [formCategory, setFormCategory] = useState(category);
    const [eventData, setEventData] = useState([]);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.367015);
    const [lat, setLat] = useState(43.669070);
    const [zoom, setZoom] = useState(8);

    if (zoom > 99999) {
        setLng(0);
        setLat(0);
        setZoom(0);
        setEventData(eventData);
    }

    useEffect(() => {
        //if (map.current) return; // initialize map only once

        if (!map.current) {
            (map.current! as mapboxgl.Map) = new mapboxgl.Map({
                container: mapContainer.current!,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom
            });
        }

        mapMarkers.forEach((marker) => marker.remove());
        mapMarkers = [];

        const fetchData = async () => {
            try {
                let url = `${baseUrl}event?`;
                if (defaults.Categories.map((i:string)=>i.toLowerCase()).includes(category as any)) {
                    url += "category=" + category
                }

                const response = await axios.get(url, { withCredentials: true });
                //console.log(url);


                response.data.data.map((event: any) => {
                    const popupContent = `
                        <div class="flex flex-col">
                            <div class="h-24 bg-secondary-500">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Toronto_Skyline_Summer_2020.jpg/320px-Toronto_Skyline_Summer_2020.jpg"
                                    class="w-full h-24 object-cover" />
                            </div>
                            <h3 class="mt-2 text-secondary-100 text-lg font-bold">${event["name"]}</h3>


                            <div class="text-xs text-secondary-300">${event["category"]}</div>
                            <div class="text-[8pt] text-secondary-300">
                                <img class="h-4 mt-1 float-left me-1"  src="/images/icon-location-logo.svg" />
                                ${event["location"]}
                            </div>
                            <div class="w-full h-full flex flex-row grow items-end">
                                <div class="flex flex-row items-center me-4">
                                    <img class="h-3 w-3" src="/images/icon-thumb-up.svg" />
                                    <div class="text-xs ms-1 text-secondary-200">${(event["ranking"])["like"]}</div>
                                </div>
                                <div class="flex flex-row items-center me-4">
                                    <img class="h-3 w-3" src="/images/icon-thumb-down.svg" />
                                    <div class="text-xs ms-1 text-secondary-200">${(event["ranking"])["dislike"]}</div>
                                </div>
                                <div class="text-end text-sm grow text-secondary-200">
                                    
                                </div>
                            </div>

                            <a href="/event/${event["_id"]}" class="bg-primary-500 hover:bg-primary-700 text-white font-bold mt-2 py-2 px-4 rounded inline-flex items-center outline-none">
                                <svg class="fill-current w-4 h-4 mr-2"  viewBox="0 0 128 128" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g>
                                    <path d="M109,55c0-29.8-24.2-54-54-54C25.2,1,1,25.2,1,55s24.2,54,54,54c13.5,0,25.8-5,35.2-13.1l25.4,25.4l5.7-5.7L95.9,90.2   C104,80.8,109,68.5,109,55z M55,101C29.6,101,9,80.4,9,55S29.6,9,55,9s46,20.6,46,46S80.4,101,55,101z"/>
                                    <path d="M25.6,30.9l6.2,5.1C37.5,29,46,25,55,25v-8C43.6,17,32.9,22.1,25.6,30.9z"/>
                                    <path d="M17,55h8c0-2.1,0.2-4.1,0.6-6.1l-7.8-1.6C17.3,49.8,17,52.4,17,55z"/>
                                    </g>
                                </svg>
                                <span>Event Details</span>
                            </a>

                            
                        </div>
                    `;

                    //console.log(event.lng, event.lag);
                    const marker = new mapboxgl.Marker({color: "#7958B0"})
                        .setLngLat([event.lng, event.lag])
                        .setPopup(
                            new mapboxgl.Popup({ 
                                    className: "map-popup",
                                    offset: 25,
                                    closeButton: false
                                    }) // add popups
                                .setHTML(popupContent)
                          )
                        .addTo(map.current!);
                    mapMarkers.push(marker);
                });

                setEventData(response.data.data);
                //console.log(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [keyword, category]);

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
            
            <div className="flex-grow overflow-y-scroll no-scrollbar mt-[3.25rem] mb-12 z-10">
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />

                <div ref={mapContainer} className="map-container h-full w-full" />
            </div>
            <TabBar highlight="map"/>
        </div>
    )

}
 
export default MapView;