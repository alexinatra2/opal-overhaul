import {reactive} from "vue";

interface Course {
    name: string;
    id: string;
    desc?: string;
}

type CoursesStore = {
    courses: Course[];
}

const coursesStore = reactive<CoursesStore>({
    courses: [
        {
            name: "Kurs 1",
            id: "II-903",
            desc: "Dies ist ein Beispielkurs mit kurzer Beschreibung",
        },
        {
            name: "Kurs 2",
            id: "II-912",
            desc: "Dies ist ein Beispielkurs mit langer Beschreibung. " +
                "Dies ist ein Beispielkurs mit langer Beschreibung. " +
                "Dies ist ein Beispielkurs mit langer Beschreibung.",
        },
        {
            name: "Kurs 3",
            id: "II-1023",
        },
    ],
});

export default coursesStore;
