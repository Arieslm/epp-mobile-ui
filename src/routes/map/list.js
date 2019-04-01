export default [
    {
        path: '/button',
        component: ()=> import('../../views/demo/button.vue'),
        meta: {
            title: 'button'
        },
        name: 'button',
        isDemo: true,
    },
    {
        path: '/cell',
        component: ()=> import('../../views/demo/cell.vue'),
        meta: {
            title: 'cell'
        },
        name: 'cell',
        isDemo: true,
    },
    {
        path: '/search',
        component: ()=> import('../../views/demo/search.vue'),
        meta: {
            title: 'search'
        },
        name: 'search',
        isDemo: true,
    },
    {
        path: '/switch',
        component: ()=> import('../../views/demo/switch.vue'),
        meta: {
            title: 'switch'
        },
        name: 'switch',
        isDemo: true,
    },
    {
        path: '/datepicker',
        component: ()=> import('../../views/demo/datepicker.vue'),
        meta: {
            title: 'datepicker'
        },
        name: 'datepicker',
        isDemo: true,
    },
    {
        path: '/customtoast',
        component: ()=> import('../../views/demo/customtoast.vue'),
        meta: {
            title: 'customtoast'
        },
        name: 'customtoast',
        isDemo: true,
    },
    {
        path: '/toast',
        component: ()=> import('../../views/demo/toast.vue'),
        meta: {
            title: 'toast'
        },
        name: 'toast',
        isDemo: true,
    },
    {
        path: '/panel',
        component: ()=> import('../../views/demo/panel.vue'),
        meta: {
            title: 'panel'
        },
        name: 'panel',
        isDemo: true,
    },
    {
        path: '/tab',
        component: ()=> import('../../views/demo/tab.vue'),
        meta: {
            title: 'tab'
        },
        name: 'tab',
        isDemo: true,
    },
    {
        path: '/table',
        component: ()=> import('../../views/demo/table.vue'),
        meta: {
            title: 'table'
        },
        name: 'table',
        isDemo: true,
    },
]
