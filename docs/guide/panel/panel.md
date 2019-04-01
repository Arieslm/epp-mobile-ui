### Panel
通用标题

#### 部分引用
``` js
import { eppPanel } from 'epp-mob-ui'
```
#### 代码示例
```html
#"默认 + 标题
<epp-panel title="测试"></epp-panel>
```
```html
#去掉箭头&&全屏图标
<epp-panel title="测试" :show="false" :zoom="false"></epp-panel>
```
```html
#箭头向下
<epp-panel title="测试" :up="false"></epp-panel>
```
```html
#添加内容(显示||隐藏)
<epp-panel @arrowFn="arrowFn" title="测试" @zoomFn="zoomFn">
    <epp-cell slot="content" title="Tess说" value="打交道" v-for="(i, m) in 3" :key="m"></epp-cell>
</epp-panel>
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |  -----:  | --:  |
| title |  标题名称 |string |   -         | -      |  -   |
| height|   title高度   |  string 、number |   -                       |  - | 单位rem  |
| zoom |   全屏icon展示 |  Boolean |  -  |  true |  -  |
| show  |   箭头icon展示 | Boolean |   -     | true | 点击箭头控制slot内容展示隐藏 |
| up   |   箭头方向 |  Boolean |   -     | true  | up为true；箭头向上；内容展示 |
| padding |   toast内容padding |  Number 、 String |   -     | 0.22   | 单位rem |
| zoomFn   |   全屏按钮点击事件 | function |   -     | -  |   - |
