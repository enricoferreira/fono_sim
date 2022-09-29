export const reports_routes = [
    {
        path: '/relatorios',
        name: 'RelatoriosGeralRoute',
        component: () => import('../../views/ViewRelatoriosGeral.vue')
    },
    {
        path: '/dashboard',
        name: 'DashboardRoute',
        component: () => import('../../views/ViewDash.vue')
    },
    {
        path: '/evolucao',
        name: 'EvolucaoRoute',
        component: () => import('../../views/ViewEvolucao.vue')
    },
]