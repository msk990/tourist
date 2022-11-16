export interface TimelineMedia {
    src: string;
}

export interface InOutPut{
    name: string;
    quantity:string;
    unit: string;
}

export interface AData {
    name: string;
    value: string;
    unit: string;
    instrument?: string;
}
export interface Document{
    src: string;
}

export interface Equipment {
    type: string;
    model: string;
    year: string;
}


export interface Activity {
name: string;
input?: InOutPut[];
output?: InOutPut[];
data?: AData[];
equipment?: Equipment[];
document? : Document[];
}
export interface TimelineItm {
    id: string;
    title: string;
    avatar: string;
    date: string;
    comment: string;
    media: TimelineMedia[];
    activity: Activity


}