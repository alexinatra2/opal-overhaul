import {defineStore} from "pinia";
import {ref} from "vue";

export type CourseNode = {
    title: string;
    children?: CourseNode[];
}

type PeriodString = `${"Sommer" | "Winter"}semester ${number | `${number}/${number}`}`;

interface Period {
    detailed?: {
        start?: Date;
        end?: Date;
    };
    label: PeriodString;
}

export interface Course {
    name: string;
    id: string;
    author: string;
    period?: Period;
    desc?: string;
    nodes?: CourseNode[];
}

const initialCourses: Course[] = [
    {
        name: "Kurs 1",
        id: "II-903",
        desc: "Dies ist ein Beispielkurs mit kurzer Beschreibung",
        author: "Prof. Freitag",
        period: {
            label: "Sommersemester 2025",
            detailed: {
                start: new Date("03/03/2025"),
                end: new Date("03/07/2025"),
            }
        },
        nodes: [
            {
                title: "Skript",
                children: [
                    {
                        title: "Teil 1",
                    },
                    {
                        title: "Teil 2",
                    },
                ]
            },
            {
                title: "Aufgaben",
                children: [
                    {
                        title: "Teil 1",
                    },
                    {
                        title: "Teil 2",
                    },
                ]
            },
            {
                title: "Lösungen",
            },
        ]
    },
    {
        name: "Kurs 2",
        id: "II-912",
        desc: "Dies ist ein Beispielkurs mit langer Beschreibung. " +
            "Dies ist ein Beispielkurs mit langer Beschreibung. " +
            "Dies ist ein Beispielkurs mit langer Beschreibung. " +
            "Dies ist ein Beispielkurs mit langer Beschreibung. " +
            "Dies ist ein Beispielkurs mit langer Beschreibung." +
            "Dies ist ein Beispielkurs mit langer Beschreibung." +
            "Dies ist ein Beispielkurs mit langer Beschreibung.",
        author: "Prof. Hollas",
    },
    {
        name: "Kurs 3",
        id: "II-1023",
        author: "Prof. Thiele",
    },
];

const initialEnrolled: string[] = [];

const useCoursesStore = defineStore("courses", () => {
    const courses = ref(initialCourses);
    const enrolled = ref(initialEnrolled);
    const toggleEnrolment = (courseId: string) => {
        const enrolCourse = courses.value.find((c) => c.id === courseId);
        if (enrolCourse) {
            const isEnrolled = enrolled.value.includes(enrolCourse.id);
            if (isEnrolled) {
                enrolled.value = enrolled.value.filter((id) => id !== courseId);
            } else {
                enrolled.value = [...enrolled.value, courseId];
            }
            return true;
        }
        return false;
    }
    return {
        courses,
        enrolled,
        toggleEnrolment,
    }
});

export default useCoursesStore;
