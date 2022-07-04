export default {
    state: {
        aboutMe: {
            "personalInfo": {
                "name": "personal-info",
                "open": true,
                "checkbox": false,
                "items": [
                    { name: "bio", href: '/about/bio'},
                    { name: "experience", href: '/about/experience' },
                    { name: "interests", href: '/about/interests' },
                    { name: "education", href: '/about/education' }
                ]
            },
            "contacts": {
                "name": "contacts",
                "open": true,
                "checkbox": false,
                "items": [
                    { name: "donvov1990@gmail.com", href: 'mailto:donvov1990@gmail.com', target: '_blank'},
                    { name: "@volodymyrDashuk", href: 'https://t.me/volodymyrDashuk', target: '_blank' }
                ]
            }
        }
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getAboutMe(state) {
            return state.aboutMe
        }
    }
}
