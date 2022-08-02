<template>
    <div class="projects content-wrapper">
        <Sidebar :accordion="getLabsAccordion" @checkboxChecked="checkboxChecked"/>
        <div class="content">
            <div class="projects-list">
                <LabItem
                    v-for="item in computedTech"
                    :cards="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import LabItem from "@/components/LabItem";
import {mapGetters} from "vuex";
export default {
    components: {Sidebar, LabItem},
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
                return this.getLabList;
            } else {
                return this.getLabList.filter(card => {
                    if(typeof card.tech === 'string') {
                        return this.checked.indexOf(card.tech) !== -1
                    }

                    if (Array.isArray(card.tech)) {
                        return card.tech.some(item => this.checked.indexOf(item) !== -1)
                    }
                });
            }
        },

        ...mapGetters(['getLabsAccordion', 'getLabList'])
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
            overflow-y: auto;
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
            overflow-y: auto;
            max-height: 860px;
        }
    }
}

</style>
