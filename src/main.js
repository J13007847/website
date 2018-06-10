import App from './App.vue'
import routes from "./routerConfig"
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
var axios_instance = axios.create({
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    header:{'Access-Control-Allow-Origin':'*'}
})
Vue.use(VueAxios, axios_instance)

Vue.use(VueAxios,axios)
 const router = new VueRouter({
routes: routes,
mode:"history",
scrollBehavior (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 500)
  })
}

})
new Vue({
  el: '#app',
  router,
  render:h=>h(App)

})
