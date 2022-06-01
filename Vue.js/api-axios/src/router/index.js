import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Api from '../views/Api.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/api',
        name: 'api',
        component: Api
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router