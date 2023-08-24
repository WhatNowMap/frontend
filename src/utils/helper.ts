export const isodate2Timestamp = (isodate: string):number => {
    const date = new Date(isodate);
    const timestamp = date.getTime();
    return timestamp;
}

export const timestamp2Elapsed = (timestamp: number):string => {
    const timediff:number = (Date.now()-timestamp)/1000;
    let timelapse:string = "";

    if (timediff < 2*60) {
        timelapse = "a moment ago";
    }
    else if (timediff < 60*60) {
        timelapse = Math.floor(timediff/60) + " mins ago"
    }
    else {
        const hr = Math.floor(timediff/60/60);
        timelapse = hr == 1 ? "1 hr ago" : hr + " hrs ago";
    }
    return timelapse;
}