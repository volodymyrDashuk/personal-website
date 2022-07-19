<template>
    <div class="bio">
        <div class="mobile-title">
            <span>&#x2f;&#x2f; personal-info</span> &#x2f; bio
        </div>

        <div data-line-nr="01" class="code-line">
            <span class="comment">&#x2f;**</span>
        </div>
        <div data-line-nr="02" class="code-line">
            <span class="comment">*</span> About me
        </div>
        <div data-line-nr="03" class="code-line">
            <span class="comment">*</span> I am a Front-end developer with
        </div>
        <div data-line-nr="04" class="code-line">
            <span class="comment">*</span> 4 years of commercial experience.
        </div>
        <div data-line-nr="05" class="code-line">
            <span class="comment">*</span>
        </div>
        <div data-line-nr="06" class="code-line">
            <span class="comment">*</span> I enjoy solving issues,
        </div>
        <div data-line-nr="07" class="code-line">
            <span class="comment">*</span> creating smart user interfaces,
        </div>
        <div data-line-nr="08" class="code-line">
            <span class="comment">*</span> developing extensive web experience
        </div>
        <div data-line-nr="09" class="code-line">
            <span class="comment">*</span> and web applications.
        </div>
        <div data-line-nr="10" class="code-line">
            <span class="comment">*</span> I use HTML, CSS, and JavaScript
        </div>
        <div data-line-nr="11" class="code-line">
            <span class="comment">*</span> to create adaptive websites
        </div>
        <div data-line-nr="12" class="code-line">
            <span class="comment">*</span> and web applications
        </div>
        <div data-line-nr="13" class="code-line">
            <span class="comment">*</span> that give users the best
        </div>
        <div data-line-nr="14" class="code-line">
            <span class="comment">*</span> and most appropriate experience
        </div>
        <div data-line-nr="15" class="code-line">
            <span class="comment">*</span> suitable for their devices and browsers.
        </div>
        <div data-line-nr="16" class="code-line">
            <span class="comment">*</span>
        </div>
        <div data-line-nr="17" class="code-line">
            <span class="comment">*</span> I write standards-based code that is semantic,
        </div>
        <div data-line-nr="18" class="code-line">
            <span class="comment">*</span> accessible and easy to maintain,
        </div>
        <div data-line-nr="19" class="code-line">
            <span class="comment">*</span> cross-browser and productive.
        </div>
        <div data-line-nr="20" class="code-line">
            <span class="comment">*</span>
        </div>
        <div data-line-nr="21" class="code-line">
            <span class="comment">*</span> I build successful adaptive websites
        </div>
        <div data-line-nr="22" class="code-line">
            <span class="comment">*</span> that are fast, easy to use,
        </div>
        <div data-line-nr="23" class="code-line">
            <span class="comment">*</span> and built using best practices.
        </div>
        <div data-line-nr="24" class="code-line">
            <span class="comment">*&#x2f;</span>
        </div>
    </div>
</template>

<style lang="scss">
@use "src/styles/variables" as var;

.bio {
    .mobile-title {
        display: none;

        @media (max-width: var.$tablet__small) {
            display: block;
            margin-bottom: 17px;

            span {
                color: var.$secondary-white-2
            }
        }
    }
}

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
