import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import( /* webpackChunkName: "404" */ '@/components/errors/404.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/pages/Home.vue')
    },
]

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes
})