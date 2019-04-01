<template>
    	<input type="checkbox"
        v-model="checked"
        :disabled="disabled"
        :style="{color: color}"
        class="epp-toggle-button">
</template>

<script type="text/babel">
import utils from '@/assets/js/utils.js';
export default {
    name: 'eppSwitch',
    data() {
        return {
            checked: this.value
        };
    },
    props: {
        value: {
            type: [String, Number, Boolean],
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            validator(value) {
                if (!value) return true;
                return utils.isColor(value);
            },
            default: '#4cd964'
        },
    },
    mounted() {
    },
    watch: {
        checked(val) {
            this.$emit('checkedFn', val)
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.#{$css-prefix} {
    &-toggle-button{
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        width: 1.04rem;
        height: .64rem;
        background: #dfdfdf;
        border-radius: .32rem;
        border: 0.01rem solid #dfdfdf;
        outline: 0;
        box-sizing: border-box;
    }
    &-toggle-button:checked{
        border-color: #4cd964;
        background-color: #4cd964;
    }
    &-toggle-button:before, &-toggle-button:after{
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: .6rem;
        border-radius: .3rem;
        transition: transform 0.3s;
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        -webkit-transition: -webkit-transform 0.3s;
    }
    &-toggle-button:before{
        width: 1rem;
        background-color: #fdfdfd;
    }
    &-toggle-button:after{
        width: .6rem;
        background-color: white;
        box-shadow: 0 .01rem .05rem rgba(0, 0, 0, 0.4);
    }
    &-toggle-button:checked:before{
        transform: scale(0);
        -webkit-transform: scale(0);
    }
    &-toggle-button:checked:after{
        transform: translateX(.4rem);
        -webkit-transform: translateX(.4rem);
    }
    &-toggle-button {
        &:checked {
            border-color: currentColor;
            background-color: currentColor;
            &:before {
                transform: scale(0);
            }
            &:after {
                transform: translateX(.42rem);
            }
        }
    }
}
</style>
