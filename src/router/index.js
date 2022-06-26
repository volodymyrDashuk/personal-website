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
                component: () => import(/* webpackChunkName: "Bio" */ '../components/Bio.vue')
            },
            {
                path: '/about/experience',
                name: 'Experience',
                component: () => import(/* webpackChunkName: "Experience" */ '../components/Experience.vue')
            },
            {
                path: '/about/interests',
                name: 'Interests',
                component: () => import(/* webpackChunkName: "Interests" */ '../components/Interests.vue')
            },
            {
                path: '/about/education',
                name: 'Education',
                component: () => import(/* webpackChunkName: "Education" */ '../components/Education.vue')
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
        path: '/blog',
        name: 'BlogView',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "contact" */ '../views/BlogView.vue')
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
