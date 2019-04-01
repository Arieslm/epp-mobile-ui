import datePicker from './src/datepicker.vue'

/* istanbul ignore next */
datePicker.install = function (Vue) {
    Vue.component(datePicker.name, datePicker)
}

export default datePicker;
