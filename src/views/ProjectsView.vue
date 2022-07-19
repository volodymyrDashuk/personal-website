<template>
    <div class="projects content-wrapper">
        <Sidebar :accordion="getProjectsAccordion" @checkboxChecked="checkboxChecked"/>
        <div class="content">
            <div class="projects-list">
                <ProjectItem
                    v-for="item in computedTech"
                    :cards="item"
                />
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
                return this.getProjectList;
            } else {
                return this.getProjectList.filter(card => {
                    if(typeof card.tech === 'string') {
                        return this.checked.indexOf(card.tech) !== -1
                    }

                    if (Array.isArray(card.tech)) {
                        return card.tech.some(item => this.checked.indexOf(item) !== -1)
                    }
                });
            }
        },

        ...mapGetters(['getProjectsAccordion', 'getProjectList'])
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

//  Common
.projects {
    .content {
        padding: 80px 17px 17px 80px;

        @media (min-width: var.$tablet__small) {
            width: 80%;
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
        .content {
            width: 100%;
            padding: 38px 17px;
        }
    }
}

//  Mobile
@media (max-width: var.$desktop__small) {
    .projects {
        .projects-list {
            grid-template-columns: repeat(2, minmax(0,1fr));
        }
    }
}

@media (max-width: var.$mobile__small) {
    .projects {
        .projects-list {
            grid-template-columns: repeat(1, minmax(0,1fr));
        }
    }
}

//  Desktop
@media (min-width: var.$tablet__small) {
    .projects {
        .content {
            width: 80%;
            overflow: scroll;
            max-height: 860px;
        }
    }
}

</style>
