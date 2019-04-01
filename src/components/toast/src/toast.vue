<template>
    <div class="epp-toast-content" :style="conentPosition">
        <div class="arrow" :style="arrowPosition"></div>
    	<div class="content" :style="detailPosition" @click="toastFn">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'eppToast',
    props: {
        width: {
            type: [Number, String],
            // default: 0
        },
        height: {
            type: [Number, String],
            // default: 0
        },
        arrowLeft: {
            type: [Number, String],
            default: 0.05
        },
        left: {
            type: [Number, String],
            default: 0
        },
        top: {
            type: [Number, String],
            default: 0
        },
        padding: {
            type: [Number, String],
            default: 0.22
        }
    },
    data() {
        return {

        };
    },
    methods: {
        toastFn() {
            this.$emit('click', ...arguments);
        }
    },
    computed: {
        conentPosition() {
            let style = {};
            style = {
                top: this.top + 'rem',
                left: this.left + 'rem',
            };
            return style;
        },
        arrowPosition() {
            let style = {};
            style = {
                left: this.arrowLeft + 'rem'
            };
            return style;
        },
        detailPosition() {
            let style = {};
            style = {
                width: this.width + 'rem',
                height: this.height + 'rem',
                padding: this.padding + 'rem'
            };
            console.log(style);
            return style;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.epp-toast-content {
    position: absolute;
    .arrow{
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.8);
        border-left: .1rem solid transparent;
        border-right: .1rem solid transparent;
        border-top: 0;
    }
    .content {
        position: absolute;
        z-index: 2;
        top: 0.1rem;
        background: rgba(0, 0, 0, 0.8);
        border-radius: .1rem;
        color: #fff;
        font-size: .24rem;
    }
}
</style>
