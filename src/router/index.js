import { createWebHashHistory, createRouter } from 'vue-router'

import LoginView from '../views/login/index.vue'
import HomeView from '../views/home/index.vue'
import NotFoundView from '../views/404/index.vue'




const routes = [
    { 
        path: '/login', 
        component: LoginView
    },
    {
        path: '/home',
        component: HomeView
    },
    {
        path: '/404',
        component: NotFoundView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router