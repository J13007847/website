import Start from './components/start.vue'
import Pro from './components/Pro.vue'
import Home from './components/Home.vue'
import Camp from './components/Camp.vue'
import Contact from './components/Contact.vue'
import Web from './components/Web.vue'
import Exp from './components/Exp.vue'
import Hobby from './components/Hobby.vue'
import H5 from './components/H5.vue'
export default[
	{ path: '/start', component: Start },
	{path:"/pro",component:Pro},
	{path:"/home",component:Home},
	{path:"/camp",component:Camp,
	children:[
		{ path: '/camp/web', component: Web },
		{ path: '/camp/exp', component: Exp},
		{ path: '/camp/hobby', component: Hobby },
		{ path: '/camp/h5', component: H5 },
		{ path: '/', component: Web }
	]},
	{path:"/contact",component:Contact},
]