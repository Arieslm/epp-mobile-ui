<template>
<tbody>
      <template v-for="(item,indexs) in tableData.data" >
        <tr :style="item.styles">
            <template v-for="(key,index) in tableData.columns" v-if="index < fixedNumber">
                <td :data-col="index" :data-row="indexs" :class="boxTd ? 'normal-td' : 'box-td'">
                     <!-- <span v-if="item[key.field + '_jump_func']" @click="item[key.field + '_jump_func'](index,indexs,item)" >{{item[key.field]}}</span> -->
                      <span :style="item.important ? item.styles : key.styles">{{item[key.field]}}</span>
                </td>
            </template>
        </tr>
      </template>
</tbody>
</template>
<script type="text/babel">
export default {
    props: ['tableData', 'showColumns', 'fixedNumber', 'mergeColRow'],
    data() {
        return {
            h: 0,
        }
    },
    mounted() {

    },
    methods: {
        // isNumber(item) {
        //     let noNumber = /[\u4E00-\u9FA5]/;
        //     return noNumber.test(`${item}`);
        // }
    },
    computed: {
        boxTd() {
            console.log(this.mergeColRow);
            let arr = this.mergeColRow || [];
            return arr.length > 0 ? true : false;
        }
    }
}
</script>
<style lang="scss" scoped>
tbody{
    tr {
        border: 1px solid #e5e5e5;
        height: 0.8rem;
        font-size: 0.24rem;
        color: #333333;
        .box-td {
            padding: 0 0.22rem;
            overflow: hidden;
            line-height: .35rem;
            text-overflow: ellipsis;
            border: none;
            max-width: 1.9rem;
            span {
                &:first-child {
                    text-align: left;
                    overflow: hidden;
                    // width: 100%;
                    line-height: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    /*! autoprefixer: ignore next */
                    -webkit-box-orient: vertical;
                    border: none;
                }
            }
        }
        .normal-td {
            padding: 0 0.22rem;
            text-align: right;
            max-width: 1.8rem;
            min-width: 1.3rem;
            // text-overflow: ellipsis;
            overflow: hidden;
            white-space: unset;
            text-overflow: ellipsis;
            border: 1px solid #e5e5e5;
            span {
                &:first-child {
                    text-align: left;
                    max-width: 1.8rem;
                    min-width: 1.3rem;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>
