
import {
    RiAlarmWarningFill,
} from 'react-icons/ri'; 

import{
    MdOutlineInsertPhoto,
} from 'react-icons/md';

import {
    BsPeople,
    BsCarFrontFill,
} from 'react-icons/bs';

import {
    BiSend
} from 'react-icons/bi'; 

import {
    IoMdMusicalNotes,
    IoMdColorPalette,
    IoMdRestaurant,
    IoMdCafe,
} from 'react-icons/io'; 

import {
    IoBalloonSharp,
    IoFootball,
    IoFilm,
    IoShareOutline
} from 'react-icons/io5'; 

import {
    AiOutlineLike,
    AiOutlineDislike
} from 'react-icons/ai'; 

import {
    HiBookmark,
    HiOutlineBookmark,
} from 'react-icons/hi'; 

interface IconProps {
    type: string,
    className?: string
}

interface Dictionary<Type> {
    [key: string]: Type;
}

const Icon = (props: IconProps) => {
    let icons:Dictionary<any> = {
        "sport": <IoFootball className={props.className} />,
        "music": <IoMdMusicalNotes className={props.className} />,
        "entertainment": <IoFilm className={props.className} />,
        "art": <IoMdColorPalette className={props.className} />,
        "food": <IoMdRestaurant className={props.className} />,
        "party": <IoBalloonSharp className={props.className} />,
        "accident": <RiAlarmWarningFill className={props.className} />,
        "nerd": <IoMdCafe className={props.className} />,
        "like": <AiOutlineLike className={props.className} />,
        "dislike": <AiOutlineDislike className={props.className} />,
        "people": <BsPeople className={props.className} />,
        "share": <IoShareOutline className={props.className} />,
        "bookmark": <HiOutlineBookmark className={props.className} />,
        "bookmark-fill": <HiBookmark className={props.className} />,
        "car-fill": <BsCarFrontFill className={props.className} />,
        "send": <BiSend className={props.className} />,
        "photo": <MdOutlineInsertPhoto className={props.className} />,
    }

    return icons[props.type];

}

export default Icon;