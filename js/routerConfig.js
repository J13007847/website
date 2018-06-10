import Rhome from './components/Home.vue'
import Rnew from './components/New.vue'
import Rcenter from './components/Center.vue'
import Reg from './components/Reg.vue'
export default[
 { 
    path: '/', 
    redirect: '/home' 
  },
  { 
    path: '*', 
    redirect: '/home' 
  },
	{
		path:'/home',
		component:Rhome
	},
	{
		path:'/new',
		component:Rnew
	},
	{
		path:'/center',
		component:Rcenter
	},
	{
		path:'/reg',
		component:Reg
	}
]