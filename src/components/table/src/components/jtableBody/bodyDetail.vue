<template>
<tbody>
    <template v-for="(item,indexs) in tableData.data">
            <tr :style="item.styles">
                <template v-for="(key,index) in tableData.columns">
                    <template v-for="showItem in showColumns" v-if="showItem==key.field && index >= fixedNumber">
                        <td :data-col="index" :data-row="indexs"
                        :style="item.important ? item.styles : key.styles" >
                             <template>{{item[key.field]}}</template>
                        </td>
                    </template>
                </template>
            </tr>
    </template>
</tbody>
</template>
<script type="text/babel">
export default {
    props: ['tableData', 'showColumns', 'fixedNumber'],
    data() {
        return {}
    },
    mounted() {
    },
    // computed: {
    //     styles(col, row) {
    //         return function () {
    //             // console.log('col:', col, 'row:', row);
    //             let pos = [0, 5];
    //             this.dataStyles(showColumns, col, pos);
    //             let styles = {color: 'red'};
    //             return styles
    //         }
    //     }
    // },
    methods: {
        dataStyles(data, col, pos) {
            console.log(data, col, pos);
            // data.forEach(item, index) {
            //     if (item.style && )
            // }
        }
    }
}
</script>
<style lang="scss" scoped>
.bgred {
    background: red;
}
tbody {
    tr {
        border: 1px solid #e5e5e5;
        height: 0.8rem;
        overflow: hidden;
        font-size: 0.24rem;
        td {
            border: 1px solid #e5e5e5;
            text-align: right;
            font-size: 0.24rem;
            color: #333333;
            min-width: 0.9rem;
            padding: 0 0.16rem;
            white-space: nowrap;
            text-align: right;
        }
    }
}
</style>
