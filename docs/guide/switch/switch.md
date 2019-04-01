### Search
可滑动按钮
#### 部分引用
``` js
import { eppSwitch } from 'epp-mob-ui'
```
#### 代码示例
```html
#默认
<epp-switch></epp-switch>
```
```html
#选中状态
<epp-switch :value="false"></epp-switch>
```
```html
#自定义颜色
<epp-switch color="#e6a23c"></epp-switch>
```
```html
#禁用状态
<epp-switch disabled :value="false"></epp-switch>
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |  -----:  | --:  |
| value |  选中状态 |  Boolean |   true、false                | true      |  -   |
| color|   颜色   |  string |   -                       |  #4cd964 | -    |
| disabled    |   是否可点击 |  Boolean |  true、false  |  true |  -  |
| click   |   点击回调函数 |  function |   -     | -   |  选中arg返回true、否返回false |
