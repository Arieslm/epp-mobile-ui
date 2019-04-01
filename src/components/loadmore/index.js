import loadmore from './src/loadmore.vue';

loadmore.install = function (Vue) {
    Vue.component(loadmore.name, loadmore)
}

export default loadmore;
