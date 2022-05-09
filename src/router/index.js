import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "main" */ '../views/HelloView.vue')
    },
    {
        path: '/about',
        name: 'AboutMeView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutMeView.vue')
    },
    {
        path: '/projects',
        name: 'ProjectsView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectsView.vue')
    },
    {
        path: '/contact',
        name: 'ContactView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
