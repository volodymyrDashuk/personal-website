export default {
    state: {
        labsAccordion: {
            "labs": {
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
        labsList: [
            {
                id: 1,
                name: 'Tim',
                slug: 'tim',
                image_path: 'pollardi.jpeg',
                image_alt: 'Tim',
                icon: ['icon-vue'],
                card_text: 'Time management application',
                tech: ['Vue.js'],
                routeComponentName: 'tim',
                isDetail: true,
                target: '_blank',
                detail: {
                    image: ['pollardi/homepage.png', 'pollardi/checkout.png', 'pollardi/pdp.png', 'pollardi/blog.png', 'pollardi/store_location.png'],
                    image_alt: 'Tim images',
                    tags: ['Vue.js', 'Vuex', 'CSS'],
                    title: 'Tim',
                    text: 'Tim is a time management application.',
                    link: 'https://tim-assistant.netlify.app/'
                }
            }
        ],
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getLabsAccordion(state) {
            return state.labsAccordion
        },
        getLabList(state) {
            return state.labsList
        }
    }
}
