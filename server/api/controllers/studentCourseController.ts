import { NextFunction, Request, Response } from 'express';
import Student, { IStudentCoursesModel } from '../models/Student';

export const getStudentCourse = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const studentCourse = await Student.findById(id);
    res.status(200).json(studentCourse);
};
export const addStudentCourse = async (req: Request, res: Response, next: NextFunction) => {
    // const id = req.params.id;
    const studentCourse = await Student.create(req.body);
    res.status(200).json(studentCourse);
};

export const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    console.log(req.body);
    const studentCourse = await Student.findById(id);
    if (studentCourse) {
        studentCourse.courses = mockBhist;
        await studentCourse.save();
    } else {
        throw Error('no such Student course');
    }
    res.status(200).json(studentCourse);
};
const mockBhist = [
    {
        purchasedOn: '2020-08-31T07:13:13.771Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: "effective communication your 'career-hacker'",
            slug: "effective-communication-your-'career-hacker'",
            _id: '5f48c61811bb0f43daa39fdb',
            currentPrice: 6000,
            currentDiscount: 95.01,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/4416e389-958e-4937-8a87-0a727c0ba7de.jpeg'
        },
        completedChapters: [
            {
                id: '5f48c61811bb0f43daa39fdc',
                timeRequired: 60,
                isMandatory: true,
                isDeleted: false,
                name: 'Introduction to Digital Marketing',
                status: 'INPROGRESS',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fdd',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '14808107-c561-4694-87fb-bf3299229e8d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction to website',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdd',
                        lastAccess: '2020-08-31T17:19:17.189Z',
                        startTime: '2020-08-31T07:17:43.614Z',
                        completedTime: '2020-08-31T17:19:09.471Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fde',
                        timeRequired: 40,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8f201dc5-de23-4b9c-a306-07b011c265e6.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: '3 : The general plan',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fde',
                        lastAccess: '2020-08-31T17:19:28.496Z',
                        startTime: '2020-08-31T17:19:09.564Z',
                        completedTime: '2020-08-31T17:19:28.494Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fdf',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '7448bffa-2ee4-417b-9de2-cea4d613112e.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/7448bffa-2ee4-417b-9de2-cea4d613112e.pdf'
                        },
                        quizQuestions: [],
                        name: 'Website Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'STARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdf',
                        lastAccess: '2020-08-31T17:19:28.592Z',
                        startTime: '2020-08-31T17:19:28.592Z'
                    },
                    {
                        id: '5f6305bebba7f00194547f73',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                options: [
                                    {
                                        option: '1'
                                    },
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'Question 1',
                                answer: '3'
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                options: [
                                    {
                                        option: 'true'
                                    },
                                    {
                                        option: 'false'
                                    }
                                ],
                                question: 'question 2',
                                answer: 'true'
                            }
                        ],
                        name: 'quiz',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                isAnswered: false,
                                answer: ''
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6305bebba7f00194547f73'
                    },
                    {
                        id: '5f6606f5203dc36cbb53250e',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: '1',
                                answer: '3'
                            }
                        ],
                        name: 'first',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6606f5203dc36cbb53250e'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fdc',
                startTime: '2020-08-31T07:17:43.608Z'
            },
            {
                id: '5f48c61811bb0f43daa39fe0',
                timeRequired: 50,
                isMandatory: true,
                isDeleted: false,
                name: 'Website Optimisation',
                status: 'NOTSTARTED',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fe1',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '765f019f-d154-44e5-880d-d5147e82fb1d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe1'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fe2',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '59272f17-01b1-46be-8b97-6d76cda9a671.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/59272f17-01b1-46be-8b97-6d76cda9a671.pdf'
                        },
                        quizQuestions: [],
                        name: 'Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe2'
                    },
                    {
                        id: '5f6305eabba7f00194548093',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305eabba7f00194548094',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'test',
                                answer: '2'
                            }
                        ],
                        name: 'test',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6305eabba7f00194548094',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6305eabba7f00194548093'
                    },
                    {
                        id: '5f74ca1b96153e535c1d010e',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'c4acebcf-e327-4828-aa71-c3632b0287f3.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Video',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f74ca1b96153e535c1d010e'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fe0'
            }
        ]
    },
    {
        purchasedOn: '2021-03-24T13:39:53.857Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Software Development',
            slug: 'master-conversations-at-workplace',
            _id: '5f6688e9d4c3e9783ac6b573',
            currentPrice: 200,
            currentDiscount: 50,
            category: 'Personal Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/8f6e95f9-0868-4993-9301-020f9996ad42.jpeg'
        },
        completedChapters: [
            {
                id: '5f6688e9d4c3e9783ac6b574',
                timeRequired: 3600,
                isMandatory: true,
                isDeleted: false,
                name: 'Java Script Basics',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '605b4129d8140219d77a4b11',
                chapterId: '5f6688e9d4c3e9783ac6b574',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b575',
                        timeRequired: 3600,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '502fbbf6-8e97-4dcc-b002-085d0c78b23f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                options: [
                                    {
                                        option: 'Map'
                                    },
                                    {
                                        option: 'forEach'
                                    }
                                ],
                                question: 'Which one would be more efficient to use in case of arrays',
                                answer: 'map'
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                options: [],
                                question: 'what is array ',
                                answer: 'array is a collection '
                            }
                        ],
                        name: 'Array Methods',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '605b4129d8140219d77a4b12',
                        contentId: '5f6688e9d4c3e9783ac6b575',
                        quizAnswers: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                isAnswered: false,
                                _id: '605b4129d8140219d77a4b14',
                                answer: ''
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                isAnswered: false,
                                _id: '605b4129d8140219d77a4b16',
                                answer: ''
                            }
                        ]
                    }
                ]
            },
            {
                id: '5f6688e9d4c3e9783ac6b578',
                timeRequired: 240,
                isMandatory: true,
                isDeleted: false,
                name: 'React',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '605b4129d8140219d77a4b17',
                chapterId: '5f6688e9d4c3e9783ac6b578',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b579',
                        timeRequired: 1200,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '669ff059-33db-41b4-b6b2-034fc0914103.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'REACT WITH REDUX',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '605b4129d8140219d77a4b18',
                        contentId: '5f6688e9d4c3e9783ac6b579',
                        quizAnswers: []
                    }
                ]
            }
        ]
    },
    {
        purchasedOn: '2021-04-01T08:58:33.646Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Confidence code - your gateway to success',
            slug: 'etiquette-and-grooming-for-professional-success',
            _id: '5f54959f54732d0d7e2412c0',
            currentPrice: 499,
            currentDiscount: 20,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'Hindi',
            offerText: '!!! Limited time offer',
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/91154c22-c62a-40c3-94a2-403936188dec.jpeg'
        },
        completedChapters: [
            {
                id: '5f549d4154732d0d7e2412dd',
                timeRequired: 15,
                isMandatory: true,
                isDeleted: false,
                name: 'Kya hai Confidence?',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '60658b3907dcb75c150f3f79',
                chapterId: '5f549d4154732d0d7e2412dd',
                completedContent: [
                    {
                        id: '5f549d4154732d0d7e2412de',
                        timeRequired: 124,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '8f5ae16e-ec3a-4134-85c5-4d7e4d0cb5ab.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f7a',
                        contentId: '5f549d4154732d0d7e2412de',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c11554732d0d7e241312',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: 'c9d105ff-9e61-466a-84a9-e9025426ea48.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence: why do you need it?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f7b',
                        contentId: '5f54c11554732d0d7e241312',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c3b454732d0d7e24133e',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8b0c82cf-fc09-4a02-9322-c0a898fe4218.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Why am I doing this?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f7c',
                        contentId: '5f54c3b454732d0d7e24133e',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c2b954732d0d7e241326',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'bc258917-fa04-4046-b58c-b88b92b2e720.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'What this course is really?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f7d',
                        contentId: '5f54c2b954732d0d7e241326',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c72f54732d0d7e24135a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '38d352e7-4434-463a-a9c9-7f09720c289f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'How should you take this course?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f7e',
                        contentId: '5f54c72f54732d0d7e24135a',
                        quizAnswers: []
                    },
                    {
                        id: '5f54cc9f54732d0d7e24137a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '6c005375-4bbd-4f77-bdb5-882c63586d83.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence code - your panacea',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f7f',
                        contentId: '5f54cc9f54732d0d7e24137a',
                        quizAnswers: []
                    }
                ]
            },
            {
                id: '5f54d24554732d0d7e24139e',
                timeRequired: 20,
                isMandatory: true,
                isDeleted: false,
                name: 'Genesis of confidence and Self-esteem',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '60658b3907dcb75c150f3f80',
                chapterId: '5f54d24554732d0d7e24139e',
                completedContent: [
                    {
                        id: '5f54d24554732d0d7e24139f',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '085dd1c0-2291-4c2c-b3d2-84c4fdc833c7.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Six Structures of Life - Upbringing',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f81',
                        contentId: '5f54d24554732d0d7e24139f',
                        quizAnswers: []
                    },
                    {
                        id: '5f55194154732d0d7e2413f4',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'badf976b-a086-44fc-90d4-d510a405d0d2.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/badf976b-a086-44fc-90d4-d510a405d0d2.pdf'
                        },
                        quizQuestions: [],
                        type: 'PDF',
                        name: 'Find your ideal',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f82',
                        contentId: '5f55194154732d0d7e2413f4',
                        quizAnswers: []
                    },
                    {
                        id: '5f577f8983bedb0f21f64513',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'b2124fb5-ab8d-4464-96f1-7858d11043d1.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Appearance',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f83',
                        contentId: '5f577f8983bedb0f21f64513',
                        quizAnswers: []
                    },
                    {
                        id: '5f5b74365bc1e375796e1d3a',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf'
                        },
                        quizQuestions: [],
                        name: 'Appearance action plan',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '60658b3907dcb75c150f3f84',
                        contentId: '5f5b74365bc1e375796e1d3a',
                        quizAnswers: []
                    }
                ]
            }
        ]
    }
];
const mockKundan = [
    {
        purchasedOn: '2020-09-23T05:28:24.788Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: "effective communication your 'career-hacker'",
            slug: "effective-communication-your-'career-hacker'",
            _id: '5f48c61811bb0f43daa39fdb',
            currentPrice: 6000,
            currentDiscount: 95.01,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/4416e389-958e-4937-8a87-0a727c0ba7de.jpeg'
        },
        completedChapters: [
            {
                id: '5f48c61811bb0f43daa39fdc',
                timeRequired: 60,
                isMandatory: true,
                isDeleted: false,
                name: 'Introduction to Digital Marketing',
                status: 'COMPLETED',
                isCompleted: true,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fdd',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '14808107-c561-4694-87fb-bf3299229e8d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction to website',
                        type: 'VIDEO',
                        timestamp: 2.760361,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdd',
                        lastAccess: '2021-04-19T20:11:02.105Z',
                        startTime: '2020-09-23T05:28:41.963Z',
                        completedTime: '2020-09-23T05:28:52.205Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fde',
                        timeRequired: 40,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8f201dc5-de23-4b9c-a306-07b011c265e6.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: '3 : The general plan',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fde',
                        lastAccess: '2020-09-23T05:28:57.598Z',
                        startTime: '2020-09-23T05:28:52.318Z',
                        completedTime: '2020-09-23T05:28:57.594Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fdf',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '7448bffa-2ee4-417b-9de2-cea4d613112e.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/7448bffa-2ee4-417b-9de2-cea4d613112e.pdf'
                        },
                        quizQuestions: [],
                        name: 'Website Document',
                        type: 'PDF',
                        timestamp: 1.187269,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdf',
                        lastAccess: '2020-09-23T05:29:52.773Z',
                        startTime: '2020-09-23T05:28:57.701Z',
                        completedTime: '2020-09-23T05:29:01.814Z'
                    },
                    {
                        id: '5f6305bebba7f00194547f73',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                options: [
                                    {
                                        option: '1'
                                    },
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'Question 1',
                                answer: '3'
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                options: [
                                    {
                                        option: 'true'
                                    },
                                    {
                                        option: 'false'
                                    }
                                ],
                                question: 'question 2',
                                answer: 'true'
                            }
                        ],
                        name: 'quiz',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                isAnswered: true,
                                answer: '2'
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                isAnswered: true,
                                answer: 'false'
                            }
                        ],
                        contentId: '5f6305bebba7f00194547f73',
                        lastAccess: '2020-09-23T05:29:36.660Z',
                        startTime: '2020-09-23T05:29:01.924Z',
                        completedTime: '2020-09-23T05:29:12.231Z'
                    },
                    {
                        id: '5f6606f5203dc36cbb53250e',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: '1',
                                answer: '3'
                            }
                        ],
                        name: 'first',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                isAnswered: true,
                                answer: '2'
                            }
                        ],
                        contentId: '5f6606f5203dc36cbb53250e',
                        lastAccess: '2020-09-23T05:29:38.298Z',
                        startTime: '2020-09-23T05:29:13.850Z',
                        completedTime: '2020-09-23T05:29:19.498Z'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fdc',
                startTime: '2020-09-23T05:28:41.963Z',
                completedTime: '2020-09-23T05:29:19.502Z'
            },
            {
                id: '5f48c61811bb0f43daa39fe0',
                timeRequired: 50,
                isMandatory: true,
                isDeleted: false,
                name: 'Website Optimisation',
                status: 'INPROGRESS',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fe1',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '765f019f-d154-44e5-880d-d5147e82fb1d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe1',
                        lastAccess: '2020-09-23T05:29:39.160Z',
                        startTime: '2020-09-23T05:29:20.966Z',
                        completedTime: '2020-09-23T05:29:30.186Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fe2',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '59272f17-01b1-46be-8b97-6d76cda9a671.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/59272f17-01b1-46be-8b97-6d76cda9a671.pdf'
                        },
                        quizQuestions: [],
                        name: 'Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'STARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe2',
                        lastAccess: '2020-09-23T05:29:30.294Z',
                        startTime: '2020-09-23T05:29:30.294Z'
                    },
                    {
                        id: '5f6305eabba7f00194548093',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305eabba7f00194548094',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'test',
                                answer: '2'
                            }
                        ],
                        name: 'test',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6305eabba7f00194548094',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6305eabba7f00194548093'
                    },
                    {
                        id: '5f74ca1b96153e535c1d010e',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'c4acebcf-e327-4828-aa71-c3632b0287f3.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Video',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f74ca1b96153e535c1d010e'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fe0',
                startTime: '2020-09-23T05:29:20.961Z'
            }
        ]
    },
    {
        purchasedOn: '2020-09-23T06:58:57.303Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: 'Confidence code - your gateway to success',
            slug: 'etiquette-and-grooming-for-professional-success',
            _id: '5f54959f54732d0d7e2412c0',
            currentPrice: 499,
            currentDiscount: 20,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'Hindi',
            offerText: '!!! Limited time offer',
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/91154c22-c62a-40c3-94a2-403936188dec.jpeg'
        },
        completedChapters: [
            {
                id: '5f549d4154732d0d7e2412dd',
                timeRequired: 15,
                isMandatory: true,
                isDeleted: false,
                name: 'Kya hai Confidence?',
                status: 'INPROGRESS',
                isCompleted: false,
                _id: '5f6af2315002ef0cf752406b',
                completedContent: [
                    {
                        id: '5f549d4154732d0d7e2412de',
                        timeRequired: 124,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '8f5ae16e-ec3a-4134-85c5-4d7e4d0cb5ab.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0.931912,
                        status: 'STARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf752406c',
                        quizAnswers: [],
                        contentId: '5f549d4154732d0d7e2412de',
                        lastAccess: '2021-04-16T11:52:54.025Z',
                        startTime: '2020-11-24T08:04:36.791Z'
                    },
                    {
                        id: '5f54c11554732d0d7e241312',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: 'c9d105ff-9e61-466a-84a9-e9025426ea48.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence: why do you need it?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf752406d',
                        quizAnswers: [],
                        contentId: '5f54c11554732d0d7e241312'
                    },
                    {
                        id: '5f54c3b454732d0d7e24133e',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8b0c82cf-fc09-4a02-9322-c0a898fe4218.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Why am I doing this?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf752406e',
                        quizAnswers: [],
                        contentId: '5f54c3b454732d0d7e24133e'
                    },
                    {
                        id: '5f54c2b954732d0d7e241326',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'bc258917-fa04-4046-b58c-b88b92b2e720.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'What this course is really?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf752406f',
                        quizAnswers: [],
                        contentId: '5f54c2b954732d0d7e241326'
                    },
                    {
                        id: '5f54c72f54732d0d7e24135a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '38d352e7-4434-463a-a9c9-7f09720c289f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'How should you take this course?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf7524070',
                        quizAnswers: [],
                        contentId: '5f54c72f54732d0d7e24135a'
                    },
                    {
                        id: '5f54cc9f54732d0d7e24137a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '6c005375-4bbd-4f77-bdb5-882c63586d83.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence code - your panacea',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf7524071',
                        quizAnswers: [],
                        contentId: '5f54cc9f54732d0d7e24137a'
                    }
                ],
                chapterId: '5f549d4154732d0d7e2412dd',
                startTime: '2020-11-24T08:04:36.791Z'
            },
            {
                id: '5f54d24554732d0d7e24139e',
                timeRequired: 20,
                isMandatory: true,
                isDeleted: false,
                name: 'Genesis of confidence and Self-esteem',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '5f6af2315002ef0cf7524072',
                completedContent: [
                    {
                        id: '5f54d24554732d0d7e24139f',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '085dd1c0-2291-4c2c-b3d2-84c4fdc833c7.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Six Structures of Life - Upbringing',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf7524073',
                        quizAnswers: [],
                        contentId: '5f54d24554732d0d7e24139f'
                    },
                    {
                        id: '5f55194154732d0d7e2413f4',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'badf976b-a086-44fc-90d4-d510a405d0d2.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/badf976b-a086-44fc-90d4-d510a405d0d2.pdf'
                        },
                        quizQuestions: [],
                        type: 'PDF',
                        name: 'Find your ideal',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf7524074',
                        quizAnswers: [],
                        contentId: '5f55194154732d0d7e2413f4'
                    },
                    {
                        id: '5f577f8983bedb0f21f64513',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'b2124fb5-ab8d-4464-96f1-7858d11043d1.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Appearance',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf7524075',
                        quizAnswers: [],
                        contentId: '5f577f8983bedb0f21f64513'
                    },
                    {
                        id: '5f5b74365bc1e375796e1d3a',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf'
                        },
                        quizQuestions: [],
                        name: 'Appearance action plan',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f6af2315002ef0cf7524076',
                        quizAnswers: [],
                        contentId: '5f5b74365bc1e375796e1d3a'
                    }
                ],
                chapterId: '5f54d24554732d0d7e24139e'
            }
        ]
    },
    {
        purchasedOn: '2020-12-29T10:52:13.949Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Full stack development using react, node and mongo DB',
            slug: 'the-art-of-networking',
            _id: '5f60e1e29c8529432e7ff351',
            currentPrice: 1400,
            currentDiscount: 80,
            category: 'Software Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/8c1e5f6b-3b61-457a-938d-398714fa6284.jpeg'
        },
        completedChapters: [
            {
                id: '5f60e1e29c8529432e7ff352',
                timeRequired: 3000,
                isMandatory: true,
                isDeleted: false,
                name: 'Java Script Basics',
                status: 'NOTSTARTED',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f60e1e29c8529432e7ff353',
                        timeRequired: 300,
                        isDownloadable: true,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: 'df402050-6222-4f63-8763-2cdf28ecfcdd.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f60e1e29c8529432e7ff354',
                                options: [
                                    {
                                        option: 'Map'
                                    },
                                    {
                                        option: 'forEach'
                                    }
                                ],
                                question: 'Which one would be more efficient to use in case of arrays',
                                answer: 'map'
                            }
                        ],
                        name: 'Array Methods',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f60e1e29c8529432e7ff354',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f60e1e29c8529432e7ff353'
                    },
                    {
                        id: '5f60e1e29c8529432e7ff355',
                        timeRequired: 300,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'fb858721-ec4d-401d-8938-8bd54659d972.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f6684ddd4c3e9783ac6b26f',
                                options: [],
                                question: 'What is an object',
                                answer: 'object is {} '
                            }
                        ],
                        name: 'Objects',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6684ddd4c3e9783ac6b26f',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f60e1e29c8529432e7ff355'
                    },
                    {
                        id: '5f65f0c0108bbf2a5654310d',
                        timeRequired: 180,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f65f0c0108bbf2a5654310e',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: '2',
                                answer: '5'
                            }
                        ],
                        name: '2',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f65f0c0108bbf2a5654310e',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f65f0c0108bbf2a5654310d'
                    }
                ],
                chapterId: '5f60e1e29c8529432e7ff352'
            },
            {
                id: '5f60e1e29c8529432e7ff356',
                timeRequired: 5940,
                isMandatory: true,
                isDeleted: false,
                name: 'React',
                status: 'NOTSTARTED',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f64c88c108bbf2a56542f4c',
                        timeRequired: 120,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '40b752e1-a062-4df8-b156-2bf5267f9df3.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/files/40b752e1-a062-4df8-b156-2bf5267f9df3.pdf'
                        },
                        quizQuestions: [],
                        name: 'kk',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f64c88c108bbf2a56542f4c'
                    },
                    {
                        id: '5f60e1e29c8529432e7ff357',
                        timeRequired: 3600,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '36650889-4ae7-42a3-9e46-f8af0df96c06.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'REACT WITH REDUX',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f60e1e29c8529432e7ff357'
                    },
                    {
                        id: '5f6a4a87941d1142b4d6f11a',
                        timeRequired: 60,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6a4a87941d1142b4d6f11b',
                                options: [
                                    {
                                        option: 'wwe'
                                    },
                                    {
                                        option: 'ee'
                                    }
                                ],
                                question: 'wewe',
                                answer: 'wwe'
                            }
                        ],
                        name: 'hello',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6a4a87941d1142b4d6f11b',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6a4a87941d1142b4d6f11a'
                    }
                ],
                chapterId: '5f60e1e29c8529432e7ff356'
            }
        ]
    },
    {
        purchasedOn: '2020-12-29T20:48:58.900Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Course Name',
            slug: 'course-name',
            _id: '5f68fac9941d1142b4d6e21e',
            currentPrice: 0,
            currentDiscount: 0,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'NA',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/20dce65a-e98c-4e1c-a63d-68df40551e6a.jpeg'
        },
        completedChapters: []
    },
    {
        purchasedOn: '2020-12-29T20:52:46.931Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Software Development',
            slug: 'master-conversations-at-workplace',
            _id: '5f6688e9d4c3e9783ac6b573',
            currentPrice: 200,
            currentDiscount: 50,
            category: 'Personal Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/8f6e95f9-0868-4993-9301-020f9996ad42.jpeg'
        },
        completedChapters: [
            {
                id: '5f6688e9d4c3e9783ac6b574',
                timeRequired: 3600,
                isMandatory: true,
                isDeleted: false,
                name: 'Java Script Basics',
                status: 'NOTSTARTED',
                isCompleted: false,
                chapterId: '5f6688e9d4c3e9783ac6b574',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b575',
                        timeRequired: 3600,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '502fbbf6-8e97-4dcc-b002-085d0c78b23f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                options: [
                                    {
                                        option: 'Map'
                                    },
                                    {
                                        option: 'forEach'
                                    }
                                ],
                                question: 'Which one would be more efficient to use in case of arrays',
                                answer: 'map'
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                options: [],
                                question: 'what is array ',
                                answer: 'array is a collection '
                            }
                        ],
                        name: 'Array Methods',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f6688e9d4c3e9783ac6b575',
                        quizAnswers: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                isAnswered: false,
                                answer: ''
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                isAnswered: false,
                                answer: ''
                            }
                        ]
                    }
                ]
            },
            {
                id: '5f6688e9d4c3e9783ac6b578',
                timeRequired: 240,
                isMandatory: true,
                isDeleted: false,
                name: 'React',
                status: 'NOTSTARTED',
                isCompleted: false,
                chapterId: '5f6688e9d4c3e9783ac6b578',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b579',
                        timeRequired: 1200,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '669ff059-33db-41b4-b6b2-034fc0914103.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'REACT WITH REDUX',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f6688e9d4c3e9783ac6b579',
                        quizAnswers: []
                    }
                ]
            }
        ]
    }
];

