### Cell
单元格，可用作展示列表信息、链接等

#### 部分引用
``` js
import { eppCell } from 'epp-mob-ui'
```
#### 代码示例
```html
#默认 + 点击事件
<epp-cell title="店铺名称" value="北京蓝色港湾NK"  @click="recives"></epp-cell>
```
```html
#文字居右
<epp-cell title="左侧标题内容" value="右侧内容" align="right" @click="recives"></epp-cell>
```
```html
#右侧箭头
<epp-cell title="左侧标题内容" value="右侧内容" align="right" @click="recives" arrow="true"></epp-cell>
```
```html
#左侧复杂
<epp-cell title="左侧标题内容" value="右侧内容" type="icon" align="right" @click="recives" arrow="true">
    <div slot="icon" class="cell-img"></div>
</epp-cell>
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |     --:  | --:  |
| title      |  左侧标题内容 |  string |   -                       |-      |  -   |
| value    |   右侧内容   |  string |   -                       |  #867ae4 | 复杂样式用slot    |
| align    |   右侧内容文字位置 |  string |  left；right；center   |  left |  -   |
| type   |   左侧为复杂内容 |  string |   icon、normal      |  normal   |  复杂样式用slot；name值为icon |
| arrow       |   箭头     |  Boolean  |   true、false |  false     | -  |

#### 事件
点击事件 click
