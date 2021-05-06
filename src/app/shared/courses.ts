import { Course, CourseTrack } from './chart';

export const Courses: Course[] = [
    {
        id: 1,
        title: 'ریاضی 1',
        suggestedPrerequisites: null 
    },
    {
        id: 2,
        title: 'مبانی برنامه نویسی',
        suggestedPrerequisites: null 
    },
    {
        id: 3,
        title: 'ریاضی 2',
        suggestedPrerequisites: [1] 
    },
    {
        id: 4,
        title: 'معادلات',
        suggestedPrerequisites: [1,3] 
    },
    {
        id: 5,
        title: 'برنامه نویسی پیشرفته',
        suggestedPrerequisites: [2] 
    },
    {
        id: 6,
        title: 'مبانی علوم ریاضی',
        suggestedPrerequisites: [1] 
    },
    {
        id: 7,
        title: 'مبانی ترکیبیات',
        suggestedPrerequisites: [6] 
    },
    {
        id: 8,
        title: 'مبانی ماتریس و جبرخطی',
        suggestedPrerequisites: [1,6] 
    },
    {
        id: 9,
        title: 'ساختمان داده',
        suggestedPrerequisites: [2,5] 
    }   
];

export const CoursesTrack: CourseTrack[] = [
    {
        course: 
        {
            id: 1,
            title: 'ریاضی 1',
            suggestedPrerequisites: null 
        },
        prerequisites: null,
        status: 1, 
        grade: 18.5
    },
    {
        course: 
        {
            id: 2,
            title: 'مبانی برنامه نویسی',
            suggestedPrerequisites: null 
        },
        prerequisites: null,
        status: 1, 
        grade: 17.21
    },
    {
        course: 
        {
            id: 3,
            title: 'ریاضی 2',
            suggestedPrerequisites: [1] 
        },
        prerequisites: [1],
        status: 1, 
        grade: null
    },
    {
        course: 
        {
            id: 4,
            title: 'معادلات',
            suggestedPrerequisites: [1,3] 
        },
        prerequisites: [1,3],
        status: 0, 
        grade: null
    },
    {
        course: 
        {
            id: 5,
            title: 'برنامه نویسی پیشرفته',
            suggestedPrerequisites: [2] 
        },
        prerequisites: [2],
        status: 0, 
        grade: null
    },
    {
        course: 
        {
            id: 6,
            title: 'مبانی علوم ریاضی',
            suggestedPrerequisites: [1] 
        },
        prerequisites: [1],
        status: 0, 
        grade: null
    },
    {
        course: 
        {
            id: 7,
            title: 'مبانی ترکیبیات',
            suggestedPrerequisites: [1,6] 
        },
        prerequisites: [1,6],
        status: 0, 
        grade: null
    },
    {
        course:
        {
            id: 8,
            title: 'مبانی ماتریس و جبرخطی',
            suggestedPrerequisites: [1,6] 
        },
        prerequisites: [1,6],
        status: 0, 
        grade: null
    },
    {
        course:
        {
            id: 9,
            title: 'ساختمان داده',
            suggestedPrerequisites: [2,5] 
        }  ,
        prerequisites: [2,5],
        status: 0, 
        grade: null
    }
    
]
