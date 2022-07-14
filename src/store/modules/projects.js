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
                tech: ['HTML', 'CSS', 'JavaScript'],
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
                tech: ['HTML', 'CSS', 'JavaScript'],
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
                name: 'SpecKomunTrans',
                slug: 'speckomuntrans',
                image_path: 'sct.jpeg',
                image_alt: 'SpecKomunTrans',
                icon: ['icon-html', 'icon-css', 'icon-js'],
                card_text: 'Services for the removal, processing and disposal of household waste provided in the settlement in accordance with the rules for the improvement of the territory of Khmelnitsky.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                routeComponentName: 'speckomuntrans',
                detail: {
                    image: ['sct/sct.png'],
                    image_alt: 'SpecKomunTrans',
                    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                    title: 'SpecKomunTrans',
                    subtitle: '',
                    text: 'Services for the handling of special equipment and transportation of waste by dump trucks for subsequent disposal in a landfill.',
                    link: 'https://skt.km.ua/'
                }
            },
            {
                id: 4,
                name: 'European consulting group',
                slug: 'eusg',
                image_path: 'eusg.png',
                image_alt: 'EuCG',
                icon: ['icon-html', 'icon-css', 'icon-js'],
                card_text: 'International company of the administrative-legal and tax consulting for midsize and small business.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                routeComponentName: 'speckomuntrans',
                detail: {
                    image: ['eusg/hp.png', 'eusg/hp.gif', 'eusg/blog.png' ,'eusg/contact.gif'],
                    image_alt: 'EuCG',
                    tags: ['HTML', 'CSS', 'JavaScript'],
                    title: 'European consulting group',
                    subtitle: '',
                    text: 'Services for the handling of special equipment and transportation of waste by dump trucks for subsequent disposal in a landfill.',
                    link: 'https://skt.km.ua/'
                }
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
