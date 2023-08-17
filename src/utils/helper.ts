export const isodate2Timestamp = (isodate: string):number => {
    const date = new Date(isodate);
    const timestamp = date.getTime();
    return timestamp;
}