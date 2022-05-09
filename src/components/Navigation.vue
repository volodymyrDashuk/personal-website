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
        <nav class="navigation">
            <router-link class="navigation-link" to="/">_hello</router-link>
            <router-link class="navigation-link" to="/about">_about-me</router-link>
            <router-link class="navigation-link" to="/projects">_projects</router-link>
            <router-link class="navigation-link" to="/contact">_contact-me</router-link>
        </nav>
    </div>
</template>

<style lang="scss">
    .header {
        display: flex;

        .logo {

        }

        .navigation {

        }
    }
</style>
