import contactsData from '@/content/contact/contactFilters.json';

export default {
    state: {
        contacts: contactsData,
    },
    getters: {
        getContacts(state) {
            return state.contacts;
        }
    }
};
