import { createStore } from 'vuex'

export default createStore({
    state: {
        popUp: false
    },
    mutations: {
        addStudentForm(state) {
            state.popUp = true;
        },
        closeForm(state) {
            state.popUp = false;
        },
    }
})