const mockDeepak = [
    {
        purchasedOn: '2020-09-07T05:42:15.862Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: 'Confidence code - your gateway to success',
            slug: 'etiquette-and-grooming-for-professional-success',
            _id: '5f54959f54732d0d7e2412c0',
            currentPrice: 499,
            currentDiscount: 20,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'Hindi',
            offerText: '!!! Limited time offer',
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/91154c22-c62a-40c3-94a2-403936188dec.jpeg'
        },
        completedChapters: [
            {
                id: '5f549d4154732d0d7e2412dd',
                timeRequired: 15,
                isMandatory: true,
                isDeleted: false,
                name: 'Kya hai Confidence?',
                status: 'COMPLETED',
                isCompleted: true,
                _id: '5f5f3dd915b3b369c107f12e',
                completedContent: [
                    {
                        id: '5f549d4154732d0d7e2412de',
                        timeRequired: 124,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '8f5ae16e-ec3a-4134-85c5-4d7e4d0cb5ab.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        _id: '5f5f3dd915b3b369c107f12f',
                        quizAnswers: [],
                        contentId: '5f549d4154732d0d7e2412de',
                        lastAccess: '2020-09-10T12:07:39.998Z',
                        startTime: '2020-09-07T05:48:55.483Z',
                        completedTime: '2020-09-10T12:07:39.995Z'
                    },
                    {
                        id: '5f54c11554732d0d7e241312',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: 'c9d105ff-9e61-466a-84a9-e9025426ea48.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence: why do you need it?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        _id: '5f5f3dd915b3b369c107f130',
                        quizAnswers: [],
                        contentId: '5f54c11554732d0d7e241312',
                        lastAccess: '2020-09-12T10:42:17.155Z',
                        startTime: '2020-09-10T12:07:40.071Z',
                        completedTime: '2020-09-12T10:42:17.153Z'
                    },
                    {
                        id: '5f54c3b454732d0d7e24133e',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8b0c82cf-fc09-4a02-9322-c0a898fe4218.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Why am I doing this?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        _id: '5f5f3dd915b3b369c107f132',
                        quizAnswers: [],
                        contentId: '5f54c3b454732d0d7e24133e',
                        lastAccess: '2020-09-12T10:44:15.847Z',
                        startTime: '2020-09-12T10:43:14.801Z',
                        completedTime: '2020-09-12T10:44:15.845Z'
                    },
                    {
                        id: '5f54c2b954732d0d7e241326',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'bc258917-fa04-4046-b58c-b88b92b2e720.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'What this course is really?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        _id: '5f5f3dd915b3b369c107f131',
                        quizAnswers: [],
                        contentId: '5f54c2b954732d0d7e241326',
                        lastAccess: '2020-09-12T10:43:14.719Z',
                        startTime: '2020-09-12T10:42:17.233Z',
                        completedTime: '2020-09-12T10:43:14.717Z'
                    },
                    {
                        id: '5f54c72f54732d0d7e24135a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '38d352e7-4434-463a-a9c9-7f09720c289f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'How should you take this course?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        _id: '5f5f3dd915b3b369c107f133',
                        quizAnswers: [],
                        contentId: '5f54c72f54732d0d7e24135a',
                        lastAccess: '2020-09-12T10:45:17.140Z',
                        startTime: '2020-09-12T10:44:15.926Z',
                        completedTime: '2020-09-12T10:45:17.138Z'
                    },
                    {
                        id: '5f54cc9f54732d0d7e24137a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '6c005375-4bbd-4f77-bdb5-882c63586d83.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence code - your panacea',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        _id: '5f5f3dd915b3b369c107f134',
                        quizAnswers: [],
                        contentId: '5f54cc9f54732d0d7e24137a',
                        lastAccess: '2020-09-12T10:45:57.141Z',
                        startTime: '2020-09-12T10:45:17.219Z',
                        completedTime: '2020-09-12T10:45:57.139Z'
                    }
                ],
                chapterId: '5f549d4154732d0d7e2412dd',
                startTime: '2020-09-07T05:48:55.476Z',
                completedTime: '2020-09-12T10:45:57.143Z'
            },
            {
                id: '5f54d24554732d0d7e24139e',
                timeRequired: 20,
                isMandatory: true,
                isDeleted: false,
                name: 'Genesis of confidence and Self-esteem',
                status: 'INPROGRESS',
                isCompleted: false,
                _id: '5f5f3dd915b3b369c107f135',
                completedContent: [
                    {
                        id: '5f54d24554732d0d7e24139f',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '085dd1c0-2291-4c2c-b3d2-84c4fdc833c7.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Six Structures of Life - Upbringing',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        _id: '5f5f3dd915b3b369c107f136',
                        quizAnswers: [],
                        contentId: '5f54d24554732d0d7e24139f',
                        lastAccess: '2020-09-14T09:30:49.806Z',
                        startTime: '2020-09-12T10:45:57.241Z',
                        completedTime: '2020-09-12T10:48:08.053Z'
                    },
                    {
                        id: '5f55194154732d0d7e2413f4',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'badf976b-a086-44fc-90d4-d510a405d0d2.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/badf976b-a086-44fc-90d4-d510a405d0d2.pdf'
                        },
                        quizQuestions: [],
                        type: 'PDF',
                        name: 'Find your ideal',
                        timestamp: 0,
                        status: 'STARTED',
                        isCompleted: false,
                        _id: '5f5f3dd915b3b369c107f137',
                        quizAnswers: [],
                        contentId: '5f55194154732d0d7e2413f4',
                        lastAccess: '2020-09-14T09:27:38.094Z',
                        startTime: '2020-09-12T10:48:08.218Z'
                    },
                    {
                        id: '5f577f8983bedb0f21f64513',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'b2124fb5-ab8d-4464-96f1-7858d11043d1.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Appearance',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f5f3dd915b3b369c107f12c',
                        quizAnswers: [],
                        contentId: '5f577f8983bedb0f21f64513'
                    },
                    {
                        id: '5f5b74365bc1e375796e1d3a',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf'
                        },
                        quizQuestions: [],
                        name: 'Appearance action plan',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '5f5f3dd915b3b369c107f12d',
                        quizAnswers: [],
                        contentId: '5f5b74365bc1e375796e1d3a'
                    }
                ],
                chapterId: '5f54d24554732d0d7e24139e',
                startTime: '2020-09-12T10:45:57.237Z'
            }
        ]
    },
    {
        purchasedOn: '2021-04-04T08:11:55.020Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: 'Software Development',
            slug: 'master-conversations-at-workplace',
            _id: '5f6688e9d4c3e9783ac6b573',
            currentPrice: 200,
            currentDiscount: 50,
            category: 'Personal Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/8f6e95f9-0868-4993-9301-020f9996ad42.jpeg'
        },
        completedChapters: [
            {
                id: '5f6688e9d4c3e9783ac6b574',
                timeRequired: 3600,
                isMandatory: true,
                isDeleted: false,
                name: 'Java Script Basics',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '606974cbb9143d191dadc2c5',
                chapterId: '5f6688e9d4c3e9783ac6b574',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b575',
                        timeRequired: 3600,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '502fbbf6-8e97-4dcc-b002-085d0c78b23f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                options: [
                                    {
                                        option: 'Map'
                                    },
                                    {
                                        option: 'forEach'
                                    }
                                ],
                                question: 'Which one would be more efficient to use in case of arrays',
                                answer: 'map'
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                options: [],
                                question: 'what is array ',
                                answer: 'array is a collection '
                            }
                        ],
                        name: 'Array Methods',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '606974cbb9143d191dadc2c6',
                        contentId: '5f6688e9d4c3e9783ac6b575',
                        quizAnswers: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                isAnswered: false,
                                _id: '606974cbb9143d191dadc2c8',
                                answer: ''
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                isAnswered: false,
                                _id: '606974cbb9143d191dadc2ca',
                                answer: ''
                            }
                        ]
                    }
                ]
            },
            {
                id: '5f6688e9d4c3e9783ac6b578',
                timeRequired: 240,
                isMandatory: true,
                isDeleted: false,
                name: 'React',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '606974cbb9143d191dadc2cb',
                chapterId: '5f6688e9d4c3e9783ac6b578',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b579',
                        timeRequired: 1200,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '669ff059-33db-41b4-b6b2-034fc0914103.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'REACT WITH REDUX',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '606974cbb9143d191dadc2cc',
                        contentId: '5f6688e9d4c3e9783ac6b579',
                        quizAnswers: []
                    }
                ]
            }
        ]
    },
    {
        purchasedOn: '2021-04-04T08:19:10.280Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: "effective communication your 'career-hacker'",
            slug: "effective-communication-your-'career-hacker'",
            _id: '5f48c61811bb0f43daa39fdb',
            currentPrice: 6000,
            currentDiscount: 95.01,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/4416e389-958e-4937-8a87-0a727c0ba7de.jpeg'
        },
        completedChapters: [
            {
                id: '5f48c61811bb0f43daa39fdc',
                timeRequired: 60,
                isMandatory: true,
                isDeleted: false,
                name: 'Introduction to Digital Marketing',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '6069767eb9143d191dadc383',
                chapterId: '5f48c61811bb0f43daa39fdc',
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fdd',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '14808107-c561-4694-87fb-bf3299229e8d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction to website',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc384',
                        contentId: '5f48c61811bb0f43daa39fdd',
                        quizAnswers: []
                    },
                    {
                        id: '5f48c61811bb0f43daa39fde',
                        timeRequired: 40,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8f201dc5-de23-4b9c-a306-07b011c265e6.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: '3 : The general plan',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc385',
                        contentId: '5f48c61811bb0f43daa39fde',
                        quizAnswers: []
                    },
                    {
                        id: '5f48c61811bb0f43daa39fdf',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '7448bffa-2ee4-417b-9de2-cea4d613112e.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/7448bffa-2ee4-417b-9de2-cea4d613112e.pdf'
                        },
                        quizQuestions: [],
                        name: 'Website Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc386',
                        contentId: '5f48c61811bb0f43daa39fdf',
                        quizAnswers: []
                    },
                    {
                        id: '5f6305bebba7f00194547f73',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                options: [
                                    {
                                        option: '1'
                                    },
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'Question 1',
                                answer: '3'
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                options: [
                                    {
                                        option: 'true'
                                    },
                                    {
                                        option: 'false'
                                    }
                                ],
                                question: 'question 2',
                                answer: 'true'
                            }
                        ],
                        name: 'quiz',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc387',
                        contentId: '5f6305bebba7f00194547f73',
                        quizAnswers: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                isAnswered: false,
                                _id: '6069767eb9143d191dadc389',
                                answer: ''
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                isAnswered: false,
                                _id: '6069767eb9143d191dadc38b',
                                answer: ''
                            }
                        ]
                    },
                    {
                        id: '5f6606f5203dc36cbb53250e',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: '1',
                                answer: '3'
                            }
                        ],
                        name: 'first',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc38c',
                        contentId: '5f6606f5203dc36cbb53250e',
                        quizAnswers: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                isAnswered: false,
                                _id: '6069767eb9143d191dadc38e',
                                answer: ''
                            }
                        ]
                    }
                ]
            },
            {
                id: '5f48c61811bb0f43daa39fe0',
                timeRequired: 50,
                isMandatory: true,
                isDeleted: false,
                name: 'Website Optimisation',
                status: 'NOTSTARTED',
                isCompleted: false,
                _id: '6069767eb9143d191dadc38f',
                chapterId: '5f48c61811bb0f43daa39fe0',
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fe1',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '765f019f-d154-44e5-880d-d5147e82fb1d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc390',
                        contentId: '5f48c61811bb0f43daa39fe1',
                        quizAnswers: []
                    },
                    {
                        id: '5f48c61811bb0f43daa39fe2',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '59272f17-01b1-46be-8b97-6d76cda9a671.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/59272f17-01b1-46be-8b97-6d76cda9a671.pdf'
                        },
                        quizQuestions: [],
                        name: 'Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc391',
                        contentId: '5f48c61811bb0f43daa39fe2',
                        quizAnswers: []
                    },
                    {
                        id: '5f6305eabba7f00194548093',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305eabba7f00194548094',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'test',
                                answer: '2'
                            }
                        ],
                        name: 'test',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc392',
                        contentId: '5f6305eabba7f00194548093',
                        quizAnswers: [
                            {
                                id: '5f6305eabba7f00194548094',
                                isAnswered: false,
                                _id: '6069767eb9143d191dadc394',
                                answer: ''
                            }
                        ]
                    },
                    {
                        id: '5f74ca1b96153e535c1d010e',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'c4acebcf-e327-4828-aa71-c3632b0287f3.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Video',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        _id: '6069767eb9143d191dadc395',
                        contentId: '5f74ca1b96153e535c1d010e',
                        quizAnswers: []
                    }
                ]
            }
        ]
    }
];

