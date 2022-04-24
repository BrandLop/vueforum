import { createApp } from 'vue'
import App from './App.vue'
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

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
