<template>
    <div class="accordion">
        <div class="accordion-item"
             v-for="(group, name) in aboutMe"
             :class="[group.open ? 'active' : '', group.name]"
        >
            <a class="accordion-title"
               @click="group.open = !group.open"
            >
                <span>{{group.name}}</span>
            </a>
            <ul class="accordion-list"
                v-show="group.open">
                <li
                    class="accordion-list-item"
                    v-for="item in group.items"
                >
                    <router-link class="accordion-list-link"
                       :to="item.href"
                       :target="item.target"
                    >
                        <span>{{item.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aboutMe: {
                "personalInfo": {
                    "name": "personal-info",
                    "open": true,
                    "items": [
                        { name: "bio", href: '/about/bio'},
                        { name: "experience", href: '/about/experience' },
                        { name: "interests", href: '/about/interests' },
                        { name: "education", href: '/about/education' }
                    ]
                },
                "contacts": {
                    "name": "contacts",
                    "open": true,
                    "items": [
                        { name: "donvov1990@gmail.com", href: 'mailto:donvov1990@gmail.com', target: '_blank'},
                        { name: "@volodymyrDashuk", href: 'https://t.me/volodymyrDashuk', target: '_blank' },
                    ],
                }
            }
        };
    },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.accordion {
    .accordion-item {
        &:not(:first-of-type) {
            .accordion-title {
                border-top: 1px solid var.$lines;
            }
        }

        &:last-of-type {
            .accordion-title {
                border-bottom: 1px solid var.$lines;
            }
        }

        &.active {
            .accordion-title {
                border-bottom: 1px solid var.$lines;

                &:before {
                    transition: .2s all;
                    transform: rotate(180deg);
                }
            }
        }

        &.personal-info {
            .accordion-list-item {
                .accordion-list-link {
                    &:before {
                        background: var.$folder-icon no-repeat;
                    }
                }
            }
        }

        &.contacts {
            .accordion-list-item:first-of-type {
                .accordion-list-link {
                    &:before {
                        background: var.$email-icon no-repeat;
                    }
                }
            }

            .accordion-list-item:last-of-type {
                .accordion-list-link {
                    &:before {
                        background: var.$telegram-icon no-repeat;
                    }
                }
            }
        }
    }

    .accordion-title {
        position: relative;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        color: var.$secondary-white;
        cursor: pointer;

        &:before {
            display: inline-block;
            content: '';
            width: 9px;
            height: 6px;
            background: var.$arrow-fill-icon no-repeat;
            transition: .2s all;
        }

        span {
            padding-left: 10px;
        }
    }

    .accordion-list {
        padding: 22px 15px 30px;
    }

    .accordion-list-item {
        margin-bottom: 10px;
        position: relative;
        display: flex;
        align-items: center;
    }

    .accordion-list-link {
        display: flex;
        align-items: center;
        text-decoration: none;

        span {
            padding-left: 10px;
        }

        &:before {
            display: inline-block;
            content: '';
            width: 20px;
            height: 18px;
        }
    }
}

</style>
