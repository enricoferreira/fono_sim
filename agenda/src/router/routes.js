import { reports_routes } from './reports'
export const routes = [
    { path: '/', component: () => import('../views/ViewHome.vue') },
    { path: '/about', component: () => import('../views/ViewAbout.vue') },
    ...reports_routes
  ]