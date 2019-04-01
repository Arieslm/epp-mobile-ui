### Tab
tab切换模块
#### tab切换提供两种模式
##### 1.只提供UI标题;点击返回标题内容及索引
##### 2.标题+内容切换模式
#### 部分引用
``` js
import { eppTab } from 'epp-mob-ui'
#使用到 epp-tab-item 还需要引入
import { eppTabItem } from 'epp-mob-ui'
```
#### 代码示例
```html
#点击切换(使用epp-tab-item)
epp-tab-item name值为标题;使用epp-tab-item时不可传入tablist；否则epp-tab-item无效
<epp-tab v-model="tab">
    <epp-tab-item name="测试1">
        <div class="">1111</div>
    </epp-tab-item>
    <epp-tab-item name="测试2">
        22222
    </epp-tab-item>
    <epp-tab-item name="测试3">
        33333
    </epp-tab-item>
</epp-tab>
```
```js
 data {
     tab: "测试1" //默认选中及当前选中值
 }
```
```html
#点击切换(不使用epp-tab-item)
传入tablist时；epp-tab-item无效

<epp-tab v-model="tab2" @click="clickFn" :tablist="tablist"></epp-tab>
```
```js
data {
    tab2: '测试11',
    tablist:[{name: '测试11'}, {name:'测试22'}, {name:'测试33'}]
}
methods: {
    clickFn(val, index) {
        alert(val);
        alert(index);
    }
},
```
```html
#实时数据-店员销售明细中的tab类型
传入type为circle时,为店员销售明细中的tab类型；
<epp-tab style="width: 60%" v-model="tab3" @click="clickFn" :tablist="tablist2" type="circle" width="1.2" height="0.4">
</epp-tab>
```
```js
data {
    tab3: '测试111',
    tablist2:[{name: '测试111'}, {name:'测试222'}, {name:'测试333'}]
}
methods: {
    clickFn(val, index) {
        alert(val);
        alert(index);
    }
},
```
#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |  -----:  | --:  |
|  v-model |  默认选中值 |string|   -         | -    |  -   |-
| tablist |   标题名称   |  [{name: value}] |   -   |  - | tablist元素key值必须为name;传入tablist时  |
| name  |   使用epp-tab-item时,标题名称 | string |  -  |  - |  使用epp-tab-item；不可传入tablist  |
| type  |   tab类型，square、circle这两种类型，默认为square |string|   -     | - | - |
| click   |   点击事件 |  function |   -     | -   | 返回两个参数：标题名和索引值 |
| color |   被选中字体颜色 |  string |   -     | #867ae4   | - |
| bdcolor   |   被选中底部line颜色 | string |   -     | #867ae4  |   - |
| height   |   tab高度 | string 、 number |   -     | 1  |   单位rem |
| width   |   tab宽度 | string 、 number |   -     | 1  |   单位rem |
| bdwidth   |   被选中底部line宽度 | string 、 number |   -     | 0.06  |   单位rem |
