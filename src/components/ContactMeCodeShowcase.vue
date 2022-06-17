<template>
    <div class="code-showcase">
        <div data-line-nr="01" class="code-line">
            <span class="rose">const </span>
            <span class="blue">button </span>
            <span class="rose">= </span>
            <span class="blue">document.querySelector </span>
            <span class="gray">(</span>
            <span class="orange">'#sendBtn'</span>
            <span class="gray">);</span>
        </div>
        <div data-line-nr="02" class="code-line">
            &nbsp;
        </div>
        <div data-line-nr="03" class="code-line">
            <span class="rose">const </span>
            <span class="blue">message </span>
            <span class="rose">= </span>
            <span class="gray">{</span>
        </div>
        <div data-line-nr="04" class="code-line">
            &nbsp;&nbsp;&nbsp;<span class="blue">name </span>
            <span class="gray">: </span>
            <span class="orange">"{{this.name}}"</span>
            <span class="gray">,</span>
        </div>
        <div data-line-nr="05" class="code-line">
            &nbsp;&nbsp;&nbsp;<span class="blue">email </span>
            <span class="gray">: </span>
            <span class="orange">"{{this.email}}"</span>
            <span class="gray">,</span>
        </div>
        <div data-line-nr="06" class="code-line">
            &nbsp;&nbsp;&nbsp;<span class="blue">message </span>
            <span class="gray">: </span>
            <span class="orange">"{{this.message}}"</span>
            <span class="gray">,</span>
        </div>
        <div data-line-nr="07" class="code-line">
            &nbsp;&nbsp;&nbsp;<span class="gray">date </span>
            <span class="gray">: </span>
            <span class="orange">"{{formattedDate}}"</span>
        </div>
        <div data-line-nr="08" class="code-line">
            <span class="gray">}</span>
        </div>
        <div data-line-nr="09" class="code-line">
            &nbsp;
        </div>
        <div data-line-nr="10" class="code-line">
            <span class="blue">button</span>
            <span class="gray">.</span>
            <span class="blue">addEventListener</span>
            <span class="gray">(</span>
            <span class="orange">'click'</span>
            <span class="gray">,</span>
            <span class="gray"> () </span>
            <span class="rose">=> </span>
            <span class="gray">{</span>
        </div>
        <div data-line-nr="11" class="code-line">
            &nbsp;&nbsp;&nbsp;<span class="blue">form</span>
            <span class="gray">.</span>
            <span class="blue">send</span>
            <span class="gray">(</span>
            <span class="blue">message</span>
            <span class="gray">);</span>
        </div>
        <div data-line-nr="12" class="code-line">
            })
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'email', 'message'],
    data() {
        return {
            date: new Date()
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('En', {dateStyle: 'long'}).format(date);
        }
    },
    computed: {
        formattedDate() {
            return this.formatDate(this.date);
        }
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.code-line {
    z-index: 1;
    position: relative;
    margin-bottom: 10px;

    &:after {
        content: attr(data-line-nr);
        position: absolute;
        left: -40px;
        color: #607B96;
        z-index: 3;
        top: 0;
    }

    @media (max-width: var.$tablet__small) {
        display: inline-block;

        &:after {
            content: none;
        }

        .comment {
            display: none;
        }
    }
}
</style>
