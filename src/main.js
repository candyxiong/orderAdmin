// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//全局axios链接
axios.defaults.baseURL = 'https://wd5509504244buvhbx.wilddogio.com/'

Vue.config.productionTip = false

//全局守卫
/*router.beforeEach((to,from,next) => {
  //console.log(to);
  if(to.path == '/login' || to.path == '/register'){
      next()
  }else{
    alert('请先登录')
      next('/login')
  }
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
