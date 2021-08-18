import Vue from 'vue'
import VueRouter from 'vue-router'
import MyProfile from '../views/MyProfile.vue'
import MyAwards from '../views/MyAwards.vue'
import MyCertificate from '../views/MyCertificate.vue'
import MyProfileModification from '../views/MyProfileModification.vue'
import InternationalActivity from '../views/InternationalActivity.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MyProfile',
            component: MyProfile
        },
        {
            path: '/awards',
            name: 'MyAwards',
            component: MyAwards 
        },
        {
            path: '/modification',
            name: 'MyProfileModification',
            component: MyProfileModification 
        },
        {
            path: '/certification',
            name: 'MyCertificate',
            component: MyCertificate 
        },
        {
            path: '/internationalActivity',
            name: 'InternationalActivity',
            component: InternationalActivity 
        },
    ]
  });
