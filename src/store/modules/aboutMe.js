import aboutMeData from '@/content/about/aboutMeFilters.json';

export default {
    state: {
        aboutMe: aboutMeData,
    },
    getters: {
        getAboutMe(state) {
            return state.aboutMe;
        }
    }
};
