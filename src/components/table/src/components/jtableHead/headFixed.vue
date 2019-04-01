<template>
<thead>
    <tr>
        <template v-for="showItem in showColumns">
            <template v-for="(item, index) in tableData.columns" v-if="showItem==item.field">
                <th v-if="index < fixedNumber" :style="item.theadStyles">{{item.title}} </th>
            </template>
        </template>
    </tr>
</thead>
</template>
<script type="text/babel">
export default {
    props: ['tableData', 'showColumns','fixedNumber', 'mergeColRow'],
    data() {
        return {}
    },
    mounted() {

    }
}
</script>
<style lang="scss" scoped>
thead {
    tr {
        th {
            height: 0.6rem;
            font-size: 0.24rem;
            color: #999999;
            padding: 0 0.22rem;
            text-align: right;
            white-space: nowrap;
            background: #f8f8f8;
            border: 1px solid #e5e5e5;
            text-overflow: ellipsis;
            overflow: hidden;
            &:first-child {
                padding: 0 0.22rem;
                text-align: left;
                max-width: 2.35rem;
                min-width: 1.3rem;
                overflow: hidden;
            }
        }
    }
}
</style>
