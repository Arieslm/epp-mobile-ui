### Button
按钮，提供几种基础样式和尺寸，可自定义部分属性

#### 部分引用
``` js
import { eppButton } from 'epp-mob-ui'
```
#### 代码示例
```html
#默认
<epp-button>Button</epp-button>
```
```html
#改变字体、边框、背景颜色
<epp-button bdcolor="#42b983" bgcolor="#fff" color="#e96900">Button</epp-button>
```
```html
#改变大小及禁用状态
<epp-button size="large" disabled>Button</epp-button>
```
```html
#点击事件
<epp-button size="normal" @click="clickFn">Button</epp-button>
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |     --:  | --:  |
| color      |   字体颜色 |  string |   -                       |#fff      |  -   |
| bgcolor    |   背景色   |  string |   -                       |  #867ae4 | -    |
| bdcolor    |   边框颜色 |  string |   -                       |  #dddddd |  -   |
| disabled   |   是否禁用 |  boolean|   -                       |  false   |  禁用状态下；不能触发点击事件 |
| size       |   尺寸     |  string  |   all、large、normal、small|  all      | -  |

#### 事件
点击事件 click
