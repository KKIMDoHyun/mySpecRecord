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
    },
    fetchAwardList() {
        const arr = [];
        if (JSON.parse(localStorage.getItem('awardList'))) {
            for (let i = 0; i < JSON.parse(localStorage.getItem('awardList')).length; i++) {
                arr.push(JSON.parse(localStorage.getItem('awardList'))[i])
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        userInfo: storage.fetchUser(),
        certifications: storage.fetchCertification(),
        awardList: storage.fetchAwardList()
    },
    mutations: {
        modifyInfo(state, payload) {
            state.userInfo = payload;
            localStorage.setItem("user", JSON.stringify(state.userInfo));
        },
        addOneCertificate(state, payload) {
            state.certifications.push(JSON.parse(payload));
            localStorage.setItem("certifications", JSON.stringify(state.certifications));
        },
        addOneAward(state, payload) {
            state.awardList.push(JSON.parse(payload))
            localStorage.setItem("awardList", JSON.stringify(state.awardList));
        },
        removeOneCertificate(state, payload) {
            state.certifications.splice(payload.index, 1);
            console.log(state.certifications)
            localStorage.removeItem('certifications');
            localStorage.setItem("certifications", JSON.stringify(state.certifications));
        }
    },
        
})