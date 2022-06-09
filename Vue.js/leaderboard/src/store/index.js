import { createStore } from 'vuex'

export default createStore({
    state: {
        popUp: false,
        updateStudentPopUp: false
    },
    mutations: {
        addStudentForm(state) {
            state.popUp = true;
        },
        updateStudentForm(state) {
            state.updateStudentPopUp = true;
        },
        closeForm(state) {
            state.popUp = false;
            state.updateStudentPopUp = false;
        },
    }
})