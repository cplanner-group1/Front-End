import { CourseTrack } from "./chart";
import { CoursesTrack } from "./courses"

export class TermCourse{
    id: number;
    master: string;
    date:Date[]; 
    courses: string;
    finalExam: Date;
    priority: boolean;
    // true --> should be taken
    // false --> not important
    description: string;
    selected: boolean;
    // 0 --> not picked
    // 1 --> picked
    status: number;
    // 0 --> university
    // 1 --> موسسه
}
export class Date{
    startTime: string;
    endTime: string;
    date: string;
    week: string;
    // 0 --> shanbe
    // 1 --> yek shnabe
    // ...
    // 6 --> jome
}

/*
export const Semester: TermCourse[] = [
    {
        id: 1,
        master: 'کیانی',
        courses: 'ریاضی1',
        priority: '1',
        date:[
            {
                startTime: "8:00:00",
                endTime: "10:00:00",
                date: "",
                week: "0"
            },
            {
                startTime: "8:00:00",
                endTime: "10:00:00",
                date: "",
                week: "2"
            },
        ],
        finalExam: {
            startTime: "9:30:00",
            endTime: "12:00:00",
            date: "2021/3/21",
            week: ''
        },
        description: '-',
        selected: 0
    },
    {
        id: 2,
        master: 'سعیدی',
        courses: 'ریاضی 2',
        priority: '1',
        date:[
            {
                startTime: "8:00:00",
                endTime: "10:00:00",
                date: "",
                week: "0"
            },
            {
                startTime: "8:00:00",
                endTime: "10:00:00",
                date: "",
                week: "2"
            },
        ],
        finalExam: {
            startTime: "9:30:00",
            endTime: "12:00:00",
            date: "2021/3/21",
            week: ''
        },
        description: '-',
        selected: 0
    },
    {
        id: 3,
        master: 'ساکی',
        courses: 'ریاضی 2',
        priority: '1',
        date:[
            {
                startTime: "8:00:00",
                endTime: "10:00:00",
                date: "",
                week: "0"
            },
            {
                startTime: "8:00:00",
                endTime: "10:00:00",
                date: "",
                week: "2"
            },
        ],
        finalExam: {
            startTime: "9:30:00",
            endTime: "12:00:00",
            date: "2021/3/21",
            week: ''
        },
        description: '-',
        selected: 0
    },
    {
        id: 4,
        master: 'زارع',
        courses: 'مبانی نظریه محاسبه',
        priority: '2',
        date:[
            {
                startTime: "10:00:00",
                endTime: "12:00:00",
                date: "",
                week: "0"
            },
            {
                startTime: "10:00:00",
                endTime: "12:00:00",
                date: "",
                week: "2"
            },
        ],
        finalExam: {
            startTime: "8:00:00",
            endTime: "13:00:00",
            date: "2021/06/23",
            week: ''
        },
        description: '-',
        selected: 0
    }
]
*/