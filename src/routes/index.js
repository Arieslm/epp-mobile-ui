import VueRouter from 'vue-router'
import Vue from "vue";
// import demo from './map/demo'
import layout from './map/layout'
// import list from './map/list'

Vue.use(VueRouter)

const router = new VueRouter ({
	mode:'history',
	routes: [
		// ...demo,
		...layout,
		// ...list
	]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
