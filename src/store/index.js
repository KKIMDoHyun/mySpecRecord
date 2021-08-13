import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetchUser() {
        if (localStorage.getItem('user')){
            return JSON.parse(localStorage.getItem('user'));
        }
        return '';
    },
    fetchCertification() {
        const arr = [];
        if (JSON.parse(localStorage.getItem('certifications'))) {
            for (let i = 0; i < JSON.parse(localStorage.getItem('certifications')).length; i++) {
                arr.push(JSON.parse(localStorage.getItem('certifications'))[i])
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        userInfo: storage.fetchUser(),
        certifications: storage.fetchCertification(),
    },
    mutations: {
        modifyInfo(state, payload) {
            state.userInfo = payload;
            localStorage.setItem("user", JSON.stringify(state.userInfo));
        },
        addOneCertificate(state, payload) {
            const certification = JSON.stringify(payload);
            state.certifications.push(JSON.parse(certification));
            console.log(state.certifications)
            localStorage.setItem("certifications", JSON.stringify(state.certifications));
        }
    },
        
})