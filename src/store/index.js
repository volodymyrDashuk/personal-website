import {createStore} from 'vuex'
import aboutMe from './modules/aboutMe';
import blog from './modules/blog';
import contact from './modules/contact';
import hello from './modules/hello';
import projects from './modules/projects';

export default createStore({
    modules: {
        aboutMe,
        blog,
        contact,
        hello,
        projects
    }
})
