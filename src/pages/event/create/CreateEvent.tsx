import { useState } from "react";
import Input from "../../../components/Input/Input";
import svg from "../../../assets/react.svg";
import style from "./CreateEvent.module.css";
import Select from "react-select";

function CreateEvent(props: any) {
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    // const [options, setOptions] = useState([]);

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    return (
        <>
            <div className={style.ImgContainer}>
                <div className={style.Imgbtn}>
                    <label htmlFor="file">
                        <img src={svg} />
                    </label>
                    <Input id={"file"} type={"file"} styleType={"loginInput"} value={""} callBack={(value: any) => console.log(value)}></Input>
                </div>
                <img className={style.img} src={image} />
            </div>
            <div className={style.InputContainer}>
                <div>
                    <label>Event Title*</label>
                    <Input id={"Input"} type={"text"} styleType={"Input"} value={""} callBack={(value: any) => value}></Input>
                </div>
                <div>
                    <label>Category*</label>
                    <Select options={options} />
                </div>
                <div>
                    <label>Location*</label>
                    <Input id={"Input"} type={"text"} styleType={"Input"} value={""} callBack={(value: any) => value}></Input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea style={{ width: "100%" }} id={"commentInput"} value={""} rows={5} cols={50}></textarea>
                </div>
                <Input id={"search_input"} type={"text"} placeholder={"Search"} styleType={"commentInput"} value={""} callBack={(value: any) => value}></Input>
            </div>
        </>
    );
}

export default CreateEvent;
