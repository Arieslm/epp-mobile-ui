<template>
    <div class="layout">
        <epp-search placeholder="输入框的文字啊">
            <div class="">
                <epp-cell v-for="i in tablist" :key="i" slot="content" :title="0 + i" value="打交道"></epp-cell>
                <epp-loadmore @loadmoreFn="loadmoreFn" :isload="isload" :pagenum="pagenum"></epp-loadmore>
            </div>
        </epp-search>
        <!-- <epp-cell v-for="i in tablist" :key="i" slot="content" :title="0 + i" value="打交道"></epp-cell> -->
    </div>
</template>
<script type="text/babel">
export default {
	// name: "demo",
    data(){
        return {
            tab: '测试1',
            close: true,
            close1: true,
            tablist: 30,
            isload: true,
            pagenum: 0,
        }
    },
    components: {},
    computed: {},
    watch: {},
    created(){},
    mounted(){
    },
    methods: {
        loadmoreFn(num, type) {
            let _this = this;
            setTimeout(()=>{
                _this.pagenum ++;
                this.tablist += 10;
            }, 1000)
            console.log(num ,type)
        }
    },
}
</script>
<style scoped lang="scss">
    .layout {
        height: 100%;
        margin: 0 auto;
        font-size: 18px;
        background: #fff;
    }
</style>
