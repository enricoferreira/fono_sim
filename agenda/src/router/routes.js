import { reports_routes } from './reports'
export const routes = [
    { path: '/', name: 'Home', component: () => import('../views/ViewHome.vue') },
    { path: '/agenda', name: 'Agenda', component: () => import('../views/ViewAgenda.vue') },
    { path: '/pacientes', name: 'Pacientes', component: () => import('../views/ViewPacientes.vue') },
    { path: '/atendimentos', name: 'Atendimentos', component: () => import('../views/ViewAtendimentos.vue') },
    ...reports_routes
  ]