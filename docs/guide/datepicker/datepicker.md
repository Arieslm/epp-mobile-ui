### Datepicker
时间组件
#### 部分引用
``` js
import { eppDatepicker } from 'epp-mob-ui'
```
#### 代码示例
```html
#默认
<epp-datepicker :fDateType="date_type" :showBar="showBar" @click="datePickerDataFn">
    <info title="Datepicker" content="时间组件" istitle="true"></info>
</epp-datepicker>
<div class="time-box">
    <span class="show-time">{{showTime}}</span>
</div>
```
```js
#默认js code
data {
    date_type: 0,
    showBar: ['日','月','周'],
    showTime: '',   
}
methods: {
    datePickerDataFn(val) {
        this.showTime = val.maxDay;
        console.log(val);
    }
},
```
```html
#增加季度、年
<epp-datepicker :fDateType="date_type" :showBar="showBar2" @click="datePickerDataFn"></epp-datepicker>
<div class="time-box">
    <span class="show-time">{{showTime}}</span>
</div>
```
```js
#默认js code
data {
    date_type: 0,
    showBar2: ['日','月','周','季度','年'],
    showTime: '',    
}
methods: {
    datePickerDataFn(val) {
        this.showTime = val.maxDay;
        console.log(val);
    }
},
```

#### API

| 参数        |    说明   |     类型 |         可选值            | 默认值    |  备注 |
| -----------| :-------: |  -----: | -----------------------: |  -----:  | --:  |
| showBar |  日期类别选项 |  array |   日、月、周、自定义、季度、年   | ['日','月','周']      |  -   |
| date_type|  默认日期选择   |  Number |   0~4                      |  0 | '0~4对应showBar的可选值  |
| subDay    |   推迟时间 |  Number |  true、false  |  1 |  选择器日期默认推迟一天  |
| click   |   点击回调函数 |  function |   -     |  -  |  返回Object, name:点击名称,tapNum:点击的date_type值,maxDay:日期值 |
