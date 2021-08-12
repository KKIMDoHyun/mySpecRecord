import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userInfo: {
            name: "dd",
            birthday: "",
            phoneNumber: "",
            university: "",
            introduction: "",
        },
    },
    mutations: {
        modifyInfo(state, payload) {
            state.userInfo = payload;
        }
    }
})