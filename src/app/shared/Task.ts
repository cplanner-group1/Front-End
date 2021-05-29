export class Task{
    checkList: boolean; // always false
    id: number; 

    title: string; 
    owner: string;

    deadlineDateTime: any;
    deadlinePercentage: string;
    deadlineDaysRemaining: string; // کافی است اختلاف امروز و روز ددلاین حساب شود و اگر 0 بود اختلاف ساعت و دقیقه حساب شود

    status: string;   // 0 --> todo 1 --> doing 2 --> done
    priority: string; // 1 --> low  2 --> mid   3 --> high

    lastChangeDate: any;
    description: string;
}
/*
export const tasks:Task[] = [
    {
        checkList: false,
        id:11,
        title:'تمرین پایگاه داده سری اول',
        owner: 'دانشگاه',

        deadlineDateTime:'2021/05/10 23:25:39',
        deadlinePercentage: '20',
        deadlineDaysRemaining: '7 روز',

        status: '1',
        priority: '1',

        lastChangeDate:'10 دقیقه قبل',
        description: "لورم لورم لورم"

    },
    {
        checkList: false,

        id:12,
        title:'تمرین سیستم عامل سری اول',
        owner: 'دانشگاه',

        deadlineDateTime:'2020/05/11 23:25:39',
        deadlinePercentage: '80',
        deadlineDaysRemaining: '7 روز',

        status: '0',
        priority: '3',

        lastChangeDate:'10 ثانیه قبل',
        description: "لورم لورم"


    },
    {
        checkList: false,

        id:'13',
        title:'تسک منیجر',
        owner: 'شرکت',

        deadlineDateTime:'2021/05/11 3:25:39',
        deadlinePercentage: '83',
        deadlineDaysRemaining: '5 ساعت',

        status: '2',
        priority: '2',

        lastChangeDate:'همین الان',
        description: "لورم لورم لورم لورم"


    }
]*/