
export class Chart{
    id: number; 

    title: string; 
    owner: string;
    
    used: number; // how many times this chart used?

    study: string; // his field in university
    university: string;

    date: string; // date added

    courses: string[]; // list of string babe:)
}
export class Course{
    id: number;
    title: string;
    suggestedPrerequisites: Prerequisite[]; // suggested list of id of courses which prerequisite of this course
}
export class CourseTrack{
    course: Course;
    prerequisites: string[]; // list of id of courses which prerequisite of this course
    status: number; 
        // 0 --> not done
        // 1 --> done
    grade: number;
    label: string;
        // 0 --> primary unit
        // 1 --> optional unit
    description: string;

    checkList: boolean; // always false
    unit: number; // unit of course
}
export interface Prerequisite{
    title: string;
    id: number;
}


// intorie ke chart shamele majmoe ei courseTrack hast va har courseTrack marbot b yek farde khase ama course global e 
// dar course age title motefavet bood id jadid bde behesh 
// prerequisites ha id course haro zakhire mikonee k pish niaz ast chon momken ast pish niaz dr daneshgah hae mokhtlf farq kne to courseTrack ovordm
// suggestedPrerequisites vase ine k hame halat hae ta hala por shde ro dshte bashim k vaqti add krd yeho ezfe kne o oni k nis ro hazf kne

/*
export const Charts: Chart[] = [
    {
        id: 1 ,
        title:  "چارت حدید دانشگاه امیرکبیر",
        owner: "آموزش دانشگاه امیرکبر",
        
        used: 25,

        study: "مکانیک",
        university:"دانشگاه امیرکبیر",

        date: "2020/05/12",
        courses: CoursesTrack
    },
    {
        id: 2 ,
        title:  "چارت حدید دانشگاه تهران",
        owner: "آموزش دانشگاه تهران",
        
        used: 235,

        study: "برق",
        university:"دانشگاه تهران",

        date: "2021/10/12",
        courses:[]
    }
]*/