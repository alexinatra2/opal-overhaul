import {createRouter, createWebHistory, RouterOptions} from "vue-router";
import coursesStore from "./store/courses";
import Course from "./components/course/Course.vue";
import NoCoursesStartPage from "./components/start/NoCoursesStartPage.vue";
import CoursesStartPage from "./components/start/CoursesStartPage.vue";
import SearchPage from "./components/search/SearchPage.vue";
import {useUiStore} from "./store/ui.ts";

const routes: RouterOptions["routes"] = [
    {path: "/courses", component: NoCoursesStartPage},
    {path: "/no-courses", component: CoursesStartPage},
    {name: "search", path: "/search", component: SearchPage},
    {path: "/courses/:id", component: Course},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Navigation Guard to Redirect Based on Course Availability
router.beforeEach((to, _from, next) => {
    if (to.path === "/") {
        if (coursesStore.courses.length > 0) {
            next("/courses"); // Redirect to Course Overview if user has courses
        } else {
            next("/first-time"); // Redirect to FirstTime if user has no courses
        }
    } else {
        next();
    }
});

router.afterEach(() => {
    const {closeSidebar} = useUiStore();
    closeSidebar();
})

export default router;
