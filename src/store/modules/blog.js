export default {
    state: {
        blogAccordion: {
            "projects": {
                "name": "blog",
                "open": true,
                "checkbox": true,
                "items": [
                    {id: 1, name: "Magento 2", href: '/' },
                    {id: 2,  name: "HTML", href: '/' },
                    {id: 2,  name: "CSS", href: '/' },
                    {id: 3,  name: "JavaScript", href: '/' },
                    {id: 4,  name: "Vue.js", href: '/' }
                ]
            }
        },
        blogCard: [
            {
                id: 1,
                name: 'How install Magento 2',
                image_path: 'assets/images/project-list-images/project_1.png',
                image_alt: 'alt',
                icon: [''],
                text: 'lorem ipsum text lorem ipsum text',
                link_url: '/',
                tech: 'CSS',
            },
            {
                id: 2,
                name: 'CMS pages and Blocks',
                image_path: 'assets/images/project-list-images/project_2.png',
                image_alt: 'alt2',
                icon: [''],
                text: 'Duis aute irure dolor in velit esse cillum dolore. Duis aute irure dolor in velit esse cillum dolore.',
                link_url: '/',
                tech: 'HTML'
            },
            {
                id: 3,
                name: 'Theme customization',
                image_path: 'assets/images/project-list-images/project_3.png',
                image_alt: 'alt3',
                icon: [''],
                text: 'Duis aute irure dolor in velit esse cillum dolore.',
                link_url: '/',
                tech: ['Magento 2']
            }
        ],
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getBlogAccordion(state) {
            return state.blogAccordion
        },
        getBlogCard(state) {
            return state.blogCard
        }
    }
}
