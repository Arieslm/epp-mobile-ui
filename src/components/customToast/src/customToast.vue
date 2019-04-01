<template>
    <div class="epp-customtoast-content">
        <div class="over-mask">
            <div class="center content" :class="center ? 'center' : 'normal'" :style="styles">
                <div class="container">
                    <div v-if="imgurl" class="detail-header" :style="headerstyles">
                        <img :src="imgurl" alt="">
                    </div>
                    <div class="detail-info" :class="{'bbradius': !imgurl}" :style="detailstyles">
                        <slot></slot>
                    </div>
                </div>
                <div class="close-icon" @click="customToastCloseFn"></div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'eppCustomtoast',
    props: {
        width: {
            type: [Number, String],
            default: 6
        },
        detailH: {
            type: [Number, String],
        },
        headerH: {
            type: [Number, String],
            default: 1
        },
        center: {
            type:  Boolean,
            default: true,
        },
        top: {
            type: [Number, String],
            default: 1
        },
        imgurl: {
            type: String,
        }
    },
    data() {
        return {

        };
    },
    mounted() {

    },
    watch: {
        detailH(val) {
            console.log(val);
        }
    },
    methods: {
        customToastCloseFn() {
            this.$emit('customToastCloseFn', true)
        }
    },
    computed: {
        styles () {
            let style = {};
            style = {
                width: this.width + 'rem',
            };
            if (!this.center) {
                style.top = this.top + 'rem'
            }
            console.log('styles', style);
            return style;
        },
        detailstyles() {
            let style = {};
            if (this.detailH) {
                style = {
                    height: this.detailH + 'rem',
                };
            }
            console.log('detailstyles', style);
            return style;
        },
        headerstyles() {
            let style = {};
            style = {
                height: this.headerH + 'rem',
            };
            console.log('headerstyles', style);
            return style;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.epp-customtoast-content {
    .over-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.68);
        z-index: 10000000;
        .center {
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .normal {
            transform: translateX(-50%);
        }
        .content {
            max-height: 75%;
            position: absolute;
            left: 50%;
            .detail-header {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .detail-info {
                width: 100%;
                min-height: 0.5rem;
                max-height: 9rem;
                overflow-y: auto;
                background: #fff;
                -webkit-overflow-scrolling: touch;
                border-bottom-left-radius: .14rem;
                border-bottom-right-radius: .14rem;
            }
            .bbradius {
                border-radius: .14rem;
            }
            .close-icon {
                width: 50%;
                height: .5rem;
                background: url('../../../assets/img/close-btn.png') no-repeat center;
                background-size: .48rem .48rem;
                margin: 0 auto;
                margin-top: .4rem;
            }
        }
    }
}
</style>
