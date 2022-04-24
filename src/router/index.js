import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'threadshow',
        component: PageThreadShow,
        props:true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})