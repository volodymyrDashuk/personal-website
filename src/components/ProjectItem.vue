<template>
    <div
        class="list-item"
    >
        <div class="list-item-title">
            <span class="name">Project {{ cards.id }} </span>
            &#x2f;&#x2f; _{{ cards.name }}
        </div>
        <div class="card">
            <div class="card-header">
                <img
                    :src="`assets/images/project-list-images/${cards.image_path}`"
                    :alt="cards.image_alt"
                    height="150"
                    width="370"
                >
                <div class="icons"
                >
                    <div
                        v-for="icon in cards.icon"
                        class="icon"
                        :class="icon"
                    />
                </div>
            </div>
            <div class="card-text">
                <p>{{ cards.card_text }}</p>
            </div>
            <div class="card-link">
                <router-link class="button-secondary"
                             :to="{ name: 'ProjectDetail', params: {id: cards.id} }"
                >
                    view-project
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cards'],
    data() {
        return {


        };
    },
}
</script>

<style lang="scss">
// Local Variables

$react-color: #86E1F9;
$vue-color: #81D4AF;
$html-color: #FFA67E;
$css-color: #95D6F0;
$js-color: #F7DF1E;
$bootstrap-color: #5B4282;
$magento-color: #EC6737;

@use "src/styles/variables" as var;

//  Common
.list-item {
    max-width: 370px;
    width: 100%;

    .list-item-title {
        font-size: 16px;
        margin-bottom: 15px;

        .name {
            color: var.$secondary-blue-2;
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid var.$lines;
        border-radius: 15px;

        // 31px = project-title font-size (16px) + project-title margin-bottom (15px)
        height: calc(100% - 31px);
        overflow: hidden;

        .card-header {
            position: relative;

            .icons {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 19px;
                right: 17px;
            }

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                height: 25px;

                &:not(:last-of-type) {
                    margin-right: 4px;
                }

                &::after {
                    width: 25px;
                    height: 25px;
                    display: inline-block;
                    content: '';
                }
            }

            .icon-react {
                background-color: $react-color;

                &::after {
                    background: var.$react-icon no-repeat;
                }
            }

            .icon-html {
                background-color: $html-color;

                &::after {
                    background: var.$html-icon no-repeat;
                }
            }

            .icon-vue {
                background-color: $vue-color;

                &::after {
                    background: var.$vue-icon no-repeat;
                }
            }

            .icon-css {
                background-color: $css-color;

                &::after {
                    background: var.$css-icon no-repeat;
                }
            }

            .icon-js {
                background-color: $js-color;

                &::after {
                    background: var.$js-icon no-repeat;
                }
            }

            .icon-bootstrap {
                background-color: $bootstrap-color;

                &::after {
                    background: var.$bootstrap-icon no-repeat;
                }
            }

            .icon-magento {
                background-color: $magento-color;

                &::after {
                    background: var.$magento-icon no-repeat;
                }
            }

            img {
                width: 100%;
                height: 13rem;
                object-fit: cover;
            }
        }

        .card-text {
            border-top: 1px solid var.$lines;
            padding: 24px 24px 0 31px;
            font-size: 18px;
            line-height: 27px;
            margin-bottom: 22px;
        }

        .card-link {
            max-width: 130px;
            width: 100%;
            margin-left: 31px;
            margin-top: auto;
            padding-bottom: 32px;
        }
    }
}

</style>
