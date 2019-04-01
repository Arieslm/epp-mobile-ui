<template>
    <div id="datepicker" class="datepicker">
        <div class="time-tab">
            <template v-for="item in datelist">
                <div class="time"  v-if="item.show" @click="timeTab(item.num, utils.getToday(item.num))" :class="{'on': tapIndex == item.num}">
                    <span class="choose-day">{{item.name}}</span>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import utils from '../../../assets/js/utils.js';
    export default {
        name: "eppDatepicker",
        props: {
            fDateType: {
                type: Number,
                default: 0
            },
            showBar: {
                type: Array,
                default: ['日', '周', '月']
            },
            subDay: {
                type: Number,
                default: 1
            },
        },

        data() {
            return {
                datelist: [{
                    name: '日',
                    num: 0,
                    show: false,
                },{
                    name: '周',
                    num: 1,
                    show: false,
                },{
                    name: '月',
                    num: 2,
                    show: false,
                },{
                    name: '自定义',
                    num: 3,
                    show: false,
                },{
                    name: '季度',
                    num: 4,
                    show: false,
                },{
                    name: '年',
                    num: 5,
                    show: false,
                }],
                utils: utils,
                showTime: '',
                startTime: '',
                endTime: '',

                tapIndex: this.fDateType,
            }
        },
        created() {
            this.showBar.forEach(item => {
                this.datelist.forEach(col => {
                    if (item == col.name) {
                        col.show = true;
                    }
                })
            })
            this.timeTab(this.tapIndex);
        },
        mounted() {
            console.log(this.$children);
        },
        methods: {
            timeTab(fDateType) {
                this.tapIndex = fDateType;
                switch (fDateType) {
                    case 0:
                        this.showTime = utils.getToday(fDateType, this.subDay);
                    break;
                    case 1:
                        this.startTime = utils.trim(this.utils.getToday(fDateType, this.subDay).split('~')[0]);
                        this.endTime = utils.trim(this.utils.getToday(fDateType, this.subDay).split('~')[1]);
                        this.showTime = `${this.startTime}~${this.endTime}`;
                    break;
                    case 2:
                        this.showTime = utils.getToday(fDateType, this.subDay);
                    break;
                    case 3:
                        this.showTime = '开始时间 ~ 结束时间';
                    break;
                    case 4:
                        this.showTime = utils.getToday(fDateType, this.subDay);
                    break;
                    case 5:
                        this.showTime = utils.getToday(fDateType, this.subDay);
                    break;
                    default:
                        this.showTime = utils.getToday(fDateType, this.subDay);
                    break;
                }
                this.$emit('datePickerDataFn', {
                    tapNum: fDateType,
                    maxDay: this.showTime,
                    name: this.datelist[fDateType].name,
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .datepicker{
        .time-tab{
            font-size: 0;
            width: 100%;
            display: flex;
            border-radius: 0.06rem;
            border: 1px solid #867ae4;
            height: 0.6rem;
            line-height: 0.6rem;
            margin-bottom: 0.3rem;
            .time{
                flex:1;
                text-align: center;
                color: #867ae4;
                position: relative;
                display: inline-block;
                border-right: 1px solid #867ae4;
                &.on{
                    background: #867ae4;
                    span{
                        color: #fff;
                    }
                }
                &:last-child{
                    border-right: none;
                }
                span {
                    font-size: 0.28rem;
                }
            }
        }
    }
</style>
