import { createRouter, createWebHistory } from "vue-router";
import TaskIndex from "@/views/TaskIndex.vue"
import Login from "@/views/Login.vue"


const routes = [
  {
    path: '/', 
    component: TaskIndex, 
    name: 'tasks',
    children: [
      { path: 'login', component: Login, name: 'login' }
    ]
  }

  ]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router