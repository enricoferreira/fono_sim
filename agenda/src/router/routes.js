import { reports_routes } from './reports'
export const routes = [
    { path: '/', name: 'Home', component: () => import('../views/ViewHome.vue') },
    { path: '/agenda', name: 'Agenda', component: () => import('../views/ViewAgenda.vue') },
    ...reports_routes
  ]