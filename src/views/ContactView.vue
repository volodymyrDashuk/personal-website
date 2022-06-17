<template>
    <div class="contact">
        <Sidebar :accordion="contacts"/>
        <div class="content">
            <ContactUsForm @name="changeName" @email="changeEmail" @message="changeMessage"/>
            <ContactUsCodeShowcase :name="name" :email="email" :message="message"/>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import ContactUsForm from "@/components/ContactMeForm";
import ContactUsCodeShowcase from "@/components/ContactMeCodeShowcase";

export default {
    components: {Sidebar, ContactUsForm, ContactUsCodeShowcase},
    data() {
        return {
            contacts: {
                "contacts": {
                    "name": "contacts",
                    "open": true,
                    "checkbox": false,
                    "items": [
                        { name: "donvov1990@gmail.com", href: 'mailto:donvov1990@gmail.com', target: '_blank'},
                        { name: "@volodymyrDashuk", href: 'https://t.me/volodymyrDashuk', target: '_blank' }
                    ]
                }
            },
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        changeName(name) {
            this.name = name
        },
        changeEmail(email) {
            this.email = email
        },
        changeMessage(message) {
            this.message = message
        }
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.contact {
    height: 100%;
    display: flex;

    .sidebar {
        max-width: 311px;
        width: 100%;
        border-right: 1px solid var.$lines;
    }

    .content {
        width: 100%;
        display: flex;
    }

    .contact-form {
        padding: 100px 5% 17px;
        width: 40%;
        border-right: 1px solid var.$lines;
    }

    .code-showcase {
        padding: 100px 7% 17px;
        width: 60%;
    }

    @media (max-width: var.$tablet__small) {
        flex-direction: column;

        .sidebar {
            max-width: none;
        }

        .content {
            flex-direction: column;
        }

        .contact-form {
            width: 100%;
            padding: 38px 17px;
            border-right: none;
        }

        .code-showcase {
            display: none;
        }
    }
}
</style>
