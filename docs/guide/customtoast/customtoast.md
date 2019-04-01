### customToast
自定义弹窗
#### 部分引用
``` js
import { eppCustomtoast } from 'epp-mob-ui'
```
#### 代码示例
```html
#默认 + 点击事件
<epp-button size="normal" @click="btnFn">显示customToast</epp-button>

<epp-customtoast @customToastCloseFn="customToastCloseFn">
    <div class="" v-for="i in 50">
        <epp-cell title="左侧标题内容" value="右侧内容"></epp-cell>
    </div>
</epp-customtoast>
```
```html
#顶部背景图
<epp-button size="normal" @click="btnFn2">显示customToast</epp-button>

<epp-customtoast :imgurl="imgUrl" @customToastCloseFn="customToastCloseFn2">
    <div class="" v-for="i in 5">
        <epp-cell title="左侧标题内容" value="右侧内容"></epp-cell>
    </div>
</epp-customtoast>
```
```html
#自定义宽度、高度、位置
<epp-button size="normal" @click="btnFn3">显示customToast</epp-button>

<epp-customtoast :imgurl="imgUrl"  :center="false" width="4" :header-h="2" :detail-h="5" :top="1" @customToastCloseFn="customToastCloseFn3">
    <div class="" v-for="i in 50">
        <epp-cell title="左侧标题内容" value="右侧内容"></epp-cell>
    </div>
</epp-customtoast>
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |  -----:  | --:  |
| width |  toast宽度 |string、number|   -         | 6      |  -   |单位rem
| detail-h|   toast内容高度   |  string 、number |   -                       |  - | 单位rem;toast内容高度最大值为9rem超出会滚动条  |
| header-h|   toast上部图片高度 |  string 、 number |  -  |  1 |  单位rem  |
| top   |   toast自定义高度 |  string 、 number |   -     | 1   |  自定义高度 center传false |
| center   |   toast位置 |  Boolean |   -     | true   | - |
| customToastCloseFn   |   点击回调函数 | function |   -     | -  |   返回true |
