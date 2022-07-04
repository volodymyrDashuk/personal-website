<template>
    <div
        class="blog-item"
        v-for="item in cards"
    >
        <div class="blog-title">
            <span class="name">{{ item.name }} </span>
        </div>
        <div class="card">
            <div class="card-header">
                <img
                    :src="item.image_path"
                    :alt="item.image_alt"
                >
                <div class="icons"
                >
                    <div
                        v-for="icon in item.icon"
                        class="icon"
                        :class="icon"
                    />
                </div>
            </div>
            <div class="card-text">
                <p>{{ item.text }}</p>
            </div>
            <div class="card-link">
                <a
                    :href="item.link_url"
                    class="button-secondary"
                >
                    view-blog
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cards'],
}
</script>

<style lang="scss">
// Local Variables

$react-color: #86E1F9;
$vue-color: #81D4AF;
$html-color: #FFA67E;
$css-color: #95D6F0;

@use "src/styles/variables" as var;

.blog-item {
    max-width: 370px;
    width: 100%;

    .blog-title {
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

        // 31px = blog-title font-size (16px) + blog-title margin-bottom (15px)
        height: calc(100% - 31px);

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
