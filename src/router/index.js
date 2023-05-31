import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/components/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('/src/views/Home.vue'),
        children: [
            // {
            //     path: '/',
            //     name: 'Dashboard1',
            //     component: () => import('../views/DashBoards/dashboard1.vue'),
            // },
            {
                path: '/dashboard1',
                name: 'Dashboard1',
                component: () => import('../views/DashBoards/dashboard1.vue'),
            },
        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
