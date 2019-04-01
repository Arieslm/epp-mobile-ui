### table
table表格组件

#### 部分引用
``` js
import { eppTable } from 'epp-mob-ui'
```
#### 代码示例
```html
#滑动表格 + 表头多列
表头多列fixedNumber属性控制(默认为1)
<epp-table @click="tableFn" class="table-test" :fixedNumber="1" :tableData="sexSaleData" :showColumns="sexSaleDataColumns">
</epp-table>
```
```html
#滑动表格 + 默认单列表头
表头多列fixedNumber属性控制(默认为1)
合并单元格mergeColRow属性控制
<epp-table @click="tableFn" class="table-test" :mergeColRow="mergeColRow1" :tableData="activitySaleData" :showColumns="activitySaleDataColumns">
</epp-table>
```
```html
#普通表格 + 自定义表头
<epp-table @click="tableFn" class="table-test" :tableData="timeSaleData" :isScrollTable="false" :showColumns="showColumns">
    <template>
        <thead>
            <tr>
                <th rowspan="2">时段</th>
                <th colspan="2" style="text-align:center;">本日</th>
                <th colspan="2" style="text-align:center;">上周同期</th>
            </tr>
            <tr>
                <th>销额增量</th>
                <th>销额累计</th>
                <th>销额增量</th>
                <th>销额累计</th>
            </tr>
        </thead>
    </template>
</epp-table>
```
```html
#普通表格 + 合并单元格
合并单元格mergeColRow属性控制
<epp-table @click="tableFn" class="table-test" :mergeColRow="mergeColRow1" :isScrollTable="false" :tableData="areaSaleData" :showColumns="areaSaleDataColumns">
</epp-table>
```
```js
 data {
     mergeColRow1: [0, 4],
 }
```
#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |  -----:  | --:  |
| fixedNumber |  滑动表格左侧列数 |string 、number|   -         | 1    |  默认为左侧为单列  |
| tableData |   表格数据   |  Object |   -   |  - | 大算表格数据格式{columns:[],data:[]}  |
| showColumns  |   表格表头数据 | array |  -  |  - |  大算表格数据格式[]  |
| isScrollTable  |   滑动表格or普通表格 |Boolean|   -     | true | isScrollTable为false为普通表格 |
| click   |   点击事件 |  function |   -     | -   | 返回两个参数：点击的位置（行、列） |
| mergeColRow |   合并单元格 |  Array |   -     | -  | [0,1] 从0（代表第0列）列；1（代表第1行）行开始合并当前列相同文字 |
| styles   |   自定义行列样式 | Object |   -  | -  |tableData中columns、data中styles自定义属性 例：tableData:{"columns":[{"styles": {fontWeight: 'bold', color: '#867ae4'}],"data":[{"styles":{fontWeight: 'bold', color: 'red'}}]|
| important   |   影响styles属性 |  Boolean |   -     |  -  |   当td同时被columns、data中styles样式重叠，important为true时表现行(data)中的样式 |
