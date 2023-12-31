import { useState, useRef, useEffect, FocusEvent } from "react";
import Input from "../../../components/Input/Input";
import { HiOutlinePhotograph } from "react-icons/hi";

import style from "./CreateEvent.module.css";
import Select from "react-select";

import * as PATH from "../../../utils/constants";
import * as Mapbox from "@mapbox/search-js-react";
import axios from "axios";
import Header from "../../../components/header";
import { onEnterRoute } from "../../../helpers/AuthHelper";

interface CreateEventRequest {
    name: string;
    category: string;
    location: string;
    lag: number;
    lng: number;
    description: string;
    medialds: string;
}
const CreateEvent = () => {
    onEnterRoute();
    const [date, setDate] = useState();
    const [eventTitle, seteventTitle] = useState<string | null>("");
    const [Description, setDescription] = useState("");
    const [image, setImage] = useState<string | undefined>(undefined);
    const [imagefile, setImagefile] = useState<string | undefined>(undefined);
    const [selectedOption, setSelectedOption] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [locationName, setLocationName] = useState("");
    const selectedOptionRef = useRef();

    const options = PATH.Categories.map((category) => ({
        label: category,
        value: category,
    }));

    const handleCategoryChange = (selected: any) => {
        setSelectedOption(selected.value);
        console.log(selectedOption);
    };
    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    };

    const getLocation = (value: any) => {
        console.log(value);
        setLocationName(value.features[0].properties.name);
        setLatitude(value.features[0].properties.coordinates.latitude);
        setLongitude(value.features[0].properties.coordinates.longitude);
    };

    const getImg = (value: any) => {
        console.log(value);
        var imgsrc = value[0];
        setImage(URL.createObjectURL(imgsrc));
        setImagefile(imgsrc);
    };

    const submit = async (value: any) => {
        value.preventDefault();

        try {
            if (eventTitle == null || eventTitle == undefined || eventTitle == "") {
                return;
            }
            if (selectedOption == null || selectedOption == undefined || selectedOption == "") {
                return;
            }
            if (locationName == null || locationName == undefined || locationName == "") {
                return;
            }
            let mediaID;
            if (imagefile != null) {
                mediaID = await uploadImg(imagefile);
            }

            let opts: CreateEventRequest = {
                name: eventTitle,
                category: selectedOption,
                location: locationName,
                lag: latitude,
                lng: longitude,
                description: Description,
                medialds: mediaID ? mediaID : "",
            };

            console.log(opts);

            fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(opts),
            })
                .then((response) => {
                    console.log(response);
                    if (response.ok) {
                    } else {
                        // Handle error
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });
        } catch (error) {
            //console.log(error);
        }
    };

    const uploadImg = async (value: any) => {
        const formData = new FormData();
        formData.append("media", value);
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/storage/upload`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();

                setImage(responseData.url);

                return responseData.mediaId;
            } else {
                console.log("Failed upload");
            }
        } catch (err) {
            console.log("err", err);
        }
    };

    const reset = (value: any) => {
        window.location.href = PATH.HOME_PATH;
    };

    return (
        <>
            <Header Header_title={"Create Event"} arrow={true} />
            <div style={{ overflow: "auto", width: "100%", height: "100vh", maxHeight: "calc(100vh - 60px)" }}>
                <div className={style.Container}>
                    <div className={style.ImgContainer}>
                        <div className={style.Imgbtn}>
                            <label htmlFor="file">
                                <HiOutlinePhotograph size="30px" />
                            </label>
                            <Input id={"file"} type={"file"} styleType={"Input"} accept={"image/*"} callBack={(value: any) => getImg(value)}></Input>
                        </div>
                        {image == undefined ? <div style={{ backgroundColor: "white", aspectRatio: "16 / 9" }}></div> : <img className={style.img} src={image}></img>}
                    </div>
                    <div className={style.InputContainer}>
                        <div>
                            <label>Event Title*</label>
                            <Input id={"Input"} type={"text"} styleType={"Input"} value={eventTitle} callBack={(value: any) => seteventTitle(value)} required={true}></Input>
                        </div>
                        <div>
                            <label>Category*</label>
                            <Select
                                classNames={{
                                    control: () => style.selectField,
                                }}
                                onChange={handleCategoryChange}
                                options={options}
                                placeholder={""}
                                ref={selectedOptionRef}
                            />
                        </div>
                        <div>
                            <label>Location*</label>
                            <form>
                                <Mapbox.SearchBox
                                    accessToken={PATH.accessToken}
                                    options={{
                                        language: "en",
                                        country: "CA",
                                    }}
                                    onChange={(val) => setLocationName(val)}
                                    onRetrieve={(val) => getLocation(val)}
                                    value=""
                                ></Mapbox.SearchBox>
                            </form>
                        </div>

                        {/* <div>
                        <label>Event Date*</label>
                        <Input id={"Input"} type={"datetime-local"} styleType={"Input"} value={date} callBack={(value: any) => setDate(value)}></Input>
                    </div> */}
                        <div>
                            <label>Description</label>
                            <textarea style={{ width: "100%" }} id={"commentInput"} rows={5} cols={50} value={Description} onChange={handleDescriptionChange}></textarea>
                        </div>
                    </div>
                    <div className={style.btnContainer}>
                        <button type="button" onClick={submit}>
                            Yes
                        </button>
                        <button type="button" onClick={reset}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateEvent;
