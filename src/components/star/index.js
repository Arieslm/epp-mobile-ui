import star from './src/star';

/* istanbul ignore next */
star.install = function(Vue) {
  Vue.component(star.name, star);
};

export default star;
