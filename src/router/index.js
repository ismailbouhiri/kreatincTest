import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../views/HomePage.vue" // eslint-disable-line 

const router = createRouter({// eslint-disable-line 
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage// eslint-disable-line 
        },
        {
            path: '/watchlist',
            name: "watchlist",
            component: () => import("@/views/WatchList.vue") // eslint-disable-line
        },
        {
            path: '/movie/:id',
            name: "MovieInfo",
            component: () => import("@/views/MovieInfo.vue") // eslint-disable-line
        }
    ],
})

export default router;