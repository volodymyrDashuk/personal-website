import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "HelloView" */ '../views/HelloView.vue')
    },
    {
        path: '/about/bio',
        name: 'AboutMeView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "AboutMeView" */ '../views/AboutMeView.vue'),
        children: [
            {
                path: '/about/bio',
                name: 'Bio',
                component: () => import(/* webpackChunkName: "Interests" */ '../components/InfoSection.vue')
            },
            {
                path: '/about/experience',
                name: 'Experience',
                component: () => import(/* webpackChunkName: "Interests" */ '../components/InfoSection.vue')
            },
            {
                path: '/about/interests',
                name: 'Interests',
                component: () => import(/* webpackChunkName: "Interests" */ '../components/InfoSection.vue')
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
        path: '/projects/:id',
        name: 'ProjectDetail',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "ProjectDetail" */ '../components/ProjectDetail.vue')
    },
    {
        path: '/lab',
        name: 'LabView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "projects" */ '../views/LabView.vue')
    },
    {
        path: '/lab/:id',
        name: 'LabDetail',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "LabDetail" */ '../components/LabDetail.vue')
    },
    {
        path: '/contact',
        name: 'ContactView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    },
    {
        path: '/*',
        name: 'noRoute',
        component: () => import('../views/NoRouteView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
