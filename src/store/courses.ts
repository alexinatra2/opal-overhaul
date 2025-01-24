import {defineStore} from "pinia";

export interface Course {
    name: string;
    id: string;
    author: string;
    desc?: string;
}

const useCoursesStore = defineStore("courses", () => ({
    courses: [
        {
            name: "Kurs 1",
            id: "II-903",
            desc: "Dies ist ein Beispielkurs mit kurzer Beschreibung",
            author: "Prof. Freitag",
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
    ],
}));

export default useCoursesStore;
