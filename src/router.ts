import {createRouter, createWebHistory, RouterOptions} from "vue-router";
import useCoursesStore from "./store/courses";
import Course from "./components/course/Course.vue";
import NoCoursesStartPage from "./components/start/NoCoursesStartPage.vue";
import CoursesStartPage from "./components/start/CoursesStartPage.vue";
import SearchPage from "./components/search/SearchPage.vue";
import {useUiStore} from "./store/ui.ts";

const routes: RouterOptions["routes"] = [
    {
        path: "/", redirect: _to => {
            const coursesStore = useCoursesStore();
            if (coursesStore.courses.length > 0) {
                return "/courses";
            } else {
                return "/no-courses";
            }
        }
    },
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
    } else {
        next();
    }
});

router.afterEach(() => {
    const {closeSidebar} = useUiStore();
    closeSidebar();
})

export default router;
