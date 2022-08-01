export default {
    state: {
        labsAccordion: {
            "labs": {
                "name": "my_pet_projects",
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
                image_path: 'tim.png',
                image_alt: 'Tim',
                icon: ['icon-vue'],
                card_text: 'Tim is a service for time logging and management, which displays small statistics (how much time and tasks were done in certain periods of time)',
                tech: ['Vue.js'],
                routeComponentName: 'tim',
                isDetail: false,
                target: '_blank',
                detail: {
                    link: 'https://tim-assistant.netlify.app/'
                }
            },
            {
                id: 2,
                name: 'Memory Card Game',
                slug: 'MemoryCardGame',
                image_path: 'memoryCardGame.png',
                image_alt: 'Memory Card Game',
                icon: ['icon-vue'],
                card_text: 'The object of the game is to collect the most matching pairs.',
                tech: ['Vue.js'],
                routeComponentName: 'MemoryCardGame',
                isDetail: false,
                target: '_blank',
                detail: {
                    link: 'https://codesandbox.io/s/card-game-vue3-0pmbxr?file=/src/components/MemoryCardGame.vue'
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
