<template>
    <p class="title">// Code showcase:</p>
    <pre v-highlightjs>
        <code class="javascript">
class About extends Me {
   constructor() {
       this.name = 'Volodymyr Dashuk'
       this.email = 'donvov1990@gmail.com'
    }

    curentPlaceOfWork() {
        return [
            { 'company' : 'Magecom' },
            { 'position' : 'Front-end Developer' }
        ]
    }

    workingWith() {
        return [
            'HTML5, 'CSS3', 'SASS / LESS', 'Bootstrap', 'Responsive layout',
            'Cross-browser compatibility', 'Web Accessibility', 'npm / yarn',
            'Webpack/Gulp/Grunt, 'Javascript', 'jQuery', 'Vue.js', 'Knockout.js',
            'Require.js', 'Magento 2', 'Laravel', 'Docker', 'GitHub/GitLab/Bitbucket',
            'Visual Studio Code', 'PHPStorm', 'Adobe Photoshop', 'Adobe Illustrator',
            'Figma', 'Zeplin', 'Avocode'
            ]
    }

    currentlyLearning() {
        return [
            'Magento 2', 'Vue.js', 'Vuex', 'Magento PWA Studio'
            ]
    }

    petProjects() {
        return [
            { 'Tim (Time logging project)' : 'https://tim-assistant.netlify.app/' }
        ]
    }

    crazyAbout() {
        return [
            'coding', 'AC/DC', 'bicycle riding', 'video games'
        ]
    }
}
        </code>
    </pre>
</template>

<style lang="scss">
@use "src/styles/variables" as var;

.hljs {
    display: block;
    overflow-x: auto;
    padding: 15px;
    background: #011221;
    border: 1px solid #1E2D3D;
    border-radius: 15px;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-section,
.hljs-link {
    color: #E99287;
}

.hljs-function .hljs-keyword {
    color: #ff79c6;
}

.hljs,
.hljs-subst {
    color: #607B96;
}

.hljs-string {
    color: #607B96;
}

.hljs-title,
.hljs-name,
.hljs-type,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
    color: #4D5BCE;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
    color: #6272a4;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-type,
.hljs-name,
.hljs-strong {
    font-weight: bold;
}
</style>
