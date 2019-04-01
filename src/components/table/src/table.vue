<template>
    <div class="table" @click="clickFn($event, index)">
        <!-- 滑动表 -->
        <div class="scroll-table ScrollY" v-if="isScrollTable">
            <!-- 表头 -->
            <table class="left-table" :class="{'bdshow':!nobdshow}">
                <head-fixed :showColumns="showColumns" :tableData="tableData" :fixedNumber="fixedNumber" :mergeColRow="mergeColRow"></head-fixed>
                <body-fixed :showColumns="showColumns" :tableData="tableData" :fixedNumber="fixedNumber" :mergeColRow="mergeColRow"></body-fixed>
            </table>
            <div :class="scroll ? 'ScrollN' : 'ScrollY'">
                <!-- 表格内容 -->
                <table class="right-table">
                <template>
                      <thead-detail :tableData="tableData" :showColumns="showColumns" :fixedNumber="fixedNumber" :mergeColRow="mergeColRow"></thead-detail>
                 </template>
                <template>
                      <tbody-detail :tableData="tableData" :showColumns="showColumns" :fixedNumber="fixedNumber" :mergeColRow="mergeColRow"></tbody-detail>
                  </template>
                </table>
           </div>
        </div>

        <!-- 普通表 -->
        <div v-else>
            <table id="tables" class="fixed-col">
                <!-- 表头 -->
                <template v-if="!$slots.default">
                    <thead-blockarea :tableData="tableData" :showColumns="showColumns"></thead-blockarea>
                </template>
                <slot></slot>
                <!-- 表格内容 -->
                <tbody-blockarea :tableData="tableData" :showColumns="showColumns"></tbody-blockarea>
            </table>
        </div>
    </div>
</template>
<script>
    import utils from '@/assets/js/utils.js';
    import theadBlockarea from './components/jtableHead/headBlockArea';
    import tbodyBlockarea from './components/jtableBody/bodyBlockArea';
    import headFixed from './components/jtableHead/headFixed';
    import bodyFixed from './components/jtableBody/bodyFixed';
    import theadDetail from './components/jtableHead/headDetail';
    import tbodyDetail from './components/jtableBody/bodyDetail';
    export default {
        name: 'eppTable',
        props: {
            tableData: {
                type: Object,
            },
            showColumns: {
                type: Array,
            },
            isScrollTable: {
                type: Boolean,
                default: true,
            },
            fixedNumber: {
                type: [String, Number],
                default: 1,
            },
            mergeColRow: {
                type: Array
            }
        },
        components: {
            theadBlockarea,
            tbodyBlockarea,
            headFixed,
            bodyFixed,
            tbodyDetail,
            theadDetail
        },
        data() {
            return {
                footerNum: 0,
            }
        },
        mounted() {
            this.mergeTable() //切割多列行
        },
        watch: {
            footerNum() {
                if (this.footerNum == 1) {
                    this.watchScroll();
                }
            }
        },
        updated () {
            this.mergeTable() //切割多列行。
        },
        methods: {
            clickFn(e, idx) {
                let row = e.path[0].getAttribute('data-row');
                let col = e.path[0].getAttribute('data-col');
                this.$emit('click', row, col);
            },
            mergeTable () {
                var Dom = this.$el.querySelector('table');
                if (this.mergeColRow && this.mergeColRow.length && this.mergeColRow.length > 2) {
                    let arr=[];
                    for(var i=0;i< this.mergeColRow.length; i= i + 2){
                       arr.push(this.mergeColRow.slice(i, i + 2));
                    }
                    arr.reverse();
                    arr.forEach((item)=>{
                        this.$nextTick(()=>{
                            utils.SpanGrid(Dom, item[0], item[1]);
                        })
                    })
                } else if (this.mergeColRow && this.mergeColRow.length) {
                    this.$nextTick(()=>{
                        utils.SpanGrid(Dom, this.mergeColRow[0], this.mergeColRow[1]);
                    })
                }
            },
            watchScroll () {
                window.addEventListener('scroll', this.handleScroll);
            },
            handleScroll () {
                this.scroll = window.scrollY / 100 > 0.1 ? false : true;
            }
        }
    }
</script>
<style lang="scss" scoped>
.table {
    width: 100%;
    background: #fff;
    .fixed-col {
        width: 100%;
        background: #fff;
        width: calc(100%);
    }
    .left-table {
        float: left;
        background: #fff;
        z-index: 1;
        position: relative;
        table-layout: fixed;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.16);
    }
    .right-table {
        margin-left: -1px;
        width: calc(100% + 1px);
        position: relative;
    }
    table {
        thead {
            // background:#f8f8f8;
            width: 100%
        }
        tbody {

        }
    }
}
.ScrollY {
    overflow-x:auto;
    -webkit-overflow-scrolling: touch;
}
.ScrollN {
    overflow: hidden;
}
</style>
