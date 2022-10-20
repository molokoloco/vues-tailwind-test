import Home from "@/views/Home.vue"

const routes = [
  {
    path: process.env.NODE_ENV === 'production' ? '/vues-tailwind-test/dist/' : './',
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