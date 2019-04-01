### Search

#### 部分引用
``` js
import { eppSearch } from 'epp-mob-ui'
```
#### 代码示例
```html
#默认
<epp-search></epp-search>
```
```html
#输入框文字
<epp-search placeholder="输入框的文字啊"></epp-search>
```
```html
#右侧取消文字
<epp-search cancel-text="取消"></epp-search>
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |     --:  | --:  |
| cancel-text|  取消文字 |  string |   -                       |-      |  -   |
| placeholder|   输入提示框文字   |  string |   -                       |  请输入 | -    |
| searchFocusFn    |   搜索框聚焦事件回调 |  function |  -   |  - |  返回当前搜索框输入文字  |
| searchBlurFn   |   搜索框失焦事件回调 |  function |   -     | -   |  返回当前搜索框输入文字 |
| searchFn       |   点击搜索事件回调     |  function  |   - |  -     | 返回当前搜索框输入文字  |
| searchCancelFn       |   取消文字事件回调     |  function  |   - |  -  | -  |
