<template>
    <div class="epp-loadmore-content">
        <div class="">
            <slot></slot>
        </div>
        <!-- <div v-show="!isloading"  class="loading-box"></div> -->
        <loading-gif v-show="!isloading" :versions="1" class="loading-gif">算</loading-gif>
    </div>
</template>
<script type="text/babel">
import loadingGif from './loadingGif.vue'
console.log(loadingGif);
export default {
	name: "eppLoadmore",
    props: {
        isload: {
            type: Boolean,
            default: true,
        },
        pagenum: {
            type: Number | String,
            default: 0,
        }
    },
    data(){
        return {
            scrollHeight: '',
            clientHeight: '',
            tablist: 20,
            isloading: true,
            loadingPage: this.pagenum,
        }
    },
    components: {loadingGif},
    computed: {},
    watch: {
        pagenum(val) {
            // console.log(this.isloading)
            this.addEvent();
        }
    },
    created(){},
    mounted(){
        console.log(12222);
        this.addEvent();
    },
    methods: {
        addEvent() {
            // console.log(111, this.isloading);
            this.isloading = this.isload;
            console.log(333333);
            window.addEventListener('scroll', this.handleScroll);
            console.log(444444);
        },
        handleScroll() { //  滑动懒加载；
            console.log(11111);
            this.scrollHeight = document.documentElement.scrollHeight;
            this.clientHeight = document.documentElement.clientHeight;
            if (window.scrollY + 10 > this.scrollHeight - this.clientHeight && this.isloading) {
                this.isloading = false;
                this.loadingPage ++;
                console.log(this.loadingPage);
                this.$emit('loadmoreFn', this.loadingPage, this.isloading);
                window.removeEventListener('scroll', this.handleScroll);
            }
        },
    },
}
</script>
<style scoped lang="scss">
    .epp-loadmore-content {
        margin: 0 auto;
        font-size: 18px;
    }
    .loading-box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.68);
        z-index: 10000000;
    }
    .loading-gif {
        position: fixed;
        top: 50%;
        z-index: 1000;
        left: 50%;
        width: 100px;
        height: 100px;
    }
</style>
