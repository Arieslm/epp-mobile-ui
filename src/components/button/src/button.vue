<template>
    <button :disabled="disabled" :class="classes" :type="nativeType" :style="styles" @click="handleClick">
        <slot></slot>
    </button>
</template>
<script type="text/babel">
import utils from '@/assets/js/utils.js';
export default {
    name: 'eppButton',
    props: {
        disabled: Boolean,
        nativeType: {
            type: String,
            default: 'button'
        },
        size: {
            validator(value) {
                return ['small', 'large', 'normal', 'all'].indexOf(value) > -1;
            },
            default: 'all'
        },
        bgcolor: {
            validator(value) {
                if (!value) return true;
                return utils.isColor(value);
            },
            // default: '#867ae4'
        },
        bdcolor: {
            validator(value) {
                if (!value) return true;
                return utils.isColor(value);
            },
            // default: '#ddd'
        },
        color: {
            validator(value) {
                if (!value) return true;
                return utils.isColor(value);
            },
            // default: '#fff'
        },
    },
    data() {
        return {
            text: 'Button'
        };
    },
    methods: {
        handleClick() {
            this.$emit('click', ...arguments);
        }
    },
    computed: {
        classes() {
            let ret = ['epp-button'];
            let s = 'epp-button-' + this.size;
            ret.push(s);
            if (this.disabled) {
                ret.push('epp-button-is-disabled');
            }
            return ret;
        },
        styles() {
            let style = {};
            style = {
                backgroundColor: this.bgcolor,
                color: this.color,
                borderColor: this.bdcolor
            };
            return style;
        }
    }
};
</script>
<style lang="scss" scoped>
    @import './button.scss';
</style>
