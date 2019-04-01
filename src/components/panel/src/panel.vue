<template>
<div class="epp-panel-content">
    <div class="title-content" :style="styles">
        <div class="panel-title">
            <div class="title-icon"></div>
            <div class="title-value">{{title}}</div>
        </div>
        <div v-if="zoom" class="zoom-icon" @click="zoomFn($event)"></div>
        <div v-if="zoom && show" class="line"></div>
        <div v-if="show" class="arrow-icon" @click="arrowFn" :class="panelUp ? 'arrow-up' : 'arrow-down'"></div>
    </div>
    <div class="detail-content" :class="panelUp ? 'show' : 'hide'">
        <slot name="content"></slot>
    </div>
</div>
</template>

<script type="text/babel">
export default {
    name: 'eppPanel',
    props: {
        title: {
            type: String,
        },
        height: {
            type: [String, Number],
            default: 0.8
        },
        zoom: {
            type: Boolean,
            default: true
        },
        up: {
            type: Boolean,
            default: true
        },
        show: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            panelUp: this.up
        }
    },
    methods: {
        arrowFn() {
            this.panelUp = !this.panelUp;
        },
        zoomFn(arg) {
            this.$emit('zoomFn', arg);
        }
    },
    computed: {
        styles() {
          return {height : this.height + 'rem'};
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.title-content {
    height: 0.8rem;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 0 0 0.3rem;
    width: 100%;
    z-index: 11;
    .panel-title {
        flex: 1;
        display: flex;
        align-items: center;
        font-size: 0.28rem;
        color: #333333;
        .title-icon {
            height: 0.24rem;
            width: 0.06rem;
            margin-right: 0.08rem;
            background: #867ae4;
            border-radius: 1rem;
        }
    }
    .zoom-icon {
        width: 1.05rem;
        height: 100%;
        background: url('../../../assets/img/zoom.svg') no-repeat center;
        background-size: 0.28rem 0.28rem;
    }
    .line {
        width: 1px;
        height: 50%;
        background: #dddddd;
    }
    .arrow-icon {
        width: 1.05rem;
        height: 100%;
        background: url('../../../assets/img/downselect.svg') no-repeat center;
        background-size: 0.22rem 0.13rem;
        transition: all 0.2s ease-in;
    }
    .arrow-up {
        transform: rotate(180deg);
    }
    .arrow-down {
        transform: rotate(0deg);
    }
}
.detail-content {
    width: 100%;
}
.show,
.hide {
    transform-origin: 50% 0%;
}
.show {
    display: block;
    max-height: 9999rem;
    transform: scaleY(1);
    animation: showAnimation 0.1s ease-in;
    transition: max-height 0.1s ease-in;
}
.hide {
    overflow: hidden;
    max-height: 0;
    transform: scaleY(0);
    animation: hideAnimation 0.1s ease-out;
    transition: max-height 0.1s ease-out;
}
@mixin animationCommon {
    60% {
        -moz-transform: scaleY(0.5);
        -ms-transform: scaleY(0.5);
        -o-transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}
@keyframes showAnimation {
    0% {
        -moz-transform: scaleY(0.1);
        -ms-transform: scaleY(0.1);
        -o-transform: scaleY(0.1);
        -webkit-transform: scaleY(0.1);
        transform: scaleY(0.1);
    }
    @include animationCommon
    100% {
        -moz-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
}
@keyframes hideAnimation {
    0% {
        -moz-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
    @include animationCommon
    100% {
        -moz-transform: scaleY(0);
        -ms-transform: scaleY(0);
        -o-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
}
</style>
