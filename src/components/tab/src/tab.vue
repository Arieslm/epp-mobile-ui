<template>
    <div class="epp-tab-content">
    	<ul class="epp-tab-banner">
            <li class="epp-tab-nav"
                v-for="(item, index) in (titlelist.length > 0 ? titlelist : tablist)"
                :key="item._uid"
                @click="changeTab(item, index)"
                :style="value === item.name ? stylesActive : styles"
            >
                {{item.name}}
            </li>
        </ul>
        <div class="epp-tab-box">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
import utils from '@/assets/js/utils.js';
export default {
    name: 'eppTab',
    componentName: 'eppTab',
    props: {
        type: {
            type: String,
            default: 'square'
        },
        value: {},
        tablist: {
            type: Array,
            default: []
        },
        color: {
            default: '#867ae4'
        },
        bdcolor: {
            default: '#867ae4'
        },
        height: {
            type: [String, Number],
            default: '1'
        },
        width: {
            type: [String, Number],
            default: '1'
        },
        bdwidth: {
            type: [String, Number],
            default: '0.06'
        },
        bdradius: {
            type: [String, Number],
            default: '0.195'
        },

    },
    data() {
        return {
            titlelist: [],
        };
    },
    created() {
        this.$on('epp.tab.addItem', item => {
            let childs = this.$el.querySelectorAll('.epp-tab-item-content');
            for (let i = 0; i < childs.length; i++) {
                let child = childs[i];
                if (item._uid === +child.dataset['uid']) {
                    this.titlelist.splice(i, 0, item);
                    break;
                }
            }
        });
        this.$on('epp.tab.removeItem', item => {
            let idx = this.titlelist.indexOf(item);
            if (this.value === item.name) {
                this.changeTab(this.titlelist[0]);
            }
            if (item !== -1) {
                this.titlelist.splice(idx, 1);
            }
        });
    },
    computed: {
        stylesActive() {
            let style = {};
            if (this.type === 'square') {
                style = {
                    color: this.color,
                    borderColor: this.bdcolor,
                    borderBottomStyle: 'solid',
                    borderWidth: this.bdwidth + 'rem',
                    height: this.height + 'rem',
                    width: this.width + 'rem',
                }
            } else {
                style = {
                    color: 'white',
                    fontSize: '.24rem',
                    backgroundColor: this.bdcolor,
                    borderRadius: this.bdradius + 'rem',
                    height: this.height + 'rem',
                    width: this.width + 'rem',
                }
            }
            return style
        },
        styles() {
            let style = {};
            if (this.type === 'square') {
                style = {
                    height: this.height + 'rem',
                    width: this.width + 'rem',
                    border: 'none',
                }
            } else {
                style = {
                    color: '#999',
                    fontSize: '.24rem',
                    backgroundColor: '#eee',
                    borderRadius: this.bdradius + 'rem',
                    height: this.height + 'rem',
                    width: this.width + 'rem',
                }
            }
            return style
        }
    },
    methods: {
        changeTab(item, index) {
            if (item && item.name !== this.value) {
                this.$emit('input', item.name);
                this.$emit('click', item.name, index, this.tablist);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.epp-tab-banner {
    display: flex;
    width: 100%;
    font-size: .28rem;
    font-weight: bold;
    color: #666666;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    .epp-tab-nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
