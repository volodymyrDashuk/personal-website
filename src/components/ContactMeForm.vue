<template>
    <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
            <label
                class="label"
                for="name"
            >
                _name:
            </label>
            <input
                id="name"
                type="text"
                v-model.trim="name"
            >
            <span class="error-message" v-if="v$.name.$error">
                {{ v$.name.$errors[0].$message }}
            </span>
        </div>
        <div class="form-group">
            <label
                class="label"
                for="email"
            >
                _email:
            </label>
            <input
                id="email"
                type="email"
                v-model.trim="email"
            >
            <span class="error-message" v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
            </span>
        </div>
        <div class="form-group">
            <label
                class="label"
                for="message"
            >
                _message:
            </label>
            <textarea
                id="message"
                v-model.trim="message"
            />
            <span class="error-message" v-if="v$.message.$error">
                {{ v$.message.$errors[0].$message }}
            </span>
        </div>
        <div class="form-group">
            <button type="submit" class="button-secondary">submit-message</button>
        </div>
    </form>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email } from  '@vuelidate/validators';

export default {
    emits: ['name', 'email', 'message'],
    watch: {
        name(newName) {
            this.$emit('name', this.name)
        },
        email(newEmail) {
            this.$emit('email', this.email)
        },
        message(newMessage) {
            this.$emit('message', this.message)
        }
    },
    data() {
        return {
            v$: useValidate(),
            name: '',
            email: '',
            message: ''
        };
    },
    validations() {
        return {
            name: { required },
            email: { email, required },
            message: { required }
        }
    },
    methods: {
        submitForm() {
            this.v$.$touch();
            if (this.v$.$error) return
            alert('work')
        }
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.contact-form {
    .form-group:not(:last-of-type) {
        margin-bottom: 24px;
    }

    .label {
        display: inline-block;
        margin-bottom: 10px;
    }
}
</style>
