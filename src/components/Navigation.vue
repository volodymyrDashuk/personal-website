<template>
    <div class="header">
        <div class="logo">
            <span>
                <span class="symbol">&#60;</span>
                volodymyr_dashuk
                <span class="symbol">&#x2f;</span>
                <span class="symbol">&#62;</span>
            </span>
        </div>
        <nav
            class="navigation"
            :class="{active: isActive}"
        >
            <router-link
                v-for="link in links"
                class="navigation-link"
                :class="link.class"
                active-class="active"
                :to="link.url"
                :exact="link.exact"
                :title="link.title"
            >
                {{ link.title }}
            </router-link>
        </nav>
        <button
            class="navigation-mobile-collapse"
            :class="{active: isActive}"
            @click="isActive = !isActive"
        >
            <span/>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            links: [
                {title: '_hello', url: '/', exact: true},
                {title: '_about-me', url: '/about'},
                {title: '_projects', url: '/projects'},
                {title: '_contact-me', url: '/contact', class: "last-link"}
            ]
        };
    },
}
</script>

<style lang="scss">
    @use "src/styles/variables" as var;

    //  Common
    .header {
        display: flex;
        align-items: center;
        position: relative;

        .logo {
            flex-basis: 20%;
            padding: 17px 22px;
            border-right: 1px solid var.$lines;
            border-bottom: 1px solid var.$lines;
            font-size: 16px;
            line-height: 21px;

            @media (max-width: var.$desktop__small) {
                flex-basis: 27%;
            }
        }

        .navigation {
            flex-basis: 80%;
            display: flex;
            border-bottom: 1px solid var.$lines;

            @media (max-width: var.$desktop__small) {
                flex-basis: 73%;
            }

            .navigation-link {
                display: inline-block;
                font-size: 16px;
                line-height: 21px;
                color: var.$secondary-slate-grey;
                text-decoration: none;
                padding: 17px 31px;

                &:not(:last-of-type) {
                    border-right: 1px solid var.$lines;
                }

                &.last-link {
                    border-left: 1px solid var.$lines;
                    margin-left: auto;
                }

                &.active {
                    position: relative;
                    color: var.$secondary-white;

                    &:before {
                        content: '';
                        display: block;
                        width: 100%;
                        height: 3px;
                        background-color: var.$accent-sandy-brown;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    }
                }
            }
        }
    }

    //  Desktop
    @media (min-width: var.$tablet__small) {
        .header {
            .navigation-mobile-collapse {
                display: none;
            }
        }
    }

    //  Mobile
    @media (max-width: var.$tablet__small) {
        .header {
            .logo {
                border-right: none;
                flex-basis: 100%;
            }

            .navigation {
                display: none;
                position: absolute;
                left: 0;
                right: 0;
                top: 100%;
                background-color: var.$primary-black-pearl-1;

                &.active {
                    display: flex;
                    flex-direction: column;
                    border-bottom: none;
                    height: calc(100vh - 56px);
                }

                .navigation-link {
                    &:not(:last-of-type) {
                        border-right: none;
                    }

                    &.last-link {
                        border-left: none;
                        margin-left: unset;
                    }

                    &.active {
                        &:before {
                            content: none;
                        }
                    }
                }
            }

            .navigation-mobile-collapse {
                display: block;
                border: none;
                background: none;
                width: 20px;
                height: 20px;
                padding: 0;
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);

                @mixin line-icon {
                    display: inline-block;
                    height: 2px;
                    width: 20px;
                    background-color: var.$secondary-slate-grey;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -1px;
                    margin-left: -10px;
                }

                span {
                    @include line-icon;

                    &:before, &:after {
                        content: '';
                        transition: transform 0.2s;
                        @include line-icon;
                    }

                    &:before {
                        transform: translateY(-6px);
                    }

                    &:after {
                        transform: translateY(6px);
                    }
                }

                &.active {
                    span {
                        height: 0;

                        &:before {
                            transform: rotate(45deg);
                        }

                        &:after {
                            transform: rotate(-45deg);
                        }
                    }
                }
            }
        }
    }
</style>
