export const reports_routes = [
    {
        path: '/',
        name: 'DashboardRoute',
        component: () => import('../../views/ViewDash.vue')
    },
    {
        path: '/evolucao',
        name: 'EvolucaoRoute',
        component: () => import('../../views/ViewEvolucao.vue')
    },
]