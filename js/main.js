import App from './App.vue'
import Start from '../components/Header.vue';
 const routes=[
  	{ path: '/start', component: Start },
     {path:'*', redirect:'/start'}
        ];
 const router = new VueRouter({
routes: routes,
mode:"history"

})
const app = new Vue({
		router
}).$mount('#app')