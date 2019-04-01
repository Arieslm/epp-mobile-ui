import epptable from './src/table.vue';
/* istanbul ignore next */
epptable.install = function(Vue) {
    Vue.component(epptable.name, epptable);
};
export default epptable;
