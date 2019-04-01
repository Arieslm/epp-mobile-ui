### Toast
通知弹出组件

#### 部分引用
``` js
import { eppToast } from 'epp-mob-ui'
```
#### 代码示例
```html
#默认 + top
<epp-toast top="4.9" >
    <slot>
        <p>12312312</p>
    </slot>
</epp-toast>
```
```html
#其他配置项
<epp-toast @click="toastFn" width="2" height="1.5" padding="0.4" top="7.3" left="0.8" arrow-left="1.5">
    <slot>
        <p>12312312</p>
    </slot>
</epp-toast>
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |  -----:  | --:  |
| width |  toast宽度 |string、number|   -         | 6      |  -   |单位rem
| height|   toast内容高度   |  string 、number |   -                       |  - | 单位rem  |
| arrow-left|   箭头位于左边位置 | Number 、 String |  -  |  0.05 |  单位rem  |
| left  |   toast位于左边位置 |Number 、 String|   -     | 0 | 单位rem |
| top   |   toast位于顶部位置 |  Number 、 String |   -     | 0   | 单位rem |
| padding |   toast内容padding |  Number 、 String |   -     | 0.22   | 单位rem |
| click   |   点击事件 | function |   -     | -  |   - |