const mock2 = [
    {
        purchasedOn: '2020-08-28T08:55:08.347Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: "effective communication your 'career-hacker'",
            slug: "effective-communication-your-'career-hacker'",
            _id: '5f48c61811bb0f43daa39fdb',
            currentPrice: 6000,
            currentDiscount: 95.01,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/4416e389-958e-4937-8a87-0a727c0ba7de.jpeg'
        },
        completedChapters: [
            {
                id: '5f48c61811bb0f43daa39fdc',
                timeRequired: 60,
                isMandatory: true,
                isDeleted: false,
                name: 'Introduction to Digital Marketing',
                status: 'COMPLETED',
                isCompleted: true,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fdd',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '14808107-c561-4694-87fb-bf3299229e8d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction to website',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdd',
                        lastAccess: '2020-08-31T16:14:09.842Z',
                        startTime: '2020-08-28T08:55:14.674Z',
                        completedTime: '2020-08-28T08:55:51.171Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fde',
                        timeRequired: 40,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8f201dc5-de23-4b9c-a306-07b011c265e6.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: '3 : The general plan',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fde',
                        lastAccess: '2020-08-30T05:49:54.224Z',
                        startTime: '2020-08-28T08:55:51.381Z',
                        completedTime: '2020-08-28T20:35:56.587Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fdf',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '7448bffa-2ee4-417b-9de2-cea4d613112e.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/7448bffa-2ee4-417b-9de2-cea4d613112e.pdf'
                        },
                        quizQuestions: [],
                        name: 'Website Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdf',
                        lastAccess: '2020-08-30T05:49:57.118Z',
                        startTime: '2020-08-28T20:35:56.700Z',
                        completedTime: '2020-08-28T20:36:26.517Z'
                    },
                    {
                        id: '5f6305bebba7f00194547f73',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                options: [
                                    {
                                        option: '1'
                                    },
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'Question 1',
                                answer: '3'
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                options: [
                                    {
                                        option: 'true'
                                    },
                                    {
                                        option: 'false'
                                    }
                                ],
                                question: 'question 2',
                                answer: 'true'
                            }
                        ],
                        name: 'quiz',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                isAnswered: false,
                                answer: ''
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6305bebba7f00194547f73'
                    },
                    {
                        id: '5f6606f5203dc36cbb53250e',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: '1',
                                answer: '3'
                            }
                        ],
                        name: 'first',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6606f5203dc36cbb53250e'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fdc',
                startTime: '2020-08-28T08:55:14.638Z',
                completedTime: '2020-08-28T20:36:26.522Z'
            },
            {
                id: '5f48c61811bb0f43daa39fe0',
                timeRequired: 50,
                isMandatory: true,
                isDeleted: false,
                name: 'Website Optimisation',
                status: 'INPROGRESS',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fe1',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '765f019f-d154-44e5-880d-d5147e82fb1d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe1',
                        lastAccess: '2020-08-28T20:36:58.185Z',
                        startTime: '2020-08-28T20:36:26.630Z',
                        completedTime: '2020-08-28T20:36:34.819Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fe2',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '59272f17-01b1-46be-8b97-6d76cda9a671.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/59272f17-01b1-46be-8b97-6d76cda9a671.pdf'
                        },
                        quizQuestions: [],
                        name: 'Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'STARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe2',
                        lastAccess: '2020-08-28T20:36:34.923Z',
                        startTime: '2020-08-28T20:36:34.923Z'
                    },
                    {
                        id: '5f6305eabba7f00194548093',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305eabba7f00194548094',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'test',
                                answer: '2'
                            }
                        ],
                        name: 'test',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6305eabba7f00194548094',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6305eabba7f00194548093'
                    },
                    {
                        id: '5f74ca1b96153e535c1d010e',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'c4acebcf-e327-4828-aa71-c3632b0287f3.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Video',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f74ca1b96153e535c1d010e'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fe0',
                startTime: '2020-08-28T20:36:26.626Z'
            }
        ]
    },
    {
        purchasedOn: '2020-12-29T09:22:21.096Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Confidence code - your gateway to success',
            slug: 'etiquette-and-grooming-for-professional-success',
            _id: '5f54959f54732d0d7e2412c0',
            currentPrice: 499,
            currentDiscount: 20,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'Hindi',
            offerText: '!!! Limited time offer',
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/91154c22-c62a-40c3-94a2-403936188dec.jpeg'
        },
        completedChapters: [
            {
                id: '5f549d4154732d0d7e2412dd',
                timeRequired: 15,
                isMandatory: true,
                isDeleted: false,
                name: 'Kya hai Confidence?',
                status: 'NOTSTARTED',
                isCompleted: false,
                chapterId: '5f549d4154732d0d7e2412dd',
                completedContent: [
                    {
                        id: '5f549d4154732d0d7e2412de',
                        timeRequired: 124,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '8f5ae16e-ec3a-4134-85c5-4d7e4d0cb5ab.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f549d4154732d0d7e2412de',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c11554732d0d7e241312',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: 'c9d105ff-9e61-466a-84a9-e9025426ea48.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence: why do you need it?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f54c11554732d0d7e241312',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c3b454732d0d7e24133e',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8b0c82cf-fc09-4a02-9322-c0a898fe4218.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Why am I doing this?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f54c3b454732d0d7e24133e',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c2b954732d0d7e241326',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'bc258917-fa04-4046-b58c-b88b92b2e720.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'What this course is really?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f54c2b954732d0d7e241326',
                        quizAnswers: []
                    },
                    {
                        id: '5f54c72f54732d0d7e24135a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '38d352e7-4434-463a-a9c9-7f09720c289f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'How should you take this course?',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f54c72f54732d0d7e24135a',
                        quizAnswers: []
                    },
                    {
                        id: '5f54cc9f54732d0d7e24137a',
                        timeRequired: 100,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '6c005375-4bbd-4f77-bdb5-882c63586d83.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Confidence code - your panacea',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f54cc9f54732d0d7e24137a',
                        quizAnswers: []
                    }
                ]
            },
            {
                id: '5f54d24554732d0d7e24139e',
                timeRequired: 20,
                isMandatory: true,
                isDeleted: false,
                name: 'Genesis of confidence and Self-esteem',
                status: 'NOTSTARTED',
                isCompleted: false,
                chapterId: '5f54d24554732d0d7e24139e',
                completedContent: [
                    {
                        id: '5f54d24554732d0d7e24139f',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: '085dd1c0-2291-4c2c-b3d2-84c4fdc833c7.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Six Structures of Life - Upbringing',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f54d24554732d0d7e24139f',
                        quizAnswers: []
                    },
                    {
                        id: '5f55194154732d0d7e2413f4',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'badf976b-a086-44fc-90d4-d510a405d0d2.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/badf976b-a086-44fc-90d4-d510a405d0d2.pdf'
                        },
                        quizQuestions: [],
                        type: 'PDF',
                        name: 'Find your ideal',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f55194154732d0d7e2413f4',
                        quizAnswers: []
                    },
                    {
                        id: '5f577f8983bedb0f21f64513',
                        timeRequired: 110,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'b2124fb5-ab8d-4464-96f1-7858d11043d1.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Appearance',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f577f8983bedb0f21f64513',
                        quizAnswers: []
                    },
                    {
                        id: '5f5b74365bc1e375796e1d3a',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/ecc48102-2ffa-43bd-8f56-26c72661f9ba.pdf'
                        },
                        quizQuestions: [],
                        name: 'Appearance action plan',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f5b74365bc1e375796e1d3a',
                        quizAnswers: []
                    }
                ]
            }
        ]
    },
    {
        purchasedOn: '2020-12-29T10:52:13.989Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Full stack development using react, node and mongo DB',
            slug: 'the-art-of-networking',
            _id: '5f60e1e29c8529432e7ff351',
            currentPrice: 1400,
            currentDiscount: 80,
            category: 'Software Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/8c1e5f6b-3b61-457a-938d-398714fa6284.jpeg'
        },
        completedChapters: [
            {
                id: '5f60e1e29c8529432e7ff352',
                timeRequired: 3000,
                isMandatory: true,
                isDeleted: false,
                name: 'Java Script Basics',
                status: 'NOTSTARTED',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f60e1e29c8529432e7ff353',
                        timeRequired: 300,
                        isDownloadable: true,
                        isUnlocked: true,
                        isDeleted: false,
                        file: {
                            name: 'df402050-6222-4f63-8763-2cdf28ecfcdd.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f60e1e29c8529432e7ff354',
                                options: [
                                    {
                                        option: 'Map'
                                    },
                                    {
                                        option: 'forEach'
                                    }
                                ],
                                question: 'Which one would be more efficient to use in case of arrays',
                                answer: 'map'
                            }
                        ],
                        name: 'Array Methods',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f60e1e29c8529432e7ff354',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f60e1e29c8529432e7ff353'
                    },
                    {
                        id: '5f60e1e29c8529432e7ff355',
                        timeRequired: 300,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'fb858721-ec4d-401d-8938-8bd54659d972.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f6684ddd4c3e9783ac6b26f',
                                options: [],
                                question: 'What is an object',
                                answer: 'object is {} '
                            }
                        ],
                        name: 'Objects',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6684ddd4c3e9783ac6b26f',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f60e1e29c8529432e7ff355'
                    },
                    {
                        id: '5f65f0c0108bbf2a5654310d',
                        timeRequired: 180,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f65f0c0108bbf2a5654310e',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: '2',
                                answer: '5'
                            }
                        ],
                        name: '2',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f65f0c0108bbf2a5654310e',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f65f0c0108bbf2a5654310d'
                    }
                ],
                chapterId: '5f60e1e29c8529432e7ff352'
            },
            {
                id: '5f60e1e29c8529432e7ff356',
                timeRequired: 5940,
                isMandatory: true,
                isDeleted: false,
                name: 'React',
                status: 'NOTSTARTED',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f64c88c108bbf2a56542f4c',
                        timeRequired: 120,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '40b752e1-a062-4df8-b156-2bf5267f9df3.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/files/40b752e1-a062-4df8-b156-2bf5267f9df3.pdf'
                        },
                        quizQuestions: [],
                        name: 'kk',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f64c88c108bbf2a56542f4c'
                    },
                    {
                        id: '5f60e1e29c8529432e7ff357',
                        timeRequired: 3600,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '36650889-4ae7-42a3-9e46-f8af0df96c06.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'REACT WITH REDUX',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f60e1e29c8529432e7ff357'
                    },
                    {
                        id: '5f6a4a87941d1142b4d6f11a',
                        timeRequired: 60,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6a4a87941d1142b4d6f11b',
                                options: [
                                    {
                                        option: 'wwe'
                                    },
                                    {
                                        option: 'ee'
                                    }
                                ],
                                question: 'wewe',
                                answer: 'wwe'
                            }
                        ],
                        name: 'hello',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6a4a87941d1142b4d6f11b',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6a4a87941d1142b4d6f11a'
                    }
                ],
                chapterId: '5f60e1e29c8529432e7ff356'
            }
        ]
    },
    {
        purchasedOn: '2020-12-29T20:48:58.921Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Course Name',
            slug: 'course-name',
            _id: '5f68fac9941d1142b4d6e21e',
            currentPrice: 0,
            currentDiscount: 0,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'NA',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/20dce65a-e98c-4e1c-a63d-68df40551e6a.jpeg'
        },
        completedChapters: []
    },
    {
        purchasedOn: '2020-12-29T20:52:46.961Z',
        status: true,
        isCompleted: false,
        isPaidCourse: false,
        course: {
            name: 'Software Development',
            slug: 'master-conversations-at-workplace',
            _id: '5f6688e9d4c3e9783ac6b573',
            currentPrice: 200,
            currentDiscount: 50,
            category: 'Personal Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/files/8f6e95f9-0868-4993-9301-020f9996ad42.jpeg'
        },
        completedChapters: [
            {
                id: '5f6688e9d4c3e9783ac6b574',
                timeRequired: 3600,
                isMandatory: true,
                isDeleted: false,
                name: 'Java Script Basics',
                status: 'NOTSTARTED',
                isCompleted: false,
                chapterId: '5f6688e9d4c3e9783ac6b574',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b575',
                        timeRequired: 3600,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '502fbbf6-8e97-4dcc-b002-085d0c78b23f.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                options: [
                                    {
                                        option: 'Map'
                                    },
                                    {
                                        option: 'forEach'
                                    }
                                ],
                                question: 'Which one would be more efficient to use in case of arrays',
                                answer: 'map'
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                options: [],
                                question: 'what is array ',
                                answer: 'array is a collection '
                            }
                        ],
                        name: 'Array Methods',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f6688e9d4c3e9783ac6b575',
                        quizAnswers: [
                            {
                                id: '5f6688e9d4c3e9783ac6b576',
                                isAnswered: false,
                                answer: ''
                            },
                            {
                                id: '5f6688e9d4c3e9783ac6b577',
                                isAnswered: false,
                                answer: ''
                            }
                        ]
                    }
                ]
            },
            {
                id: '5f6688e9d4c3e9783ac6b578',
                timeRequired: 240,
                isMandatory: true,
                isDeleted: false,
                name: 'React',
                status: 'NOTSTARTED',
                isCompleted: false,
                chapterId: '5f6688e9d4c3e9783ac6b578',
                completedContent: [
                    {
                        id: '5f6688e9d4c3e9783ac6b579',
                        timeRequired: 1200,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '669ff059-33db-41b4-b6b2-034fc0914103.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'REACT WITH REDUX',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        contentId: '5f6688e9d4c3e9783ac6b579',
                        quizAnswers: []
                    }
                ]
            }
        ]
    }
];
const mock = [
    {
        purchasedOn: '2020-08-28T08:55:08.347Z',
        status: true,
        isCompleted: false,
        isPaidCourse: true,
        course: {
            name: "effective communication your 'career-hacker'",
            slug: "effective-communication-your-'career-hacker'",
            _id: '5f48c61811bb0f43daa39fdb',
            currentPrice: 6000,
            currentDiscount: 95.01,
            category: 'Development',
            isActive: true,
            isDeleted: false,
            language: 'English',
            offerText: null,
            thumbnail: 'https://d2sjeir9p855li.cloudfront.net/courses/4416e389-958e-4937-8a87-0a727c0ba7de.jpeg'
        },
        completedChapters: [
            {
                id: '5f48c61811bb0f43daa39fdc',
                timeRequired: 60,
                isMandatory: true,
                isDeleted: false,
                name: 'Introduction to Digital Marketing',
                status: 'COMPLETED',
                isCompleted: true,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fdd',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '14808107-c561-4694-87fb-bf3299229e8d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction to website',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdd',
                        lastAccess: '2020-08-31T16:14:09.842Z',
                        startTime: '2020-08-28T08:55:14.674Z',
                        completedTime: '2020-08-28T08:55:51.171Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fde',
                        timeRequired: 40,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '8f201dc5-de23-4b9c-a306-07b011c265e6.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: '3 : The general plan',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fde',
                        lastAccess: '2020-08-30T05:49:54.224Z',
                        startTime: '2020-08-28T08:55:51.381Z',
                        completedTime: '2020-08-28T20:35:56.587Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fdf',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '7448bffa-2ee4-417b-9de2-cea4d613112e.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/7448bffa-2ee4-417b-9de2-cea4d613112e.pdf'
                        },
                        quizQuestions: [],
                        name: 'Website Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fdf',
                        lastAccess: '2020-08-30T05:49:57.118Z',
                        startTime: '2020-08-28T20:35:56.700Z',
                        completedTime: '2020-08-28T20:36:26.517Z'
                    },
                    {
                        id: '5f6305bebba7f00194547f73',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                options: [
                                    {
                                        option: '1'
                                    },
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'Question 1',
                                answer: '3'
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                options: [
                                    {
                                        option: 'true'
                                    },
                                    {
                                        option: 'false'
                                    }
                                ],
                                question: 'question 2',
                                answer: 'true'
                            }
                        ],
                        name: 'quiz',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6305bebba7f00194547f74',
                                isAnswered: false,
                                answer: ''
                            },
                            {
                                id: '5f6305bebba7f00194547f75',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6305bebba7f00194547f73'
                    },
                    {
                        id: '5f6606f5203dc36cbb53250e',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '3'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: '1',
                                answer: '3'
                            }
                        ],
                        name: 'first',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6606f5203dc36cbb53250f',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6606f5203dc36cbb53250e'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fdc',
                startTime: '2020-08-28T08:55:14.638Z',
                completedTime: '2020-08-28T20:36:26.522Z'
            },
            {
                id: '5f48c61811bb0f43daa39fe0',
                timeRequired: 50,
                isMandatory: true,
                isDeleted: false,
                name: 'Website Optimisation',
                status: 'INPROGRESS',
                isCompleted: false,
                completedContent: [
                    {
                        id: '5f48c61811bb0f43daa39fe1',
                        timeRequired: 10,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '765f019f-d154-44e5-880d-d5147e82fb1d.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Introduction',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'COMPLETED',
                        isCompleted: true,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe1',
                        lastAccess: '2020-08-28T20:36:58.185Z',
                        startTime: '2020-08-28T20:36:26.630Z',
                        completedTime: '2020-08-28T20:36:34.819Z'
                    },
                    {
                        id: '5f48c61811bb0f43daa39fe2',
                        timeRequired: 10,
                        isDownloadable: true,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: '59272f17-01b1-46be-8b97-6d76cda9a671.pdf',
                            mimeType: 'application/pdf',
                            path: 'https://d2sjeir9p855li.cloudfront.net/courses/59272f17-01b1-46be-8b97-6d76cda9a671.pdf'
                        },
                        quizQuestions: [],
                        name: 'Document',
                        type: 'PDF',
                        timestamp: 0,
                        status: 'STARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f48c61811bb0f43daa39fe2',
                        lastAccess: '2020-08-28T20:36:34.923Z',
                        startTime: '2020-08-28T20:36:34.923Z'
                    },
                    {
                        id: '5f6305eabba7f00194548093',
                        timeRequired: 120,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        quizQuestions: [
                            {
                                id: '5f6305eabba7f00194548094',
                                options: [
                                    {
                                        option: '2'
                                    },
                                    {
                                        option: '4'
                                    }
                                ],
                                question: 'test',
                                answer: '2'
                            }
                        ],
                        name: 'test',
                        type: 'QUIZ',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [
                            {
                                id: '5f6305eabba7f00194548094',
                                isAnswered: false,
                                answer: ''
                            }
                        ],
                        contentId: '5f6305eabba7f00194548093'
                    },
                    {
                        id: '5f74ca1b96153e535c1d010e',
                        timeRequired: 300,
                        isDownloadable: false,
                        isUnlocked: false,
                        isDeleted: false,
                        file: {
                            name: 'c4acebcf-e327-4828-aa71-c3632b0287f3.mp4',
                            mimeType: 'video/mp4'
                        },
                        quizQuestions: [],
                        name: 'Video',
                        type: 'VIDEO',
                        timestamp: 0,
                        status: 'NOTSTARTED',
                        isCompleted: false,
                        quizAnswers: [],
                        contentId: '5f74ca1b96153e535c1d010e'
                    }
                ],
                chapterId: '5f48c61811bb0f43daa39fe0',
                startTime: '2020-08-28T20:36:26.626Z'
            }
        ]
    }
];
