import { reports_routes } from './reports'
export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    ...reports_routes
  ]