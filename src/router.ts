import { createRouter, createWebHistory } from 'vue-router'

type TRoute = {
  path: string,
  component: () => any
}
const route: TRoute[] = [
  {
    path: '/hello',
    component:  () => import('./components/HelloWorld.vue'),
  },
  {
    path: '/',
    component:  () => import('./page/HomePage.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component:  () => import('./views/ErrorCom.vue'),
  },
]
export default createRouter({
  history: createWebHistory(),
  routes: route
})
