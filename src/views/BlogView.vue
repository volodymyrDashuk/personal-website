<template>
    <div class="blog-page">
        <Sidebar :accordion="blogAccordion" @checkboxChecked="checkboxChecked"/>
        <div class="content">
            <div class="blog-list">
                <BlogList :cards="computedTech"/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import ProjectItem from "@/components/ProjectItem";
import BlogList from "@/components/BlogList";

export default {
    components: {BlogList, Sidebar, ProjectItem},
    data() {
        return {
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
            checked: []
        };
    },
    methods: {
        checkboxChecked(checked) {
            this.checked = checked;
        }
    },
    computed: {
        computedTech () {
            if (this.checked.length === 0) {
                return this.blogCard;
            } else {
                return this.blogCard.filter(card => {
                    if(typeof card.tech === 'string') {
                        return this.checked.indexOf(card.tech) !== -1
                    }

                    if (Array.isArray(card.tech)) {
                        return card.tech.some(item => this.checked.indexOf(item) !== -1)
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.blog-page {
    height: 100%;
    display: flex;

    .sidebar {
        max-width: 311px;
        width: 100%;
        border-right: 1px solid var.$lines;
    }

    .content {
        width: 100%;
        padding: 80px 17px 17px 80px;

        @media (min-width: var.$tablet__small) {
            overflow: scroll;
            max-height: 860px;
        }
    }

    .blog-list {
        display: grid;
        grid-gap: 50px;
        grid-template-columns: repeat(3, minmax(0,1fr));

        @media (max-width: var.$desktop__small) {
            grid-template-columns: repeat(2, minmax(0,1fr));
        }

        @media (max-width: var.$mobile__small) {
            grid-template-columns: repeat(1, minmax(0,1fr));
        }
    }

    @media (max-width: var.$tablet__small) {
        flex-direction: column;

        .sidebar {
            max-width: none;
        }

        .content {
            width: 100%;
            padding: 38px 17px;
        }
    }
}

</style>
