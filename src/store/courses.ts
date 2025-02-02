import { defineStore } from "pinia";

export type CourseNode = {
    title: string;
    children?: CourseNode[];
};

export interface Course {
    name: string;
    id: string;
    author: string;
    desc?: string;
    enrolled?: boolean;
    nodes?: CourseNode[];
}

const useCoursesStore = defineStore("courses", () => ({
    courses: [
        { 
            name: "Tutorium Medieninformatik 1. Semester", 
            id: "I-001", 
            author: "Anna Poenisch", 
            desc: "Einführung in die Medieninformatik für Erstsemester.", 
            enrolled: true, 
            nodes: [
                { title: "Skript", children: [{ title: "Kapitel 1" }, { title: "Kapitel 2" }] },
                { title: "Aufgaben", children: [{ title: "Übung 1" }, { title: "Übung 2" }] },
                { title: "Lösungen" }
            ]
        },
        { 
            name: "Grundlagen der Gestaltung", 
            id: "I-350", 
            author: "Dietrich Kammer", 
            desc: "Grundlagen und Prinzipien des Designs.", 
            enrolled: false, 
            nodes: [
                { title: "Vorlesungsmaterialien" },
                { title: "Übungen", children: [{ title: "Aufgabe 1" }, { title: "Aufgabe 2" }] }
            ]
        },
        { 
            name: "Digitale Bildbearbeitung", 
            id: "I-360", 
            author: "Teresa Merino", 
            desc: "Techniken und Werkzeuge zur digitalen Bildbearbeitung.", 
            enrolled: true, 
            nodes: [
                { title: "Software-Anleitungen" },
                { title: "Projekte", children: [{ title: "Projekt 1" }, { title: "Projekt 2" }] }
            ]
        },
        { 
            name: "Digitale Signalverarbeitung", 
            id: "E-803", 
            author: "Julia Engelbrecht", 
            desc: "Theoretische und praktische Grundlagen der Signalverarbeitung.", 
            enrolled: false, 
            nodes: [
                { title: "Theorie" },
                { title: "Praktische Beispiele" }
            ]
        },
        { 
            name: "Datenbanksysteme", 
            id: "M-12", 
            author: "Klaus-Peter Sehmisch", 
            desc: "Einführung in relationale und NoSQL-Datenbanksysteme.", 
            enrolled: true, 
            nodes: [
                { title: "SQL Grundlagen" },
                { title: "NoSQL Systeme" }
            ]
        },
        { 
            name: "Grundlagen der Informatik II", 
            id: "I-310", 
            author: "Hans-Joachim Boehme", 
            desc: "Vertiefung der Informatik-Grundlagen.", 
            enrolled: true, 
            nodes: [
                { title: "Algorithmen" },
                { title: "Datenstrukturen" }
            ]
        },
        { 
            name: "Algebra und höhere Mathematik", 
            id: "I-380", 
            author: "Elena Klimova", 
            desc: "Mathematische Grundlagen für Informatiker.", 
            enrolled: false, 
            nodes: [
                { title: "Theorie", children: [{ title: "Lineare Algebra" }, { title: "Analysis" }] },
                { title: "Übungen" }
            ]
        },
        { 
            name: "Englisch B2", 
            id: "S-411", 
            author: "Ute Wadehn-Peña", 
            desc: "Englischkurs für Fortgeschrittene.", 
            enrolled: true, 
            nodes: [
                { title: "Vokabeln" },
                { title: "Grammatikübungen" }
            ]
        },
        { 
            name: "Computergrafik I", 
            id: "I-362", 
            author: "Markus Wacker", 
            desc: "Einführung in Computergrafik.", 
            enrolled: true, 
            nodes: [
                { title: "Rendering-Techniken" },
                { title: "3D-Modelle" }
            ]
        },
        { 
            name: "LAVA - Grundlagen der Informatik", 
            id: "I-400", 
            author: "Jana Halgasch", 
            desc: "Kernkonzepte der Informatik für Einsteiger.", 
            enrolled: false, 
            nodes: [
                { title: "Theorie" },
                { title: "Übungen" }
            ]
        },
        { 
            name: "Projektmanagement für Softwareentwicklung", 
            id: "I-510", 
            author: "Michael Bauer", 
            desc: "Methoden und Werkzeuge für effizientes Projektmanagement.", 
            enrolled: false, 
            nodes: [
                { title: "Seminar", children: [{ title: "Einführung" }, { title: "Planung" }, { title: "Risikomanagement" }] },
                { title: "Fallstudien" }
            ]
        },
        { 
            name: "Machine Learning Grundlagen", 
            id: "I-520", 
            author: "Laura Schmidt", 
            desc: "Einführung in maschinelles Lernen und KI-Techniken.", 
            enrolled: true, 
            nodes: [
                { title: "Theorie", children: [{ title: "Überwachtes Lernen" }, { title: "Unüberwachtes Lernen" }] },
                { title: "Praktikum", children: [{ title: "Python Basics" }, { title: "ML-Modelle" }, { title: "Evaluation" }] }
            ]
        },
        { 
            name: "IT-Sicherheit und Kryptografie", 
            id: "I-530", 
            author: "Stefan Krüger", 
            desc: "Grundlagen der IT-Sicherheit und moderne Verschlüsselungsmethoden.", 
            enrolled: false, 
            nodes: [
                { title: "Vorlesung" },
                { title: "Übungen", children: [{ title: "RSA-Verschlüsselung" }, { title: "Hashing" }] },
                { title: "Fallstudien" }
            ]
        },
        { 
            name: "Datenanalyse und Visualisierung", 
            id: "I-540", 
            author: "Sophia Meier", 
            desc: "Werkzeuge und Methoden zur Analyse und Visualisierung von Daten.", 
            enrolled: true, 
            nodes: [
                { title: "Workshop" },
                { title: "Projekte", children: [{ title: "Datenaufbereitung" }, { title: "Visualisierungstechniken" }, { title: "Storytelling mit Daten" }] }
            ]
        },
        { 
            name: "Fortgeschrittene Webentwicklung", 
            id: "I-550", 
            author: "Jonas Weber", 
            desc: "Moderne Webtechnologien und Frameworks.", 
            enrolled: true, 
            nodes: [
                { title: "Coding Challenge", children: [{ title: "JavaScript Advanced" }, { title: "React Hooks" }] },
                { title: "Seminar" },
                { title: "Abschlussprojekt" }
            ]
        },
        { 
            name: "Robotik und Steuerungssysteme", 
            id: "I-560", 
            author: "Nina Hoffmann", 
            desc: "Grundlagen und Anwendungen der Robotik.", 
            enrolled: false, 
            nodes: [
                { title: "Laborpraktikum" },
                { title: "Prototypenentwicklung", children: [{ title: "Motorsteuerung" }, { title: "Sensorik" }] }
            ]
        },
        { 
            name: "Cloud Computing und DevOps", 
            id: "I-570", 
            author: "Tim Berger", 
            desc: "Einführung in Cloud-Plattformen und DevOps-Konzepte.", 
            enrolled: true, 
            nodes: [
                { title: "Hands-On Lab" },
                { title: "Projektarbeit", children: [{ title: "CI/CD Pipelines" }, { title: "Containerisierung" }] }
            ]
        },
        { 
            name: "Spieleentwicklung mit Unity", 
            id: "I-580", 
            author: "Leon Wagner", 
            desc: "Entwicklung von 3D-Spielen mit Unity.", 
            enrolled: false, 
            nodes: [
                { title: "Coding Sessions" },
                { title: "Spielprojekte", children: [{ title: "Leveldesign" }, { title: "Physik-Engine" }] }
            ]
        },
        { 
            name: "Big Data Technologien", 
            id: "I-610", 
            author: "Martin Schuster", 
            desc: "Skalierbare Datenverarbeitung und Analyse großer Datenmengen.", 
            enrolled: true, 
            nodes: [
                { title: "Einführung" },
                { title: "Technologien", children: [{ title: "Hadoop" }, { title: "Spark" }, { title: "Kafka" }] },
                { title: "Praxisprojekt" }
            ]
        },
        { 
            name: "Künstliche Intelligenz in der Medizin", 
            id: "I-620", 
            author: "Dr. Lisa Berger", 
            desc: "Anwendungen von KI zur Diagnose und Therapieunterstützung.", 
            enrolled: false, 
            nodes: [
                { title: "Grundlagen" },
                { title: "Algorithmen", children: [{ title: "Neuronale Netze" }, { title: "Bildverarbeitung" }, { title: "Sprachverarbeitung" }] },
                { title: "Fallstudien" },
                { title: "Praktische Umsetzung", children: [{ title: "Python-Modelle" }, { title: "Datenanalyse" }] }
            ]
        }        
    ],
}));

export default useCoursesStore;