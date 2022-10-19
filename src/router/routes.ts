import Home from "@/views/Home.vue"

const routes = [
  {
    path: '/',
    name:'Accueil',
    component: Home
  },
  {
    path: '/modules',
    name:'Modules',
    //component: () => import('@/views/Modules.vue')
  }
]

export default routes