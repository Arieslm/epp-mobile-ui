<template>
<tbody>
  <template v-for="(item,indexs) in tableData.data">
      <tr :style="item.styles">
          <template v-for="(col,index) in tableData.columns">
              <template v-for="showItem in showColumns">
                  <td v-if="showItem==col.field" :data-col="index" :data-row="indexs"
                  :style="item.important ? item.styles : col.styles">
                       <template>
                           {{item[col.field]}}
                       </template>
                  </td>
              </template>
          </template>
      </tr>
  </template>
</tbody>
</template>
<script type="text/babel">
export default {
    props: ['tableData', 'showColumns'],
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
tbody{
        tr {
            border-top: 1px solid #e5e5e5;
            height: 0.6rem;
            font-size: 0.24rem;
            color: #333333;
            td {
                text-align: right;
                max-width: 2.35rem;
                min-width: 1.01rem;
                overflow: hidden;
                white-space: unset;
                position: relative;
                border: 1px solid #e5e5e5;
                padding: 0 0.16rem;
            }
        }
}
</style>
