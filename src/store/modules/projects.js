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
        projectsList: [
            {
                id: 1,
                name: 'pollardi',
                slug: 'pollardi',
                image_path: 'pollardi.jpeg',
                image_alt: 'Pollardi Fashion Group',
                icon: ['icon-html', 'icon-css', 'icon-js'],
                card_text: 'Pollardi Fashion Group is a brand of wedding and evening dresses',
                tech: ['CSS', 'JavaScript'],
                routeComponentName: 'pollardi',
                detail: {
                    image: ['pollardi/homepage.png', 'pollardi/checkout.png', 'pollardi/pdp.png', 'pollardi/blog.png', 'pollardi/store_location.png'],
                    image_alt: 'project images',
                    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                    title: 'Pollardi',
                    subtitle: 'Pollardi Fashion Group is a brand of wedding and evening dresses',
                    text: 'Pollardi Fashion Group is a young Ukrainian company, as well as the largest brand in Ukraine and the largest factory of wedding dresses in Europe.',
                    link: 'https://pollardi.com/'
                }
            },
            {
                id: 2,
                name: 'topsity',
                slug: 'topsity',
                image_path: 'topsity.png',
                image_alt: 'topsity',
                icon: ['icon-html', 'icon-css', 'icon-js'],
                card_text: 'Top City Service is an online store for the engineering team.',
                tech: ['CSS', 'JavaScript'],
                routeComponentName: 'topsity',
                detail: {
                    image: ['topsity/img1.jpeg', 'topsity/img2.jpeg', 'topsity/img3.jpeg', 'topsity/img4.gif', 'topsity/img5.jpeg'],
                    image_alt: 'topsity',
                    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                    title: 'Top Sity',
                    subtitle: 'Online store engineering company.',
                    text: 'Top City Service is an online store for the engineering team. They are one of the leading companies in the field of industrial automation components and equipment for various industries.',
                    link: 'https://topsity.com.ua/'
                }
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
        getProjectList(state) {
            return state.projectsList
        }
    }
}
