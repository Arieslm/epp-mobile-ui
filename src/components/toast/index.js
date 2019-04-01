import toast from './src/toast';

/* istanbul ignore next */
toast.install = function(Vue) {
  Vue.component(toast.name, toast);
};

export default toast;
