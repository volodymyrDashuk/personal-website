<template>
    <footer class="footer">
        <div class="footer-text">
            find me in:
        </div>
        <div class="footer-links">
            <a
                v-for="link in links"
                :href="link.url"
                class="footer-link"
                :class="link.class"
                target="_blank"
            >
                <span>
                    {{link.text}}
                </span>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {url: 'https://www.facebook.com/vladimir.dashuk', class: 'facebook'},
                {url: 'https://www.instagram.com/vladimir_dashuk/', class: 'instagram'},
                {url: 'https://github.com/volodymyrDashuk/', class: "github last-link", text: ' @volodymyrDashuk'}
            ]
        };
    },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

//  Common
.footer {
    display: flex;
    align-items: center;
    position: relative;
    border-top: 1px solid var.$lines;
    height: auto;
    margin-top: auto;
    z-index: 3;

    .footer-text {
        padding: 18px 18px 18px 22px;
        border-right: 1px solid var.$lines;
        max-width: 150px;
        width: 100%;
        height: 100%;
    }

    .footer-links {
        display: flex;
        align-items: center;
        width: -webkit-fill-available;
        height: 100%;
    }

    .footer-link {
        display: flex;
        align-items: center;
        padding: 13px 14px;
        height: 100%;
        text-decoration: none;

        &.facebook {
            &::after {
                background: var.$facebook-default-icon no-repeat;
            }
        }

        &.instagram {
            &::after {
                background: var.$instagram-default-icon no-repeat;
            }
        }

        &.github {
            padding-left: 22px;

            &::after {
                background: var.$github-default-icon no-repeat;
                margin-left: 5px;
            }
        }

        &:not(:last-of-type) {
            border-right: 1px solid var.$lines;
        }

        &.last-link {
            border-left: 1px solid var.$lines;
            margin-left: auto;
        }

        &::after {
            display: inline-block;
            content: '';
            width: 26px;
            height: 26px;
        }

        &:hover {
            color: var.$secondary-white;
            text-decoration: none;

            &.facebook {
                &::after {
                    background: var.$facebook-hover-icon no-repeat;
                }
            }

            &.instagram {
                &::after {
                    background: var.$instagram-hover-icon no-repeat;
                }
            }

            &.github {
                &::after {
                    background: var.$github-hover-icon no-repeat;
                }
            }
        }
    }
}

//  Mobile
@media (max-width: var.$mobile__small) {
    .footer {
        justify-content: space-between;

        .footer-links {
            width: unset;
        }

        .footer-link {
            span {
                display: none;
            }

            &:first-of-type {
                border-left: 1px solid var.$lines;
            }

            &.last-link {
                border-left: none;
                margin-left: unset;
            }
        }
    }
}

</style>
