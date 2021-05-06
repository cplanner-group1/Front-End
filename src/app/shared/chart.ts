export class Chart{
    id: number; 

    title: string; 
    owner: string;
    
    used: number; // how many times this chart used?

    study: string; // his field in university
    university: string;

    date: string; // date added
}

export const Charts: Chart[] = [
    {
        id: 1 ,
        title:  "چارت حدید دانشگاه امیرکبیر",
        owner: "آموزش دانشگاه امیرکبر",
        
        used: 25,

        study: "مکانیک",
        university:"دانشگاه امیرکبیر",

        date: "2020/05/12"
    },
    {
        id: 2 ,
        title:  "چارت حدید دانشگاه تهران",
        owner: "آموزش دانشگاه تهران",
        
        used: 235,

        study: "برق",
        university:"دانشگاه تهران",

        date: "2021/10/12"
    }
]