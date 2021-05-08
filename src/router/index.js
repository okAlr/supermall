import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})
