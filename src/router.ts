import {createRouter, createWebHistory, RouterOptions} from "vue-router";
import useCoursesStore from "./store/courses";
import CoursePage from "./components/course/CoursePage.vue";
import NoCoursesStartPage from "./components/start/NoCoursesStartPage.vue";
import CoursesStartPage from "./components/start/CoursesStartPage.vue";
import SearchPage from "./components/search/SearchPage.vue";
import {useUiStore} from "./store/ui.ts";

const routes: RouterOptions["routes"] = [
    {
        path: "/", redirect: _to => {
            const coursesStore = useCoursesStore();
            if (coursesStore.enrolled.length > 0) {
                return "/courses";
            } else {
                return "/no-courses";
            }
        }
    },
    {path: "/courses", component: CoursesStartPage},
    {path: "/no-courses", component: NoCoursesStartPage},
    {name: "search", path: "/search", component: SearchPage},
    {path: "/courses/:id", component: CoursePage},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    const {closeSidebar} = useUiStore();
    closeSidebar();
})

export default router;
