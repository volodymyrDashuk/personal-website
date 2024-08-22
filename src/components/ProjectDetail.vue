<template>
    <div class="project-detail" v-if="projectDetail">
        <div class="project-images">
            <div class="img"
                 v-for="imagePath in projectDetail.detail.image"
            >
                <img
                    :src="`${publicPath}` + 'assets/images/project-details-images/' + imagePath"
                    :alt="projectDetail.detail.image_alt"
                />
            </div>
        </div>
        <div class="project-content">
            <div class="tags">
                <span
                    v-for="tags in projectDetail.detail.tags"
                >
                    &#35;{{tags}}
                </span>
            </div>

            <div class="title">
                <h2>{{projectDetail.detail.title}}</h2>
            </div>
            <div class="subtitle">
                <p>
                    {{projectDetail.detail.subtitle}}
                </p>
            </div>

            <div class="text">
                {{projectDetail.detail.text}}
            </div>

            <div class="action-toolbar">
                <a class="button-primary"
                   :href="projectDetail.detail.link"
                   target="_blank"
                >
                    Visit
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    data() {
        return {
            projectDetail: null,
            publicPath: process.env.BASE_URL
        };
    },
    created() {
        const projectDetailTmp = this.getProjectList.find(projectDetail => projectDetail.id == this.$route.params.id)
        if (projectDetailTmp) {
            this.projectDetail = projectDetailTmp
        }
    },
    computed: {
        ...mapGetters(['getProjectList'])
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

    //  Common
    .project-detail {
        display: flex;

        .project-images {
            max-width: 66%;
            width: 100%;
            overflow-y: scroll;
            max-height: calc(100vh - 110px);

            .img:not(:last-of-type) {
                margin-bottom: 10px;
            }
        }

        .project-content {
            max-width: 33%;
            width: 100%;
            padding: 30px 40px;
        }

        .title {
            color: var.$secondary-white;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .subtitle {
            color: var.$secondary-white;
            font-size: 18px;
            margin-bottom: 30px;
        }

        .text {
            margin-bottom: 30px;
        }

        .action-toolbar {
            max-width: 150px;
            width: 100%;
        }

        .tags {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            color: var.$secondary-blue-2;
            font-size: 18px;
            margin-bottom: 20px;

            span:not(:last-of-type) {
                margin-right: 10px;
            }
        }
    }

    //  Mobile
    @media (max-width: var.$mobile__default) {
        .project-detail {
            flex-direction: column-reverse;

            .project-images {
                max-width: unset;
                overflow: unset;
                max-height: unset;
            }

            .project-content {
                max-width: unset;
            }
        }
    }
</style>
