import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/PrincipalDocente.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
}
)

export default router