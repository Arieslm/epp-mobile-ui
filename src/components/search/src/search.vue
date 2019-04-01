<template>
<div class="epp-search-container">
    <div class="search-container" :class="positionSet">
        <div class="search-content">
            <div class="search-box">
                <div class="search-icon" @click.prevent="searchFn"></div>
                <input type="text" v-model="searchVal" :placeholder="placeholder" @focus="focusFn" @blur="blurFn">
                <div v-show="delIcon" class="del-btn" @click.prevent="delFn"></div>
            </div>
            <div v-if="cancelText" class="cancel-btn" @click.prevent="cancel">{{cancelText}}</div>
        </div>
    </div>
    <div class="result-content">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script type="text/babel">
import utils from '@/assets/js/utils.js';
export default {
    name: 'eppSearch',
    props: {
        placeholder: {
            type: String,
            default: '请输入',
        },
        cancelText: {
            type: String,
            default: '',
        },
        position: {
            type: String,
        }
    },
    data() {
        return {
            searchVal: null,
            delIcon: false,
        };
    },
    watch: {
        searchVal(val) {
            if (val) {
                this.delIcon = true;
            } else {
                this.delIcon = false;
            }
        }
    },
    mounted() {

    },
    methods: {
        focusFn() {
            this.$emit('searchFocusFn', this.searchVal)
        },
        blurFn() {
            this.$emit('searchBlurFn', this.searchVal)
        },
        search() {
            this.$emit('searchFn', this.searchVal)
        },
        delFn() {
            this.searchVal = null;
        },
        cancel() {
            this.$emit('searchCancelFn')
        }
    },
    computed: {
        positionSet() {
            return 'epp-serach-' + this.position
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.page {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    .content {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
}
.#{$css-prefix} {
    &-search-container {
        display: flex;
        -webkit-box-orient: vertical;
        flex-direction:column;
        flex-wrap: nowrap;
        height: 100%;
        width: 100%;
        .search-container {
            height: 1.2rem;
            padding: 0.25rem 0.3rem;
            width: 100%;
            background: #fff;
            .search-content {
                display: flex;
                .search-box {
                    display: flex;
                    flex: 1;
                    height: 100%;
                    width: 100%;
                    background-color: #f8f8f8;
                    border-radius: 1rem;
                    align-items: center;
                    justify-content: center;
                    .search-icon {
                        width: .85rem;
                        height: .75rem;
                        margin-left: .1rem;
                        background: url('../../../assets/img/search.svg') no-repeat center;
                        background-size: 0.3rem 0.3rem;
                    }
                    input {
                        width: 100%;
                        height: 100%;
                        font-size: 14px;
                    }
                    .del-btn {
                        width: .8rem;
                        height: .75rem;
                        background: url('../../../assets/img/del.svg') no-repeat center;
                        background-size: 0.3rem 0.3rem;
                    }
                }
                .cancel-btn {
                    // width: 0.8rem;
                    text-align: right;
                    color: #333;
                    font-size: 0.28rem;
                    height: .75rem;
                    line-height: .75rem;
                }
            }
        }
        .result-content {
            // position: relative;
            flex: 1;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            .content {
                padding: 0.2rem 0.2rem 0 0.2rem;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }
        }
    }
}
</style>
