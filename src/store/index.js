import {createStore} from 'vuex'
import aboutMe from './modules/aboutMe';
import blog from './modules/blog';
import contact from './modules/contact';
import hello from './modules/hello';
import projects from './modules/projects';
import lab from './modules/lab';

export default createStore({
    modules: {
        aboutMe,
        blog,
        contact,
        hello,
        projects,
        lab
    }
})
