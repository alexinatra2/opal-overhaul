import {defineStore} from "pinia";
import {computed, ref} from "vue";

export type CourseNode = {
    title: string;
    children?: CourseNode[];
};

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

const initialCourses = [
    {
        name: "Tutorium Medieninformatik 1. Semester",
        id: "I-001",
        author: "Anna Poenisch",
        desc: "Einführung in die Medieninformatik für Erstsemester.",
        nodes: [
            {title: "Skript", children: [{title: "Kapitel 1"}, {title: "Kapitel 2"}]},
            {title: "Aufgaben", children: [{title: "Übung 1"}, {title: "Übung 2"}]},
            {title: "Lösungen"}
        ]
    },
    {
        name: "Grundlagen der Gestaltung",
        id: "I-350",
        author: "Dietrich Kammer",
        desc: "Grundlagen und Prinzipien des Designs.",
        nodes: [
            {title: "Vorlesungsmaterialien"},
            {title: "Übungen", children: [{title: "Aufgabe 1"}, {title: "Aufgabe 2"}]}
        ]
    },
    {
        name: "Digitale Bildbearbeitung",
        id: "I-360",
        author: "Teresa Merino",
        desc: "Techniken und Werkzeuge zur digitalen Bildbearbeitung.",
        nodes: [
            {title: "Software-Anleitungen"},
            {title: "Projekte", children: [{title: "Projekt 1"}, {title: "Projekt 2"}]}
        ]
    },
    {
        name: "Digitale Signalverarbeitung",
        id: "E-803",
        author: "Julia Engelbrecht",
        desc: "Theoretische und praktische Grundlagen der Signalverarbeitung.",
        nodes: [
            {title: "Theorie"},
            {title: "Praktische Beispiele"}
        ]
    },
    {
        name: "Datenbanksysteme",
        id: "M-12",
        author: "Klaus-Peter Sehmisch",
        desc: "Einführung in relationale und NoSQL-Datenbanksysteme.",
        nodes: [
            {title: "SQL Grundlagen"},
            {title: "NoSQL Systeme"}
        ]
    },
    {
        name: "Grundlagen der Informatik II",
        id: "I-310",
        author: "Hans-Joachim Boehme",
        desc: "Vertiefung der Informatik-Grundlagen.",
        nodes: [
            {title: "Algorithmen"},
            {title: "Datenstrukturen"}
        ]
    },
    {
        name: "Algebra und höhere Mathematik",
        id: "I-380",
        author: "Elena Klimova",
        desc: "Mathematische Grundlagen für Informatiker.",
        nodes: [
            {title: "Theorie", children: [{title: "Lineare Algebra"}, {title: "Analysis"}]},
            {title: "Übungen"}
        ]
    },
    {
        name: "Englisch B2",
        id: "S-411",
        author: "Ute Wadehn-Peña",
        desc: "Englischkurs für Fortgeschrittene.",
        nodes: [
            {title: "Vokabeln"},
            {title: "Grammatikübungen"}
        ]
    },
    {
        name: "Computergrafik I",
        id: "I-362",
        author: "Markus Wacker",
        desc: "Einführung in Computergrafik.",
        nodes: [
            {title: "Rendering-Techniken"},
            {title: "3D-Modelle"}
        ]
    },
    {
        name: "LAVA - Grundlagen der Informatik",
        id: "I-400",
        author: "Jana Halgasch",
        desc: "Kernkonzepte der Informatik für Einsteiger.",
        nodes: [
            {title: "Theorie"},
            {title: "Übungen"}
        ]
    },
    {
        name: "Projektmanagement für Softwareentwicklung",
        id: "I-510",
        author: "Michael Bauer",
        desc: "Methoden und Werkzeuge für effizientes Projektmanagement.",
        nodes: [
            {title: "Seminar", children: [{title: "Einführung"}, {title: "Planung"}, {title: "Risikomanagement"}]},
            {title: "Fallstudien"}
        ]
    },
    {
        name: "Machine Learning Grundlagen",
        id: "I-520",
        author: "Laura Schmidt",
        desc: "Einführung in maschinelles Lernen und KI-Techniken.",
        nodes: [
            {title: "Theorie", children: [{title: "Überwachtes Lernen"}, {title: "Unüberwachtes Lernen"}]},
            {title: "Praktikum", children: [{title: "Python Basics"}, {title: "ML-Modelle"}, {title: "Evaluation"}]}
        ]
    },
    {
        name: "IT-Sicherheit und Kryptografie",
        id: "I-530",
        author: "Stefan Krüger",
        desc: "Grundlagen der IT-Sicherheit und moderne Verschlüsselungsmethoden.",
        nodes: [
            {title: "Vorlesung"},
            {title: "Übungen", children: [{title: "RSA-Verschlüsselung"}, {title: "Hashing"}]},
            {title: "Fallstudien"}
        ]
    },
    {
        name: "Datenanalyse und Visualisierung",
        id: "I-540",
        author: "Sophia Meier",
        desc: "Werkzeuge und Methoden zur Analyse und Visualisierung von Daten.",
        nodes: [
            {title: "Workshop"},
            {
                title: "Projekte",
                children: [{title: "Datenaufbereitung"}, {title: "Visualisierungstechniken"}, {title: "Storytelling mit Daten"}]
            }
        ]
    },
    {
        name: "Fortgeschrittene Webentwicklung",
        id: "I-550",
        author: "Jonas Weber",
        desc: "Moderne Webtechnologien und Frameworks.",
        nodes: [
            {title: "Coding Challenge", children: [{title: "JavaScript Advanced"}, {title: "React Hooks"}]},
            {title: "Seminar"},
            {title: "Abschlussprojekt"}
        ]
    },
    {
        name: "Robotik und Steuerungssysteme",
        id: "I-560",
        author: "Nina Hoffmann",
        desc: "Grundlagen und Anwendungen der Robotik.",
        nodes: [
            {title: "Laborpraktikum"},
            {title: "Prototypenentwicklung", children: [{title: "Motorsteuerung"}, {title: "Sensorik"}]}
        ]
    },
    {
        name: "Cloud Computing und DevOps",
        id: "I-570",
        author: "Tim Berger",
        desc: "Einführung in Cloud-Plattformen und DevOps-Konzepte.",
        nodes: [
            {title: "Hands-On Lab"},
            {title: "Projektarbeit", children: [{title: "CI/CD Pipelines"}, {title: "Containerisierung"}]}
        ]
    },
    {
        name: "Spieleentwicklung mit Unity",
        id: "I-580",
        author: "Leon Wagner",
        desc: "Entwicklung von 3D-Spielen mit Unity.",
        nodes: [
            {title: "Coding Sessions"},
            {title: "Spielprojekte", children: [{title: "Leveldesign"}, {title: "Physik-Engine"}]}
        ]
    },
    {
        name: "Big Data Technologien",
        id: "I-610",
        author: "Martin Schuster",
        desc: "Skalierbare Datenverarbeitung und Analyse großer Datenmengen.",
        nodes: [
            {title: "Einführung"},
            {title: "Technologien", children: [{title: "Hadoop"}, {title: "Spark"}, {title: "Kafka"}]},
            {title: "Praxisprojekt"}
        ]
    },
    {
        name: "Künstliche Intelligenz in der Medizin",
        id: "I-620",
        author: "Dr. Lisa Berger",
        desc: "Anwendungen von KI zur Diagnose und Therapieunterstützung.",
        period: {
            label: "Sommersemester 2025",
            detailed: {
                start: new Date("03/03/2025"),
                end: new Date("03/07/2025"),
            }
        },
        nodes: [
            {title: "Grundlagen"},
            {
                title: "Algorithmen",
                children: [{title: "Neuronale Netze"}, {title: "Bildverarbeitung"}, {title: "Sprachverarbeitung"}]
            },
            {title: "Fallstudien"},
            {title: "Praktische Umsetzung", children: [{title: "Python-Modelle"}, {title: "Datenanalyse"}]}
        ]
    }
];

const initialEnrolled: string[] = [
    "I-380",
    "I-360",
    "E-803",
    "I-350",
    "I-310",
    "I-001"
];

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

    const enrolledCourses = computed(() => {
        return courses.value.filter((c) => enrolled.value.includes(c.id));
    });

    return {
        courses,
        enrolled,
        enrolledCourses,
        toggleEnrolment,
    } as const;
});

export default useCoursesStore;
