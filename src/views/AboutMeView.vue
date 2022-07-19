<template>
    <div class="about content-wrapper">
        <Sidebar :accordion="getAboutMe"/>
        <div class="information">
            <router-view/>
        </div>
        <div class="code-showcase">
            <CodeShowcase/>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Bio from "@/components/Bio";
import CodeShowcase from "@/components/CodeShowcase";
import {mapGetters} from "vuex";

export default {
    components: {CodeShowcase, Sidebar, Bio},
    computed: {
        ...mapGetters(['getAboutMe'])
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

//  Common
.about {
    .information {
        padding: 17px 17px 17px 80px;
        border-right: 1px solid var.$lines;
        overflow-y: scroll;
    }

    .code-showcase {
        padding: 17px 40px;
        overflow-y: scroll;

        @media (min-width: var.$tablet__small) {
            width: 46%;
        }
    }

    .code-line {
        z-index: 1;
        position: relative;
        margin-bottom: 10px;

        .mobile-title {
            display: none;
        }

        &:after {
            content: attr(data-line-nr);
            position: absolute;
            left: -40px;
            color: #607B96;
            z-index: 3;
            top: 0;
        }
    }

    .comment-content {
        .mobile-title {
            display: none;
        }
    }
}

//  Mobile
@media (max-width: var.$tablet__small) {
    .about {
        .information {
            width: 100%;
            padding: 38px 17px;
            border-right: none;
        }

        .code-showcase {
            width: 100%;
            padding: 38px 17px;
        }

        .code-line {
            display: inline-block;

            .mobile-title {
                display: block;
                margin-bottom: 17px;

                span {
                    color: var.$secondary-white-2
                }
            }

            &:after {
                content: none;
            }

            .comment {
                display: none;
            }

            &.mobile-next-line {
                display: block;
            }
        }

        .comment-content {
            .mobile-title {
                display: block;
                margin-bottom: 17px;

                span {
                    color: var.$secondary-white-2
                }
            }
        }
    }
}

//  Desktop
@media (min-width: var.$tablet__small) {
    .about {
        .information {
            width: 34%;
        }
    }
}

</style>
