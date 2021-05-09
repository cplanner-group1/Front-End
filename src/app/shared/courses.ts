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
        suggestedPrerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            }
        ] 
    },
    {
        id: 4,
        title: 'معادلات',
        suggestedPrerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            },
            {
                id: 3,
                title: 'ریاضی 2'
            }
        ] 
    },
    {
        id: 5,
        title: 'برنامه نویسی پیشرفته',
        suggestedPrerequisites: [
            {
                id: 2,
                title: 'مبانی برنامه نویسی',
            }
        ] 
    },
    {
        id: 6,
        title: 'مبانی علوم ریاضی',
        suggestedPrerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            }
        ] 
    },
    {
        id: 7,
        title: 'مبانی ترکیبیات',
        suggestedPrerequisites: [
            {
                id: 6,
                title: 'مبانی علوم ریاضی'    
            }
        ] 
    },
    {
        id: 8,
        title: 'مبانی ماتریس و جبرخطی',
        suggestedPrerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            },
            {
                id: 6,
                title: 'مبانی علوم ریاضی'    
            }
        ] 
    },
    {
        id: 9,
        title: 'ساختمان داده',
        suggestedPrerequisites: [
            {
                id: 2,
                title: 'مبانی برنامه نویسی',
            },
            {
                id: 5,
                title: 'برنامه نویسی پیشرفته',   
            }
        ] 
    }   
];

export const CoursesTrack: CourseTrack[] = [
    {
        course: 
        {
            id: 1,
            title: 'ریاضی 1',
            suggestedPrerequisites: [] 
        },
        prerequisites: [],
        status: 1, 
        grade: 18.5,
        label: '0'
    },
    {
        course: 
        {
            id: 2,
            title: 'مبانی برنامه نویسی',
            suggestedPrerequisites: [] 
        },
        prerequisites: [],
        status: 1, 
        grade: 17.21,
        label: '0'

    },
    {
        course: 
        {
            id: 3,
            title: 'ریاضی 2',
            suggestedPrerequisites: [
                {
                    id: 1,
                    title: 'ریاضی 1'
                }
            ] 
        },
        prerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            }
        ],
        status: 1, 
        grade: null,
        label: '0'

    },
    {
        course: 
        {
            id: 4,
            title: 'معادلات',
            suggestedPrerequisites: [
                {
                    id: 1,
                    title: 'ریاضی 1'
                },
                {
                    id: 3,
                    title: 'ریاضی 2'
                }
            ] 
        },
        prerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            },
            {
                id: 3,
                title: 'ریاضی 2'
            }
        ],
        status: 0, 
        grade: null,
        label: '1'
    },
    {
        course: 
        {
            id: 5,
            title: 'برنامه نویسی پیشرفته',
            suggestedPrerequisites: [
                {
                    id: 2,
                    title: 'مبانی برنامه نویسی',
                }
            ] 
        },
        prerequisites: [
            {
                id: 2,
                title: 'مبانی برنامه نویسی',
            }
        ],
        status: 0, 
        grade: null,
        label: '0'
    },
    {
        course: 
        {
            id: 6,
            title: 'مبانی علوم ریاضی',
            suggestedPrerequisites: [
                {
                    id: 1,
                    title: 'ریاضی 1'
                }
            ] 
        },
        prerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            }
        ],
        status: 0, 
        grade: null,
        label: '0'

    },
    {
        course: 
        {
            id: 7,
            title: 'مبانی ترکیبیات',
            suggestedPrerequisites: [
                {
                    id: 1,
                    title: 'ریاضی 1'
                },
                {
                    id: 6,
                    title: 'مبانی علوم ریاضی'    
                }
            ] 
        },
        prerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            },
            {
                id: 6,
                title: 'مبانی علوم ریاضی'    
            }
        ],
        status: 0, 
        grade: null,
        label: '1'
    },
    {
        course:
        {
            id: 8,
            title: 'مبانی ماتریس و جبرخطی',
            suggestedPrerequisites: [
                {
                    id: 1,
                    title: 'ریاضی 1'
                },
                {
                    id: 6,
                    title: 'مبانی علوم ریاضی'    
                }
            ] 
        },
        prerequisites: [
            {
                id: 1,
                title: 'ریاضی 1'
            },
            {
                id: 6,
                title: 'مبانی علوم ریاضی'    
            }
        ],
        status: 0, 
        grade: null,
        label: '1'
    },
    {
        course:
        {
            id: 9,
            title: 'ساختمان داده',
            suggestedPrerequisites: [
                {
                    id: 2,
                    title: 'مبانی برنامه نویسی',
                },
                {
                    id: 5,
                    title: 'برنامه نویسی پیشرفته',   
                }
            ] 
        }  ,
        prerequisites: [
            {
                id: 2,
                title: 'مبانی برنامه نویسی',
            },
            {
                id: 5,
                title: 'برنامه نویسی پیشرفته',   
            }
        ],
        status: 0, 
        grade: null,
        label: '0'

    }
    
]
