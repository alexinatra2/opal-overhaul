import { reactive } from "vue";

const coursesStore = reactive({
  courses: [
    {
      name: "Kurs 1",
      id: "II-903",
    },
    {
      name: "Kurs 2",
      id: "II-912",
    },
    {
      name: "Kurs 3",
      id: "II-1023",
    },
  ],
  activeCourse: "II-903",
});

export default coursesStore;
