import { createRouter, createWebHistory } from "vue-router"
import Logistics from '../pages/Logistics.vue'
import Content from '../pages/Content.vue'
import Schedule from '../pages/Schedule.vue'
import Policies from '../pages/Policies.vue'
import OfficeHours from '../pages/OfficeHours.vue'

const router = createRouter({
    base: "/CPSC483-website",
    history: createWebHistory("/CPSC483-website"),
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
        }
    ]
})

export default router