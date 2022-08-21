import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import Logistics from '../pages/Logistics.vue'
import Content from '../pages/Content.vue'
import Schedule from '../pages/Schedule.vue'
import Policies from '../pages/Policies.vue'
import OfficeHours from '../pages/OfficeHours.vue'
import Staff from '../pages/Staff.vue'

const router = createRouter({
    base: import.meta.env.BASE_URL,
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Logistics
        },
        {
            path: '/logistics',
            component: Logistics
        },
        {
            path: '/content',
            component: Content,
        },
        {
            path: '/schedule',
            component: Schedule,
        },
        {
            path: '/policies',
            component: Policies,
        },
        {
            path: '/officehours',
            component: OfficeHours,
        }, {
            path: '/staff',
            component: Staff
        }
    ]
})

export default router