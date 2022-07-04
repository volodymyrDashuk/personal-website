<template>
    <div class="projects">
        <Sidebar :accordion="getProjectsAccordion" @checkboxChecked="checkboxChecked"/>
        <div class="content">
            <div class="projects-list">
                <ProjectItem :cards="computedTech"/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import ProjectItem from "@/components/ProjectItem";
import {mapGetters} from "vuex";
export default {
    components: {Sidebar, ProjectItem},
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
                return this.getProjectsCard;
            } else {
                return this.getProjectsCard.filter(card => {
                    if(typeof card.tech === 'string') {
                        return this.checked.indexOf(card.tech) !== -1
                    }

                    if (Array.isArray(card.tech)) {
                        return card.tech.some(item => this.checked.indexOf(item) !== -1)
                    }
                });
            }
        },

        ...mapGetters(['getProjectsAccordion', 'getProjectsCard'])
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.projects {
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

    .projects-list {
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
