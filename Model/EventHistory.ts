export interface EventHistory {
    id: number;
    name: string;
    category: string;
    createdAt: Date,
    updatedAt: Date,
    location: string,
    lag: string,
    lng: string,
    description: string,
    mediaIds: string[],
    ranking: string[],
    attendance: number,
    userId: number
}
