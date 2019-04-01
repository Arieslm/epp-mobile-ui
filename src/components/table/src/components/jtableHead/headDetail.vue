<template>
    <thead>
        <tr>
        <template v-for="showItem in showColumns">
            <template v-for="(item, index) in tableData.columns" v-if="showItem==item.field">
                <th v-if="index >= fixedNumber" :style="item.theadStyles">{{item.title}}</th>
            </template>
        </template>
        </tr>
    </thead>
</template>
<script type="text/babel">
export default{
    props : ['tableData', 'showColumns', 'fixedNumber'],
    data(){
        return{
        }
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
thead{
    tr {
        height: 0.6rem;
        th {
            font-size: 0.24rem;
            color: #999999;
            min-width: 0.9rem;
            padding: 0 0.16rem;
            text-align: right;
            white-space: nowrap;
            background: #f8f8f8;
            border: 1px solid #e5e5e5;
        }
    }
}
</style>
