import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "main" */ '../views/HelloView.vue')
    },
    {
        path: '/about/bio',
        name: 'AboutMeView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutMeView.vue'),
        children: [
            {
                path: '/about/bio',
                name: 'Bio',
                component: () => import(/* webpackChunkName: "about" */ '../components/Bio.vue')
            },
            {
                path: '/about/experience',
                name: 'Experience',
                component: () => import(/* webpackChunkName: "about" */ '../components/Experience.vue')
            },
            {
                path: '/about/interests',
                name: 'Interests',
                component: () => import(/* webpackChunkName: "about" */ '../components/Interests.vue')
            },
            {
                path: '/about/education',
                name: 'Education',
                component: () => import(/* webpackChunkName: "about" */ '../components/Education.vue')
            }
        ]
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
