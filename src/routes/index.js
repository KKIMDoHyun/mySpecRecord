import Vue from 'vue'
import VueRouter from 'vue-router'
import MyProfile from '../views/MyProfile.vue'
import MyProfileModification from '../views/MyProfileModification.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MyProfile,
        },
        {
            path: '/modification',
            component: MyProfileModification,
        }
        
    ]
  });
