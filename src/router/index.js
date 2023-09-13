import { createRouter, createWebHistory } from "vue-router";
import TaskIndex from "@/views/TaskIndex.vue"
import Login from "@/views/Login.vue"


const routes = [
    { path: '/', component: TaskIndex },
    { path: '/login', component: Login },

  ]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router