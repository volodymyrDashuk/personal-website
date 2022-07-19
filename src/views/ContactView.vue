<template>
    <div class="contact content-wrapper">
        <Sidebar :accordion="getContacts"/>
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
import {mapGetters} from "vuex";
export default {
    components: {Sidebar, ContactUsForm, ContactUsCodeShowcase},
    data() {
        return {
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
    },
    computed: {
        ...mapGetters(['getContacts'])
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

//  Common
.contact {
    .content {
        display: flex;
    }

    .contact-form,
    .submitted-section {
        padding: 100px 5% 17px;
        width: 40%;
        border-right: 1px solid var.$lines;
        overflow-y: scroll;
    }

    .submitted-section {
        text-align: center;

        .submitted-text {
            margin-bottom: 20px;
        }
    }

    .code-showcase {
        padding: 100px 7% 17px;
        width: 60%;
        overflow-y: scroll;
    }
}

//  Mobile
@media (max-width: var.$tablet__small) {
    .contact {
        .content {
            flex-direction: column;
        }

        .contact-form,
        .submitted-section {
            width: 100%;
            padding: 38px 17px;
            border-right: none;
        }

        .code-showcase {
            display: none;
        }
    }
}

//  Desktop
@media (min-width: var.$tablet__small) {
    .contact {
        .content {
            width: 80%;
        }
    }
}
</style>
