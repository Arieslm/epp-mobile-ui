import panel from './src/panel.vue';
/* istanbul ignore next */
panel.install = function(Vue) {
  Vue.component(panel.name, panel);
};

export default panel;
