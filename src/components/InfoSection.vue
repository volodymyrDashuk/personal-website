<template>
    <div :class="sectionClass">
        <div :data-line-nr="1" class="code-line">
            <span class="comment">&#x2f;**</span>
        </div>
        <div v-for="(line, index) in formattedContent" :key="index" :data-line-nr="index + 2" class="code-line">
            <span class="comment">*</span> <span v-html="line"></span>
        </div>
        <div :data-line-nr="formattedContent.length + 2" class="code-line">
            <span class="comment">*&#x2f;</span>
        </div>
    </div>
</template>

<script>
import aboutContent from '@/content/about/aboutContent.json';

export default {
    data() {
        return {
            sectionTitle: '',
            content: [],
            sectionClass: 'comment-content'
        }
    },
    computed: {
        formattedContent() {
            return this.content.map(line => line.trim());
        }
    },
    mounted() {
        const section = this.$route.name.toLowerCase();

        if (aboutContent[section]) {
            this.sectionTitle = aboutContent[section].title;
            this.content = aboutContent[section].content;
            this.sectionClass = section;
        }
    }
}
</script>
