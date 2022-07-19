<template>
    <div class="blog-page content-wrapper">
        <Sidebar :accordion="getBlogAccordion" @checkboxChecked="checkboxChecked"/>
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
import {mapGetters} from "vuex";

export default {
    components: {BlogList, Sidebar, ProjectItem},
    data() {
        return {
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
                return this.getBlogCard;
            } else {
                return this.getBlogCard.filter(card => {
                    if(typeof card.tech === 'string') {
                        return this.checked.indexOf(card.tech) !== -1
                    }

                    if (Array.isArray(card.tech)) {
                        return card.tech.some(item => this.checked.indexOf(item) !== -1)
                    }
                });
            }
        },

        ...mapGetters(['getBlogAccordion', 'getBlogCard'])
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

//  Common
.blog-page {
    .content {
        width: 100%;
        padding: 80px 17px 17px 80px;
    }

    .blog-list {
        display: grid;
        grid-gap: 50px;
        grid-template-columns: repeat(3, minmax(0,1fr));
    }
}

//  Mobile
@media (max-width: var.$tablet__small) {
    .blog-page {
        .content {
            width: 100%;
            padding: 38px 17px;
        }
    }
}

@media (max-width: var.$mobile__small) {
    .blog-page {
        .blog-list {
            grid-template-columns: repeat(1, minmax(0,1fr));
        }
    }
}

//  Desktop
@media (min-width: var.$tablet__small) {
    .blog-page {
        .content {
            overflow: scroll;
            max-height: 860px;
        }
    }
}

@media (max-width: var.$desktop__small) {
    .blog-page {

        .blog-list {
            grid-template-columns: repeat(2, minmax(0,1fr));
        }
    }
}

</style>
