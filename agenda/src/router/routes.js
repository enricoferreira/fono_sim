import { reports_routes } from './reports'
export const routes = [
    { path: '/', component: () => import('../views/ViewHome.vue') },
    { path: '/about', name: 'About', component: () => import('../views/ViewAbout.vue') },
    ...reports_routes
  ]