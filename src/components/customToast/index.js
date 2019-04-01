import customToast from './src/customToast';

/* istanbul ignore next */
customToast.install = function(Vue) {
  Vue.component(customToast.name, customToast);
};

export default customToast;
