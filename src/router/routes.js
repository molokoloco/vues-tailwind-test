import Home from "@/views/Home.vue"

const appBasePath = process.env.NODE_ENV === 'production' ? '/vues-tailwind-test/dist/' : '/'

const routes = [
  {
    path: appBasePath,
    name:'Accueil',
    component: Home
  },
  {
    path: appBasePath + 'modules/',
    name:'Modules',
    component: () => import('@/views/Modules.vue')
  }
]

export default routes