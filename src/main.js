import Vue from 'vue'                            //vue
import App from './App.vue'                      //main
import router from './routes/index'                    //所有routes

import './assets/css/normalize.css'  // normalize重置浏览器样式

import demo from '../src/static/common.js'
Vue.use(demo)


new Vue({
	router,
	el: "#app",
	render: h => h(App)
})
