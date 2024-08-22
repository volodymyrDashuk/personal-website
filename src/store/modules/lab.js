import labFilters from '@/content/lab/labFilters.json';
import labsListData from '@/content/lab/labsList.json';

export default {
    state: {
        labsAccordion: labFilters,
        labsList: labsListData,
    },
    getters: {
        getLabsAccordion(state) {
            return state.labsAccordion;
        },
        getLabList(state) {
            return state.labsList;
        }
    }
};
