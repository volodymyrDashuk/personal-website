<template>
    <div class="about">
        <Sidebar :accordion="aboutMe"/>
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
export default {
    components: {CodeShowcase, Sidebar, Bio},
    data() {
        return {
            aboutMe: {
                "personalInfo": {
                    "name": "personal-info",
                    "open": true,
                    "checkbox": false,
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
                    "checkbox": false,
                    "items": [
                        { name: "donvov1990@gmail.com", href: 'mailto:donvov1990@gmail.com', target: '_blank'},
                        { name: "@volodymyrDashuk", href: 'https://t.me/volodymyrDashuk', target: '_blank' }
                    ]
                }
            }
        }
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.about {
    height: 100%;
    display: flex;

    .sidebar {
        max-width: 311px;
        width: 100%;
        border-right: 1px solid var.$lines;
    }

    .information {
        width: 50%;
        padding: 17px 17px 17px 80px;
        border-right: 1px solid var.$lines;
    }

    .code-showcase {
        width: 50%;
        padding: 17px 40px;
    }

    @media (max-width: var.$tablet__small) {
        flex-direction: column;

        .sidebar {
            max-width: none;
        }

        .information {
            width: 100%;
            padding: 38px 17px;
            border-right: none;
        }

        .code-showcase {
            width: 100%;
            padding: 38px 17px;
        }
    }
}
</style>
