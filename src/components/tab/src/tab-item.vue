<template>
    <div class="epp-tab-item-content" :data-uid="_uid" :class="{'is-active': isActive}">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'eppTabItem',
    componentName: 'eppTabItem',
    props: {
        name: {
            required: true
        }
    },
    mounted() {
        this.dispatch('eppTab', 'epp.tab.addItem', [this]);
    },
    computed: {
        isActive() {
            return this.$parent.value === this.name;
        }
    },
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.componentName;
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
                //parent.$emit(eventName, params);
            }
        },
    },
    beforeDestroy() {
        this.dispatch('eppTab', 'epp.tab.removeItem', [this]);
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.epp-tab-item-content {
    display: none;
}
.is-active{
    display: block;
}
</style>
