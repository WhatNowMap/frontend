import TabBar from "../../components/tabBar";
import icon_thumb_up from "../../assets/images/icon-thumb-up.svg";
import icon_thumb_down from "../../assets/images/icon-thumb-down.svg";
import icon_bookmark from "../../assets/images/icon-bookmark.svg";
import React from "react";
import Report from "../../assets/Popup/Report";

const EventDetail = () => {

    const [dialogIsOpen, setDialogIsOpen] = React.useState(false);

    const openDialog = () => setDialogIsOpen(true);
  
    const closeDialog = () => setDialogIsOpen(false);
    return(
        <div className="w-full ">
            <div>
                Carousel
            </div>
            <div className="bg-secondary-700">
                <div className="w-full px-6 pt-4 grid grid-cols-2 gap-4 items-center">
                    <div className="text-white font-bold text-2xl">
                        Event Name
                    </div>
                    <div className="justify-self-end">
                        <div><img src={icon_bookmark} className="w-5 h-5"/></div>
                        <div></div>
                    </div>
                </div>
                <div className="px-6 py-4 text-secondary-400 grid grid-cols-2 gap-4 items-center">
                    <div className="flex gap-4">
                        <div className="px-2 py-1 flex items-center gap-2 border">
                            <img src={icon_thumb_up} className="w-5 h-5"/> 23
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 border">
                            <img src={icon_thumb_down} className="w-5 h-5"/> 3
                        </div>
                        <div className="items-center">
                            
                        </div>
                    </div>
                    <div className="justify-self-end">
                        Time
                    </div>
                </div>
            </div>
            <div>
            <Report open={dialogIsOpen} onClose={closeDialog} />

        
            </div>
            <TabBar highlight="profile"/>
        </div>
    )
}

export default EventDetail;