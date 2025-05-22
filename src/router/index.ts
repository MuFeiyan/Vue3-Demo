import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { repoName } from '@/constants'
import { useUserStore } from '@/store/user'
import Layout from '@/layouts/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/',
    redirect: '/home' // 根路径重定向到 /home
  },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/home', component: () => import('@/pages/Home/index.vue') },
      { path: '/about', component: () => import('@/pages/About.vue') }
    ],
    meta: { requiresAuth: true } // 需要登录才能访问页面
  }
]

const router = createRouter({
  history: createWebHistory(`/${repoName}/`), //
  routes
})
// 路由守卫：每次跳转前执行
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.token) {
    // 如果访问的页面需要登录，且用户未登录，跳转到登录页
    next('/login')
  } else {
    next()
  }
})
export default router
