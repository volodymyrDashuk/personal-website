export default {
    state: {
        projectsAccordion: {
            "projects": {
                "name": "my_projects",
                "open": true,
                "checkbox": true,
                "items": [
                    {id: 1, name: "HTML", href: '/' },
                    {id: 2,  name: "CSS", href: '/' },
                    {id: 3,  name: "JavaScript", href: '/' },
                    {id: 4,  name: "Vue.js", href: '/' },
                    {id: 5,  name: "React", href: '/' },
                    {id: 6,  name: "Magento 2", href: '/' }
                ]
            }
        },
        projectsCard: [
            {
                id: 1,
                name: 'topsity',
                image_path: 'assets/images/project-list-images/topsity.png',
                image_alt: 'project',
                icon: ['icon-html', 'icon-css', 'icon-js'],
                text: 'Top City Service is an online store for the engineering team.',
                link_url: '/',
                tech: ['CSS', 'JavaScript'],
                routeComponentName: 'topsity'
            },
            {
                id: 2,
                name: 'tetris-game',
                image_path: 'assets/images/project-list-images/project_2.png',
                image_alt: 'alt2',
                icon: ['icon-html'],
                text: 'Duis aute irure dolor in velit esse cillum dolore. Duis aute irure dolor in velit esse cillum dolore.',
                link_url: '/',
                tech: 'HTML'
            },
            {
                id: 3,
                name: 'ethereum',
                image_path: 'assets/images/project-list-images/project_3.png',
                image_alt: 'alt3',
                icon: ['icon-react', 'icon-html'],
                text: 'Duis aute irure dolor in velit esse cillum dolore.',
                link_url: '/',
                tech: ['React', 'HTML']
            }
        ],
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getProjectsAccordion(state) {
            return state.projectsAccordion
        },
        getProjectsCard(state) {
            return state.projectsCard
        }
    }
}
