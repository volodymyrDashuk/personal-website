<template>
    <div class="bio comment-content">
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
            <span class="comment">*</span>
        </div>
        <div data-line-nr="04" class="code-line">
            <span class="comment">*</span> I am a Front-end developer with
        </div>
        <div data-line-nr="05" class="code-line">
            <span class="comment">*</span> {{ experienceNumb }} years of commercial experience.
        </div>
        <div data-line-nr="06" class="code-line">
            <span class="comment">*</span>
        </div>
        <div data-line-nr="07" class="code-line">
            <span class="comment">*</span> I enjoy solving issues,
        </div>
        <div data-line-nr="08" class="code-line">
            <span class="comment">*</span> creating smart user interfaces,
        </div>
        <div data-line-nr="09" class="code-line">
            <span class="comment">*</span> developing extensive web experience
        </div>
        <div data-line-nr="10" class="code-line">
            <span class="comment">*</span> and web applications.
        </div>
        <div data-line-nr="11" class="code-line">
            <span class="comment">*</span> I use HTML, CSS, and JavaScript
        </div>
        <div data-line-nr="12" class="code-line">
            <span class="comment">*</span> to create adaptive websites
        </div>
        <div data-line-nr="13" class="code-line">
            <span class="comment">*</span> and web applications
        </div>
        <div data-line-nr="14" class="code-line">
            <span class="comment">*</span> that give users the best
        </div>
        <div data-line-nr="15" class="code-line">
            <span class="comment">*</span> and most appropriate experience
        </div>
        <div data-line-nr="16" class="code-line">
            <span class="comment">*</span> suitable for their devices and browsers.
        </div>
        <div data-line-nr="17" class="code-line">
            <span class="comment">*</span>
        </div>
        <div data-line-nr="18" class="code-line">
            <span class="comment">*</span> I write standards-based code that is semantic,
        </div>
        <div data-line-nr="19" class="code-line">
            <span class="comment">*</span> accessible and easy to maintain,
        </div>
        <div data-line-nr="20" class="code-line">
            <span class="comment">*</span> cross-browser and productive.
        </div>
        <div data-line-nr="21" class="code-line">
            <span class="comment">*</span>
        </div>
        <div data-line-nr="22" class="code-line">
            <span class="comment">*</span> I build successful adaptive websites
        </div>
        <div data-line-nr="23" class="code-line">
            <span class="comment">*</span> that are fast, easy to use,
        </div>
        <div data-line-nr="24" class="code-line">
            <span class="comment">*</span> and built using best practices.
        </div>
        <div data-line-nr="25" class="code-line">
            <span class="comment">*&#x2f;</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            startDate: new Date(2018, 11), // December 2018
        };
    },
    computed: {
        experienceYears() {
            const now = new Date();
            const yearsDiff = now.getFullYear() - this.startDate.getFullYear();
            const monthsDiff = now.getMonth() - this.startDate.getMonth();

            return yearsDiff - (monthsDiff < 0 ? 1 : 0);
        },
        experienceNumb() {
            const now = new Date();
            const monthsDiff = (now.getFullYear() - this.startDate.getFullYear()) * 12 + now.getMonth() - this.startDate.getMonth();
            const years = Math.floor(monthsDiff / 12);
            const remainingMonths = monthsDiff % 12;

            if (remainingMonths >= 9) {
                return `almost ${years + 1}`;
            } else if (remainingMonths >= 1) {
                return `more than ${years}`;
            } else {
                return `${years}`;
            }
        }
    }
};
</script>
