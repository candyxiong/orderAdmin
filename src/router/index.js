import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Register from '@/components/register'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {path:'/',component:Home},
    {path:'/menu',component:Menu},
    {path:'/admin',component:Admin},
    {path:'/about',component:About},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
  ]
})
