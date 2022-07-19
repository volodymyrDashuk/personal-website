<template>
    <div class="contact">
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

.contact {
    height: 100%;
    display: flex;

    .sidebar {
        border-right: 1px solid var.$lines;

        @media (min-width: var.$tablet__small) {
            min-width: 260px;
            width: 20%;
        }
    }

    .content {
        display: flex;

        @media (min-width: var.$tablet__small) {
            width: 80%;
        }
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

    @media (max-width: var.$tablet__small) {
        flex-direction: column;

        .sidebar {
            max-width: none;
        }

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
</style>
