import Vue from 'vue'
import VueRouter from 'vue-router'
import MyProfile from '../components/MyProfile.vue'
import MyAwards from '../components/MyAwards.vue'
import MyCertificate from '../components/MyCertificate.vue'
import MyProfileModification from '../components/MyProfileModification.vue'
import InternationalActivity from '../components/InternationalActivity.vue'

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
