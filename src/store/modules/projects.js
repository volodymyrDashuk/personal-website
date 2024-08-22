import projectsFilters from '@/content/projects/projectsFilters.json';
import projectsListData from '@/content/projects/projectsList.json';

export default {
    state: {
        projectsAccordion: projectsFilters,
        projectsList: projectsListData,
    },
    getters: {
        getProjectsAccordion(state) {
            return state.projectsAccordion;
        },
        getProjectList(state) {
            return state.projectsList;
        }
    }
};
